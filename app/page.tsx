"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function RotatingCube() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#3b3787ff" />
    </mesh>
  );
}

export default function Home() {
  return (
    <Canvas
      style={{ height: "100vh" }}
      camera={{ position: [0, 0, 4], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <RotatingCube />
    </Canvas>
  );
}
