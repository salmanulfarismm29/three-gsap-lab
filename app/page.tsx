"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })
      .from(
        textRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.2" // overlaps previous animation
      )
      .from(
        buttonRef.current,
        {
          y: 20,
          opacity: 0,
          scale: 0.8,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );
  }, []);

  return (
    <main
      ref={containerRef}
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 ref={titleRef} style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Build Stunning Websites
        </h1>

        <p ref={textRef} style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Animations that attract and impress clients
        </p>

        <button
          ref={buttonRef}
          style={{
            padding: "12px 24px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </div>
    </main>
  );
}
