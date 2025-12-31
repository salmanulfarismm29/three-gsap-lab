"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
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

      {/* Cards Section */}
      <section
        ref={containerRef}
        style={{
          minHeight: "100vh",
          padding: "80px 40px",
          background: "#111",
          color: "#fff",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "3rem" }}>
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {["Design", "Development", "Animation"].map((item, i) => (
            <div
              key={item}
              ref={(el) => (cardsRef.current[i] = el)}
              style={{
                padding: "32px",
                background: "#1e1e1e",
                borderRadius: "12px",
                fontSize: "1.2rem",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
