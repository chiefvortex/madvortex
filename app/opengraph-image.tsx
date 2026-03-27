import { ImageResponse } from "next/og"

export const alt = "Naveen Kumar — madvortex"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          backgroundColor: "#0A0A0A",
          backgroundImage:
            "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))",
          color: "#E8E8E8",
          display: "flex",
          height: "100%",
          padding: "48px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "48px",
            position: "relative",
          }}
        >
          <div
            style={{
              background:
                "radial-gradient(circle, rgba(191,255,0,0.18), rgba(191,255,0,0.02) 42%, transparent 70%)",
              borderRadius: "9999px",
              filter: "blur(24px)",
              height: "340px",
              position: "absolute",
              right: "-80px",
              top: "-50px",
              width: "340px",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", zIndex: 1 }}>
            <div
              style={{
                color: "#BFFF00",
                display: "flex",
                fontSize: "20px",
                letterSpacing: "0.36em",
                textTransform: "uppercase",
              }}
            >
              Madvortex
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "84px",
                fontWeight: 900,
                letterSpacing: "0.08em",
                lineHeight: 0.9,
                textTransform: "uppercase",
              }}
            >
              NAVEEN
              <br />
              KUMAR
            </div>
            <div
              style={{
                color: "#888888",
                display: "flex",
                fontSize: "26px",
                maxWidth: "760px",
              }}
            >
              Digital dossier of a filmmaker, visual engineer, and founder building at the
              intersection of cinema, VFX, and code.
            </div>
          </div>

          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              zIndex: 1,
            }}
          >
            <div
              style={{
                color: "#555555",
                display: "flex",
                fontSize: "20px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Bangalore / India
            </div>
            <div
              style={{
                color: "#BFFF00",
                display: "flex",
                fontSize: "20px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              madvortex.co
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
