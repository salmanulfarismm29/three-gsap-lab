"use client";

import { STORY } from "../config/story.config";

export default function ScrollSections() {
  return (
    <div id="scroll-container">
      {STORY.map((step) => (
        <section key={step.id} style={{ height: "100vh" }}>
          <h1 className="center-text">{step.text}</h1>
        </section>
      ))}
    </div>
  );
}
