"use client";

import { Canvas } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AnimatedCube() {
  const meshRef = useRef(null);

  useLayoutEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

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

      tl.to(mesh.rotation, { y: Math.PI * 2 })
        .to(mesh.position, { y: 1.5 }, 0);
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#4f46e5" />
    </mesh>
  );
}

export default function Home() {
  return (
    <>
      <section
        className="scroll-section"
        style={{
          height: "200vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Scroll Down 👇</h1>
      </section>

      <Canvas
        style={{ height: "100vh" }}
        camera={{ position: [0, 0, 4], fov: 75 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <AnimatedCube />
      </Canvas>

      <div style={{ height: "200vh" }} />
    </>
  );
}
