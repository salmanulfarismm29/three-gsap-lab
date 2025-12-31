"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* -------------------- 3D SCENE -------------------- */
function Scene({ timeline }) {
  const cubeRef = useRef(null);
  const { camera } = useThree();

  useLayoutEffect(() => {
    if (!timeline || !camera || !cubeRef.current) return;

    timeline
      .to(camera.position, {
        z: 2.5,
        ease: "none",
      })
      .to(
        camera.rotation,
        {
          y: -0.3,
          x: -0.1,
          ease: "none",
        },
        0
      )
      .to(
        cubeRef.current.rotation,
        {
          y: Math.PI * 0.5,
          ease: "none",
        },
        0
      );
  }, [timeline, camera]);

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#4f46e5" />
    </mesh>
  );
}

/* -------------------- PAGE -------------------- */
export default function Home() {
  const sectionRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const timelineRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          // markers: true,
        },
      });

      timelineRef.current = tl;

      /* -------- TEXT STORY BEATS -------- */
      tl.fromTo(
        text1Ref.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.3 }
      )
        .to(text1Ref.current, {
          opacity: 0,
          y: -40,
          duration: 0.3,
        })
        .fromTo(
          text2Ref.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.3 },
          "<"
        );
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* INTRO */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Scroll Down 👇</h1>
      </section>

      {/* PINNED SECTION */}
      <section
        ref={sectionRef}
        style={{
          height: "100vh",
          position: "relative",
        }}
      >
        {/* TEXT OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <h1 ref={text1Ref} style={{ position: "absolute", opacity: 0 }}>
            Designed for Performance
          </h1>

          <h1 ref={text2Ref} style={{ position: "absolute", opacity: 0 }}>
            Built for Experience
          </h1>
        </div>

        {/* 3D CANVAS */}
        <Canvas camera={{ position: [0, 0, 4], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Scene timeline={timelineRef.current} />
        </Canvas>
      </section>

      {/* OUTRO */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>End of Story ✨</h1>
      </section>
    </>
  );
}
