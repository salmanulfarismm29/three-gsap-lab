"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CanvasWrapper from "./CanvasWrapper";
import Scene from "./Scene";
import TextOverlay from "./TextOverlay";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedSection({ texts, objectsConfig }) {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const textRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      timelineRef.current = tl;

      texts.forEach((_, i) => {
        const text = textRefs.current[i];
        tl.fromTo(
          text,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.4 },
          i * 0.3
        ).to(
          text,
          { opacity: 0, y: -50, duration: 0.3 },
          i * 0.3 + 0.6
        );
      });
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [texts]);

  return (
    <section ref={sectionRef} style={{ height: "100vh", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        {texts.map((text, i) => (
          <TextOverlay
            key={i}
            ref={(el) => (textRefs.current[i] = el)}
            text={text}
          />
        ))}
      </div>
      <CanvasWrapper>
        <Scene timeline={timelineRef.current} objectsConfig={objectsConfig} />
      </CanvasWrapper>
    </section>
  );
}
