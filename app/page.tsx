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
          trigger: ".pin-section",
          start: "top top",
end: "+=300%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          // markers: true,
        },
      });

      // 🎥 Camera movement
      tl.to(camera.position, {
        z: 2,
        x: 1,
        ease: "none",
      });

      // 🎥 Subtle camera rotation
      tl.to(
        camera.rotation,
        {
          y: -0.3,
          x: -0.1,
          ease: "none",
        },
        0
      );

      // 🧊 Cube motion
      tl.to(
        cubeRef.current.rotation,
        {
          y: Math.PI * 0.3,
          ease: "none",
        },
        0
      );
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [camera]);

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#4f46e5" />
    </mesh>
  );
}

export default function Home() {
  return (
    <>
      {/* Intro Section */}
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

      {/* PINNED 3D SECTION */}
      <section className="pin-section" style={{ height: "100vh" }}>
        <Canvas camera={{ position: [0, 0, 4], fov: 75 }} fog={["#000", 3, 8]}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Scene />
        </Canvas>
      </section>

      {/* After Section */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Scene Complete ✨</h1>
      </section>
    </>
  );
}
