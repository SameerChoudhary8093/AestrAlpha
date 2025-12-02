import { heading, byline, tracks } from "@/data/track";
import Image from "next/image";

export default function Track() {
  return (
    <section
      // 1. Padding: Reduced to p-6 on mobile, p-8 on desktop
      className="w-full p-6 md:p-8 flex flex-col gap-8 md:gap-4 items-start justify-center"
      id="track"
    >
      {/* 2. Header Layout:
          - flex-col (stack) on mobile, md:flex-row (side-by-side) on desktop.
          - items-start on mobile, md:items-end on desktop for the byline alignment.
          - Reduced bottom margin (mb-12 -> mb-8) on mobile.
      */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-end justify-start md:justify-center text-(--secondary-color) mb-8 md:mb-12 w-full">
        {/* 3. Heading Size: text-3xl on mobile, text-5xl on desktop */}
        <div className="font-orbitron text-3xl md:text-5xl font-bold">
          {heading}
        </div>
        {/* 4. Byline: text-base on mobile */}
        <div className="text-base md:text-lg opacity-90 pb-1">{byline}</div>
      </div>

      {/* 5. Grid Layout:
          - grid-cols-1 (1 column) on mobile.
          - md:grid-cols-2 (2 columns) on tablets.
          - lg:grid-cols-3 (3 columns) on desktop.
          - Removed massive mb-32 on mobile, reduced to mb-16.
          - Added gap-8 to handle spacing between cards instead of margins.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center mb-16 md:mb-32 w-full">
        {tracks.map((track) => (
          <div
            key={track.id}
            // 6. Card Styling:
            // - Removed m-4 (margin all around) which squashed cards on mobile. Used grid gap instead.
            // - p-6 is fine, kept consistent.
            className="flex flex-col gap-4 items-start justify-start p-6 text-(--secondary-color) h-full border border-transparent hover:border-(--secondary-color)/20 rounded-xl transition-colors"
          >
            <Image
              src={track.image.src}
              alt={track.image.alt}
              height={track.image.height}
              width={track.image.width}
              // 7. Image: w-full h-auto ensures it fits the card width on all devices
              className="object-cover w-full h-auto rounded-lg aspect-video"
            />
            <div className="text-xl md:text-2xl font-bold mt-2">{track.title}</div>
            <div className="text-sm md:text-base leading-relaxed opacity-90">
              {track.description}
            </div>
            
            {/* mt-auto ensures the button sticks to the bottom if cards have different text lengths */}
            <button className="button-secondary mt-auto w-full md:w-auto justify-center md:justify-start">
              Button &gt;
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}