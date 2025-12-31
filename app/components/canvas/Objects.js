"use client";

import { OBJECTS } from "../config/scene.config";

export default function Objects() {
  return (
    <>
      {OBJECTS.map((obj, i) => {
        if (obj.type === "box")
          return (
            <mesh key={i} position={obj.position}>
              <boxGeometry args={[1.2, 1.2, 1.2]} />
              <meshStandardMaterial color={obj.color} />
            </mesh>
          );

        if (obj.type === "sphere")
          return (
            <mesh key={i} position={obj.position}>
              <sphereGeometry args={[0.8, 32, 32]} />
              <meshStandardMaterial color={obj.color} />
            </mesh>
          );

        if (obj.type === "torus")
          return (
            <mesh key={i} position={obj.position}>
              <torusGeometry args={[0.7, 0.3, 16, 100]} />
              <meshStandardMaterial color={obj.color} />
            </mesh>
          );

        return null;
      })}
    </>
  );
}
