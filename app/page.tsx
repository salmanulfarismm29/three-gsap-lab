import CanvasWrapper from "./components/canvas/CanvasWrapper";
import Scene from "./components/canvas/Scene";
import ScrollSections from "./components/scroll/ScrollSections";

export default function Home() {
  return (
    <>
      <CanvasWrapper>
        <Scene />
      </CanvasWrapper>

      <ScrollSections />
    </>
  );
}
