import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dee Gadgets Hub — Phones, Accessories & Gadgets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#0a0a0a",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #0a0a0a 0%, #111827 50%, #0f172a 100%)",
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
            height: "4px",
            background: "linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)",
            display: "flex",
          }}
        />

        {/* Glow circle background */}
        <div
          style={{
            position: "absolute",
            right: "-80px",
            top: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Right panel — phone silhouette block */}
        <div
          style={{
            position: "absolute",
            right: "72px",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {/* Stylised phone shape */}
          <div
            style={{
              width: "120px",
              height: "220px",
              borderRadius: "20px",
              border: "2px solid rgba(37,99,235,0.6)",
              background: "linear-gradient(160deg, rgba(37,99,235,0.12) 0%, rgba(124,58,237,0.08) 100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              position: "relative",
            }}
          >
            <div style={{ width: "40px", height: "4px", borderRadius: "2px", background: "rgba(255,255,255,0.2)", display: "flex" }} />
            <div style={{ width: "60px", height: "60px", borderRadius: "12px", background: "rgba(37,99,235,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: "30px", height: "30px", borderRadius: "6px", background: "rgba(37,99,235,0.6)", display: "flex" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center" }}>
              <div style={{ width: "50px", height: "3px", borderRadius: "2px", background: "rgba(255,255,255,0.15)", display: "flex" }} />
              <div style={{ width: "40px", height: "3px", borderRadius: "2px", background: "rgba(255,255,255,0.1)", display: "flex" }} />
            </div>
            <div style={{ position: "absolute", bottom: "10px", width: "36px", height: "4px", borderRadius: "4px", background: "rgba(255,255,255,0.25)", display: "flex" }} />
          </div>
          <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.2em", textTransform: "uppercase", display: "flex" }}>
            Premium Devices
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "0 72px 68px",
            maxWidth: "760px",
          }}
        >
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
            <div style={{ width: "28px", height: "2px", background: "#2563eb", display: "flex" }} />
            <span style={{ color: "#3b82f6", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", display: "flex" }}>
              Nigeria · Ghana · Kenya
            </span>
          </div>

          {/* Brand name */}
          <div style={{ fontSize: "72px", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 0.95, display: "flex", flexWrap: "wrap" }}>
            Dee Gadgets Hub
          </div>

          {/* Divider */}
          <div style={{ width: "56px", height: "3px", background: "linear-gradient(90deg, #2563eb, #7c3aed)", margin: "22px 0 18px", display: "flex" }} />

          {/* Tagline */}
          <div style={{ fontSize: "22px", color: "rgba(255,255,255,0.55)", lineHeight: 1.5, display: "flex" }}>
            Genuine phones. Trusted service.
          </div>

          {/* Description */}
          <div style={{ fontSize: "16px", color: "rgba(255,255,255,0.35)", lineHeight: 1.6, marginTop: "10px", maxWidth: "500px", display: "flex" }}>
            Premium smartphones, accessories & gadgets. Warranty-backed with fast delivery across Africa.
          </div>

          {/* Brand tags */}
          <div style={{ display: "flex", gap: "8px", marginTop: "28px", flexWrap: "wrap" }}>
            {["Apple", "Samsung", "OnePlus", "Motorola", "Nothing"].map((brand) => (
              <div
                key={brand}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  padding: "5px 12px",
                  borderRadius: "4px",
                  display: "flex",
                }}
              >
                {brand}
              </div>
            ))}
          </div>
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
