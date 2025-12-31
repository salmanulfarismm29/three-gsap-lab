"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { ShaderMaterial } from "three";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColor;
  varying vec2 vUv;

  float noise(vec2 p) {
    return sin(p.x) * sin(p.y);
  }

  void main() {
    vec2 uv = vUv * 4.0;
    float n = noise(uv + uTime * 0.3);

    float strength = smoothstep(0.0, 1.0, n);
    vec3 color = uColor + strength * 0.15;

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function HeroShaderPlane({
  color = "#4f46e5",
}) {
  const materialRef = useRef();

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value =
        clock.elapsedTime;
    }
  });

  return (
    <mesh position={[0, 0, -6]} scale={[12, 12, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uColor: { value: new THREE.Color(color) },
        }}
      />
    </mesh>
  );
}
