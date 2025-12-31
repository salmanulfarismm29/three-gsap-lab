"use client";

import CameraController from "./CameraController";
import Objects from "./Objects";
import ParallaxBackground from "../effects/ParallaxBackground";
import BackgroundParticles from "../effects/BackgroundParticles";
import Lighting from "../effects/Lighting";

export default function Scene() {
  return (
    <>
      <CameraController />
      <Lighting />
      <ParallaxBackground layers={3} />
      <BackgroundParticles count={120} />
      <Objects />
    </>
  );
}
