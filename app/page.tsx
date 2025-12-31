"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      scale: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        markers: true
      },
    });
  }, []);

  return (
    <main>
      {/* Spacer */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Scroll Down 👇</h1>
      </section>

      {/* Animated Section */}
      <section
        ref={sectionRef}
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f5",
        }}
      >
        <h2 style={{ fontSize: "2.5rem" }}>
          This Animates on Scroll
        </h2>
      </section>
    </main>
  );
}
