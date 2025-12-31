"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Scene() {
  const cubeRef = useRef(null);
  const { camera } = useThree();

  useLayoutEffect(() => {
    if (!camera || !cubeRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".scroll-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      });

      // 🎥 Camera cinematic movement
      tl.to(camera.position, {
        z: 2,
        x: 1,
        ease: "none",
      });

      // Optional subtle rotation
      tl.to(
        camera.rotation,
        {
          y: -0.3,
          x: -0.1,
          ease: "none",
        },
        0
      );
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [camera]);

  return (
    <>
      <mesh ref={cubeRef}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#4f46e5" />
      </mesh>
    </>
  );
}

export default function Home() {
  return (
    <>
      {/* Scroll Area */}
      <section
        className="scroll-section"
        style={{
          height: "200vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Scroll to reveal</h1>
      </section>

      {/* 3D Canvas */}
      <Canvas
        style={{ height: "100vh" }}
        camera={{ position: [0, 0, 4], fov: 75 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Scene />
      </Canvas>

      {/* Extra scroll */}
      <div style={{ height: "200vh" }} />
    </>
  );
}
