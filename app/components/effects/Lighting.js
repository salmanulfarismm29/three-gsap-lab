"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Lighting() {
  const lightRef = useRef();

  useFrame(({ clock }) => {
    if (!lightRef.current) return;
    lightRef.current.intensity =
      0.6 + Math.sin(clock.elapsedTime * 2) * 0.1;
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        ref={lightRef}
        position={[5, 5, 5]}
        intensity={0.6}
        castShadow={false}
      />
    </>
  );
}
