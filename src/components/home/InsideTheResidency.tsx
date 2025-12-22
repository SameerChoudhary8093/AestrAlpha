import React from 'react';
import Image from "next/image";

// Reusing Unsplash images for demonstration, or placeholders if preferred. 
// I will distribute the previous nice images into this new layout.

const GalleryImage = ({ src, width, height, alt }: { src: string, width: number, height: number, alt: string }) => (
  <div className="group cursor-pointer" style={{ width: `${width}px`, height: `${height}px`, overflow: "hidden", position: "relative" }}>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="transition-transform duration-500 group-hover:scale-110"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>
);

export default function InsideTheResidency() {
  return (
    <section style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      background: "#D7F601",
      padding: "112px 64px 112px 64px",
      boxSizing: "border-box"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "1440px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "80px"
      }}>
        {/* Header */}
        <div style={{
          width: "100%", // Up to 768px centered
          display: "flex",
          justifyContent: "center"
        }}>
          <h2 style={{
            width: "768px",
            fontFamily: "var(--font-orbitron), sans-serif",
            fontWeight: 700,
            fontSize: "50px",
            lineHeight: "120%",
            textAlign: "center",
            color: "#000000",
            margin: 0
          }}>
            Inside the Residency
          </h2>
        </div>

        {/* Images Grid Section */}
        <div style={{
          width: "1312px",
          display: "flex",
          flexDirection: "row",
          gap: "32px",
          justifyContent: "center"
        }}>
          {/* Column 1 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px", width: "416px" }}>
            <GalleryImage
              src="/gallery/Image1.svg"
              alt="Gallery 1-1"
              width={416}
              height={416}
            />
            <GalleryImage
              src="/gallery/Image2.svg"
              alt="Gallery 1-2"
              width={416}
              height={416}
            />
          </div>

          {/* Column 2 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px", width: "416px" }}>
            <GalleryImage
              src="/gallery/Image3.svg"
              alt="Gallery 2-1"
              width={416}
              height={234}
            />
            <GalleryImage
              src="/gallery/Image4.svg"
              alt="Gallery 2-2"
              width={416}
              height={234}
            />
            <GalleryImage
              src="/gallery/Image5.svg"
              alt="Gallery 2-3"
              width={416}
              height={416}
            />
          </div>

          {/* Column 3 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px", width: "416px" }}>
            <GalleryImage
              src="/gallery/Image6.svg"
              alt="Gallery 3-1"
              width={416}
              height={416}
            />
            <GalleryImage
              src="/gallery/Image7.svg"
              alt="Gallery 3-2"
              width={416}
              height={416}
            />
          </div>
        </div>

      </div>
    </section>
  );
}