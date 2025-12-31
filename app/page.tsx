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

      {/* Multi-section Cinematic Storytelling */}
      <PinnedSection
        texts={["Designed for Performance", "Built for Experience"]}
        objectsConfig={{
          cubeColor: "#4f46e5",
          sphereColor: "#f59e0b",
          torusColor: "#10b981",
        }}
      />

      <PinnedSection
        texts={["Premium Interaction", "Smooth Animations"]}
        objectsConfig={{
          cubeColor: "#e11d48",
          sphereColor: "#fbbf24",
          torusColor: "#3b82f6",
        }}
      />

      <PinnedSection
        texts={["Engage Your Users", "Create Impact"]}
        objectsConfig={{
          cubeColor: "#6366f1",
          sphereColor: "#14b8a6",
          torusColor: "#f97316",
        }}
      />

      <PinnedSection
        texts={["Cinematic Feel", "Premium Experience"]}
        objectsConfig={{
          cubeColor: "#f43f5e",
          sphereColor: "#22d3ee",
          torusColor: "#a78bfa",
        }}
      />

      <PinnedSection
        texts={["Your Brand Shines", "Scroll Magic"]}
        objectsConfig={{
          cubeColor: "#facc15",
          sphereColor: "#34d399",
          torusColor: "#3b82f6",
        }}
      />

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
