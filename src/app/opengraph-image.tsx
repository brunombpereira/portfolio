/* eslint-disable react/jsx-key */
import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

// Next 14 serves this at /opengraph-image when scraped by social cards
export const runtime = "edge";
export const alt = `${profile.name} · ${profile.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "linear-gradient(135deg, #0b1118 0%, #111a24 50%, #1a2733 100%)",
        color: "#e6edf3",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* Available pill */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontSize: "20px",
          color: "#94a3b8",
          marginBottom: "32px",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#34d399",
          }}
        />
        Available · {profile.location}
      </div>

      {/* Name */}
      <div style={{ display: "flex", fontSize: "84px", fontWeight: 800, lineHeight: 1 }}>
        {profile.name}
      </div>

      {/* Tagline */}
      <div
        style={{
          display: "flex",
          fontSize: "44px",
          fontWeight: 500,
          marginTop: "24px",
          color: "#4a9eff",
        }}
      >
        {profile.tagline}
      </div>

      {/* Stack hint */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "48px",
          fontSize: "22px",
          color: "#94a3b8",
          flexWrap: "wrap",
        }}
      >
        {profile.stack[0].items.slice(0, 5).map((s) => (
          <div
            style={{
              display: "flex",
              padding: "6px 16px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            {s}
          </div>
        ))}
      </div>

      {/* URL footer */}
      <div
        style={{
          display: "flex",
          marginTop: "auto",
          fontSize: "20px",
          color: "#64748b",
          paddingTop: "40px",
        }}
      >
        brunoborlido.dev · github.com/brunombpereira
      </div>
    </div>,
    size,
  );
}
