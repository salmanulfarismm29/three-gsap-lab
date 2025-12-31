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

      {/* Multi-section storytelling */}
      <PinnedSection texts={["Designed for Performance", "Built for Experience"]} />
      <PinnedSection texts={["Premium Interaction", "Smooth Animations"]} />
      <PinnedSection texts={["Engage Your Users", "Create Impact"]} />

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
