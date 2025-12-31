"use client";

import CanvasWrapper from "./components/canvas/CanvasWrapper";
import Scene from "./components/canvas/Scene";
import ScrollSections from "./components/scroll/ScrollSections";
import NoWebGL from "./components/fallback/NoWebGL";
import { useWebGL } from "./components/fallback/useWebGL";

export default function Home() {
  const webglSupported = useWebGL();

  // Avoid hydration mismatch
  if (webglSupported === null) return null;

  return (
    <>
      {webglSupported ? (
        <>
          <CanvasWrapper>
            <Scene />
          </CanvasWrapper>
          <ScrollSections />
        </>
      ) : (
        <NoWebGL />
      )}
    </>
  );
}
