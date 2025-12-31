"use client";

import { forwardRef } from "react";

const TextOverlay = forwardRef(({ text }, ref) => (
  <h1
    ref={ref}
    style={{
      position: "absolute",
      opacity: 0,
      pointerEvents: "none",
    }}
  >
    {text}
  </h1>
));

export default TextOverlay;
