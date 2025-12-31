"use client";

import { useRef, useLayoutEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import BackgroundEffects from "./BackgroundEffects";
import ParallaxBackground from "./ParallaxBackground";

export default function Scene({ timeline, objectsConfig }) {
  const cubeRef = useRef(null);
  const sphereRef = useRef(null);
  const torusRef = useRef(null);
  const groupRef = useRef(null);
  const flickerLight = useRef(null);

  const { camera, mouse } = useThree();

  // GSAP scroll-driven cinematic animation
  useLayoutEffect(() => {
    if (!timeline || !camera) return;

    timeline
      // camera
      .to(camera.position, { z: 4, x: 0, y: 0, ease: "none" }, 0)
      .to(camera.position, { z: 2, x: 1, y: 0.5, ease: "none" }, 0.3)
      .to(camera.rotation, { y: -0.3, x: -0.1, ease: "none" }, 0)
      .to(camera, {
        fov: 65,
        onUpdate: () => camera.updateProjectionMatrix(),
        ease: "none",
      }, 0)

      // objects
      .to(cubeRef.current.rotation, { y: Math.PI }, 0)
      .to(sphereRef.current.rotation, { x: Math.PI }, 0.2)
      .to(torusRef.current.rotation, { y: -Math.PI }, 0.4);
  }, [timeline, camera]);

  // Ambient motion + lighting life
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    // floating objects (this is HUGE for realism)
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.15;
      groupRef.current.rotation.x = mouse.y * 0.12;
      groupRef.current.rotation.y = mouse.x * 0.12;
    }

    // cinematic light breathing
    if (flickerLight.current) {
      flickerLight.current.intensity = 0.6 + Math.sin(t * 3) * 0.15;
      flickerLight.current.color.setHSL(
        0.6 + Math.sin(t * 0.2) * 0.05,
        0.6,
        0.6
      );
    }

    // micro camera breathing (VERY subtle)
    camera.position.y += Math.sin(t * 0.4) * 0.0005;
  });

  return (
    <>
      <ParallaxBackground layers={3} />
      <BackgroundEffects count={300} />

      <pointLight ref={flickerLight} position={[5, 5, 5]} />

      <group ref={groupRef}>
        <mesh ref={cubeRef} position={[-2, 0, 0]}>
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          <meshStandardMaterial color={objectsConfig?.cubeColor} />
        </mesh>

        <mesh ref={sphereRef} position={[0, 0, 0]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial color={objectsConfig?.sphereColor} />
        </mesh>

        <mesh ref={torusRef} position={[2, 0, 0]}>
          <torusGeometry args={[0.7, 0.3, 16, 100]} />
          <meshStandardMaterial color={objectsConfig?.torusColor} />
        </mesh>
      </group>
    </>
  );
}
