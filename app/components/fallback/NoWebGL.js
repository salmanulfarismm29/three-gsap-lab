"use client";

export default function NoWebGL() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#0f172a",
        color: "white",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Designed for Desktop Experience
        </h1>
        <p style={{ opacity: 0.8 }}>
          This interactive experience uses advanced 3D effects.
          <br />
          For best performance, please view on a desktop device.
        </p>
      </div>
    </div>
  );
}
