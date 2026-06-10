import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Dee Gadgets Hub — Phones, Accessories & Gadgets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  const imgPath = join(process.cwd(), "public", "images", "bb-hires", "19417092.jpg");
  const imgData = readFileSync(imgPath);
  const phoneImg = `data:image/jpeg;base64,${imgData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          background: "#060608",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Deep gradient background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(125deg, #0a0a12 0%, #0d0d1a 45%, #060608 100%)",
            display: "flex",
          }}
        />

        {/* Blue glow behind phone */}
        <div
          style={{
            position: "absolute",
            right: "80px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "420px",
            height: "560px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(37,99,235,0.22) 0%, rgba(124,58,237,0.10) 40%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, #2563eb 0%, #7c3aed 60%, transparent 100%)",
            display: "flex",
          }}
        />

        {/* Left content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 0 0 72px",
            flex: 1,
            maxWidth: "620px",
          }}
        >
          {/* Eyebrow tag */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                background: "rgba(37,99,235,0.15)",
                border: "1px solid rgba(37,99,235,0.35)",
                color: "#60a5fa",
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "5px 14px",
                borderRadius: "3px",
                display: "flex",
              }}
            >
              Nigeria · Ghana · Kenya
            </div>
          </div>

          {/* Brand name */}
          <div
            style={{
              fontSize: "64px",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1.0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ display: "flex" }}>Dee Gadgets</span>
            <span style={{ display: "flex", color: "#e2e8f0" }}>Hub</span>
          </div>

          {/* Divider */}
          <div
            style={{
              width: "48px",
              height: "3px",
              background: "linear-gradient(90deg, #2563eb, #7c3aed)",
              margin: "20px 0 16px",
              display: "flex",
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: "20px",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            Genuine phones. Trusted service.
          </div>

          {/* Sub-description */}
          <div
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.30)",
              marginTop: "8px",
              lineHeight: 1.6,
              maxWidth: "420px",
              display: "flex",
            }}
          >
            Warranty-backed smartphones &amp; accessories. Fast delivery across Africa.
          </div>

          {/* Feature badges */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginTop: "28px",
              flexWrap: "wrap",
            }}
          >
            {["✓ Genuine Stock", "✓ Warranty Backed", "✓ Fast Delivery"].map((b) => (
              <div
                key={b}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "11px",
                  letterSpacing: "0.06em",
                  padding: "5px 12px",
                  display: "flex",
                }}
              >
                {b}
              </div>
            ))}
          </div>
        </div>

        {/* iPhone image — right side */}
        <div
          style={{
            position: "absolute",
            right: "40px",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Subtle glow ring behind the phone */}
          <div
            style={{
              position: "absolute",
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",
              display: "flex",
            }}
          />
          {/* Actual iPhone image */}
          <img
            src={phoneImg}
            style={{
              height: "560px",
              width: "auto",
              objectFit: "contain",
              position: "relative",
              filter: "drop-shadow(0 32px 64px rgba(37,99,235,0.35)) drop-shadow(0 8px 24px rgba(0,0,0,0.8))",
            }}
          />
        </div>

        {/* Bottom gradient line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, #2563eb 0%, #7c3aed 50%, transparent 100%)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
