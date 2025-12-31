"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function ParallaxBackground({ layers = 3 }) {
  const groupRef = useRef();

  const planes = Array.from({ length: layers }).map((_, i) => ({
    z: -6 - i * 3,
    scale: 25 + i * 6,
    opacity: 0.15 - i * 0.03,
  }));

  useFrame(({ clock, camera }) => {
    if (!groupRef.current) return;

    const t = clock.elapsedTime;

    // subtle drift + parallax
    groupRef.current.rotation.y = camera.rotation.y * 0.05;
    groupRef.current.position.y = Math.sin(t * 0.05) * 0.2;
  });

  return (
    <group ref={groupRef}>
      {planes.map((p, i) => (
        <mesh key={i} position={[0, 0, p.z]}>
          <planeGeometry args={[p.scale, p.scale]} />
          <meshBasicMaterial
            transparent
            opacity={p.opacity}
            color={i % 2 === 0 ? "#0f172a" : "#020617"}
          />
        </mesh>
      ))}
    </group>
  );
}
