import { heading, byline, tracks } from "@/data/track";
import Image from "next/image";

export default function Track() {
  return (
    <section

      className="w-full p-6 md:p-8 flex flex-col gap-8 md:gap-4 items-start justify-center"
      id="track"
    >
     
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-end justify-start md:justify-center text-(--secondary-color) mb-8 md:mb-12 w-full">
       
        <div className="font-orbitron text-3xl md:text-5xl font-bold">
          {heading}
        </div>
        
        <div className="text-base md:text-lg opacity-90 pb-1">{byline}</div>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center mb-16 md:mb-32 w-full">
        {tracks.map((track) => (
          <div
            key={track.id}
           
            className="flex flex-col gap-4 items-start justify-start p-6 text-(--secondary-color) h-full border border-transparent hover:border-(--secondary-color)/20 rounded-xl transition-colors"
          >
            <Image
              src={track.image.src}
              alt={track.image.alt}
              height={track.image.height}
              width={track.image.width}
             
              className="object-cover w-full h-auto rounded-lg aspect-video"
            />
            <div className="text-xl md:text-2xl font-bold mt-2">{track.title}</div>
            <div className="text-sm md:text-base leading-relaxed opacity-90">
              {track.description}
            </div>
            
           
            <button className="button-secondary mt-auto w-full md:w-auto justify-center md:justify-start">
              Button &gt;
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}