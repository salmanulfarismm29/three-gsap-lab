"use client";

import CameraController from "./CameraController";
import Objects from "./Objects";
import Lighting from "../effects/Lighting";
import BackgroundParticles from "../effects/BackgroundParticles";
import HeroShaderPlane from "../shaders/HeroShaderPlane";

export default function Scene() {
  return (
    <>
      <CameraController />
      <Lighting />

      {/* Shader hero background */}
      <HeroShaderPlane color="#4f46e5" />

      <BackgroundParticles count={80} />
      <Objects />
    </>
  );
}
