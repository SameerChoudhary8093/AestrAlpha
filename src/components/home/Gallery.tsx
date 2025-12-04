import { heading, byline, galleryImages } from "@/data/gallery";
import Image from "next/image";

export default function Gallery({ backgroundColor = "bg-[var(--primary-color)]" }) {
  return (
    <section
      className={`w-full p-8 py-32 ${backgroundColor} text-black flex flex-col justify-center items-center gap-4`}
      id="gallery"
    >
      <div className="font-orbitron text-5xl font-bold text-center md:text-left w-full">{heading}</div>
      <div className="mb-16 text-center md:text-left w-full max-w-3xl">{byline}</div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-1 w-full space-y-2">
        {galleryImages.map((image, index) => (
          <div key={index} className="break-inside-avoid mb-2">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}