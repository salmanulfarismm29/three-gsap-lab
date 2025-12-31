import PinnedSection from "./components/PinnedSection";

export default function Home() {
  return (
    <>
      {/* Intro */}
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

      {/* Pinned 3D Story */}
      <PinnedSection texts={["Designed for Performance", "Built for Experience"]} />

      {/* Outro */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>End of Story ✨</h1>
      </section>
    </>
  );
}
