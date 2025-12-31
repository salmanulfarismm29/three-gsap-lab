"use client";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function CanvasWrapper({ children }) {
  return (
    <Canvas
      frameloop="demand"
      camera={{ position: [0, 0, 4], fov: 75 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
      }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />

      {children}

      <EffectComposer>
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
        />
      </EffectComposer>
    </Canvas>
  );
}
