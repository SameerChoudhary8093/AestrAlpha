import { heading, byline, tracks } from "@/data/track";
import Image from "next/image";

export default function Track() {
  return (
    <section className="w-full p-8 flex flex-col gap-4 items-start justify-center">
      <div className="flex flex-row gap-4 items-end justify-center text-(--secondary-color) mb-12">
        <div className="font-orbitron text-5xl font-bold">{heading}</div>
        <div className="text-lg">{byline}</div>
      </div>
      <div className="grid grid-cols-3 items-start justify-center mb-32">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="flex flex-col gap-4 items-start justify-center m-4 p-6 text-(--secondary-color) h-full"
          >
            <Image
              src={track.image.src}
              alt={track.image.alt}
              height={track.image.height}
              width={track.image.width}
              className="object-cover"
            />
            <div className="text-2xl font-bold">{track.title}</div>
            <div>{track.description}</div>
            <button className="button-secondary mt-auto">Button &gt;</button>
          </div>
        ))}
      </div>
    </section>
  );
}
