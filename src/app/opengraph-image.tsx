import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

export const alt = "Hindustaan Innovations Private Limited";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  let bannerArrayBuffer: ArrayBuffer | null = null;
  try {
    const bannerPath = path.join(process.cwd(), "public", "brand-banner.png");
    const bannerBuffer = fs.readFileSync(bannerPath);
    bannerArrayBuffer = bannerBuffer.buffer.slice(
      bannerBuffer.byteOffset,
      bannerBuffer.byteOffset + bannerBuffer.byteLength
    ) as ArrayBuffer;
  } catch (err) {
    console.error("[OG] Error loading banner:", err);
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f0f0f",
          padding: "40px",
        }}
      >
        {bannerArrayBuffer ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={bannerArrayBuffer as unknown as string}
            alt="Hindustaan Innovations Private Limited"
            width={1000}
            height={326}
            style={{
              objectFit: "contain",
            }}
          />
        ) : null}
      </div>
    ),
    {
      ...size,
    }
  );
}
