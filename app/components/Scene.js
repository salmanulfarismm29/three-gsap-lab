import { useRef, useLayoutEffect } from "react";
import { useThree } from "@react-three/fiber";

export default function Scene({ timeline }) {
  const cubeRef = useRef(null);
  const { camera } = useThree();

  useLayoutEffect(() => {
    if (!timeline || !camera || !cubeRef.current) return;

    timeline
      .to(camera.position, { z: 2.5, ease: "none" })
      .to(camera.rotation, { y: -0.3, x: -0.1, ease: "none" }, 0)
      .to(cubeRef.current.rotation, { y: Math.PI * 0.5, ease: "none" }, 0);
  }, [timeline, camera]);

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#4f46e5" />
    </mesh>
  );
}
