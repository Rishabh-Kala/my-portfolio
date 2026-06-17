import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#0a192f",
          border: "3px solid #64ffda",
          borderRadius: "12px",
          color: "#64ffda",
          display: "flex",
          fontSize: "27px",
          fontWeight: 800,
          height: "100%",
          justifyContent: "center",
          letterSpacing: 0,
          width: "100%",
        }}
      >
        RK
      </div>
    ),
    size,
  );
}
