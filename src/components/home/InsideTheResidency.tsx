import React from 'react';
import Image from "next/image";

// Reusing Unsplash images for demonstration, or placeholders if preferred. 
// I will distribute the previous nice images into this new layout.

const GalleryImage = ({ src, width, height, alt }: { src: string, width: number, height: number, alt: string }) => (
  <div className="group cursor-pointer w-full relative overflow-hidden h-auto rounded-lg">
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes="(max-width: 768px) 100vw, 33vw"
      className="transition-transform duration-500 group-hover:scale-110 w-full h-auto object-cover"
    />
  </div>
);

export default function InsideTheResidency() {
  return (
    <section
      id="gallery"
      className="w-full bg-[#D7F601] flex justify-center py-16 px-4 md:py-28 md:px-16 box-border"
    >
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-20">

        {/* Header */}
        <div className="w-full flex justify-center">
          <h2
            className="w-full max-w-[768px] text-[#000000] font-bold text-center leading-[120%]"
            style={{
              fontFamily: "var(--font-orbitron), sans-serif",
              fontSize: "clamp(32px, 5vw, 50px)"
            }}
          >
            Inside the Residency
          </h2>
        </div>

        {/* Images Grid Section */}
        <div className="w-full max-w-[1312px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Column 1 */}
          <div className="flex flex-col gap-8 w-full">
            <GalleryImage
              src="/test/Image-1.webp"
              alt="Gallery 1-1"
              width={416}
              height={416}
            />
            <GalleryImage
              src="/test/Image-2.webp"
              alt="Gallery 1-2"
              width={416}
              height={416}
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-8 w-full">
            <GalleryImage
              src="/test/Image-3.webp"
              alt="Gallery 2-1"
              width={416}
              height={234}
            />
            <GalleryImage
              src="/test/Image-4.webp"
              alt="Gallery 2-2"
              width={416}
              height={234}
            />
            <GalleryImage
              src="/test/Image-5.webp"
              alt="Gallery 2-3"
              width={416}
              height={416}
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-8 w-full">
            <GalleryImage
              src="/test/Image-6.webp"
              alt="Gallery 3-1"
              width={416}
              height={416}
            />
            <GalleryImage
              src="/test/Image-7.webp"
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