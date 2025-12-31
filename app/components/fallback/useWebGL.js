"use client";

import { useEffect, useState } from "react";

export function useWebGL() {
  const [supported, setSupported] = useState(null);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");

      const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

      // Disable WebGL on mobile by design (PRO decision)
      setSupported(!!gl && !isMobile);
    } catch {
      setSupported(false);
    }
  }, []);

  return supported;
}
