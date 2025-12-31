"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 ref={titleRef} style={{ fontSize: "3rem" }}>
        Welcome to My Animated World
      </h1>
    </main>
  );
}
