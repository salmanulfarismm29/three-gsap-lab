"use client";

import { useRef, useLayoutEffect } from "react";
import { useThree } from "@react-three/fiber";

export default function Scene({ timeline, objectsConfig }) {
  const cubeRef = useRef(null);
  const sphereRef = useRef(null);
  const torusRef = useRef(null);
  const { camera } = useThree();

  useLayoutEffect(() => {
    if (!timeline || !camera) return;

    // Cinematic camera
    timeline
      .to(camera.position, { z: 4, x: 0, y: 0, ease: "none" }, 0)
      .to(camera.position, { z: 2, x: 1, y: 0.5, ease: "none" }, 0.3)
      .to(camera.rotation, { y: -0.3, x: -0.1, ease: "none" }, 0)
      .to(camera, { fov: 65, onUpdate: () => camera.updateProjectionMatrix(), ease: "none" }, 0);

    // Staggered objects
    timeline
      .to(cubeRef.current.rotation, { y: Math.PI, ease: "power1.inOut" }, 0)
      .to(sphereRef.current.rotation, { x: Math.PI, ease: "power1.inOut" }, 0.2)
      .to(torusRef.current.rotation, { y: -Math.PI, ease: "power1.inOut" }, 0.4);
  }, [timeline, camera]);

  return (
    <>
      <mesh ref={cubeRef} position={objectsConfig?.cubePosition || [-2, 0, 0]}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshStandardMaterial color={objectsConfig?.cubeColor || "#4f46e5"} />
      </mesh>

      <mesh ref={sphereRef} position={objectsConfig?.spherePosition || [0, 0, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color={objectsConfig?.sphereColor || "#f59e0b"} />
      </mesh>

      <mesh ref={torusRef} position={objectsConfig?.torusPosition || [2, 0, 0]}>
        <torusGeometry args={[0.7, 0.3, 16, 100]} />
        <meshStandardMaterial color={objectsConfig?.torusColor || "#10b981"} />
      </mesh>
    </>
  );
}
