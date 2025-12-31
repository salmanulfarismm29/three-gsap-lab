"use client";

import { useLayoutEffect } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STORY } from "../config/story.config";

gsap.registerPlugin(ScrollTrigger);

export default function CameraController() {
  const three = useThree();
  const camera = three.camera;
  const invalidate = three.invalidate;

  useLayoutEffect(() => {
    if (!camera) return;

    // GSAP context = safe mount/unmount (VERY IMPORTANT)
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#scroll-container",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: () => {
            if (invalidate) invalidate();
          },
        },
      });

      STORY.forEach((step, i) => {
        const progress = i / (STORY.length - 1);

        tl.to(
          camera.position,
          {
            x: step.camera.x,
            y: step.camera.y,
            z: step.camera.z,
          },
          progress
        );

        tl.to(
          camera,
          {
            fov: step.camera.fov,
            onUpdate: () => camera.updateProjectionMatrix(),
          },
          progress
        );
      });
    });

    return () => {
      // SAFELY kill everything
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [camera, invalidate]);

  return null;
}
