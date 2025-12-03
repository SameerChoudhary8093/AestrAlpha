import { heading, byline, speakers, buttonText } from "@/data/speaker";
import StarIcon from "@/components/icons/Star";
import Image from "next/image";
import Link from "next/link";

export default function SpeakerSection() {
  return (
    <section 
      className="w-full px-20 py-16 md:p-20 md:py-32 flex flex-col justify-center items-start bg-(--primary-color) text-black"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-4 font-orbitron w-full text-left">
        {heading}
      </h2>
  
      <p className="text-base md:text-lg mb-8 md:mb-16 max-w-3xl">
        {byline}
      </p>

    
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 md:gap-18 w-full justify-between items-start gap-y-12 md:gap-y-10">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className="flex flex-col items-start justify-start gap-4 w-full"
          >
           
            <Image
              src={speaker.photo.src}
              alt={speaker.photo.alt}
              width={speaker.photo.width}
              height={speaker.photo.height}
              className="h-64 w-64 object-cover"
            />
            
            <div className="flex flex-col gap-1">
              <h3 className="text-xl md:text-2xl font-semibold">{speaker.name}</h3>
              <p className="text-sm md:text-base text-gray-900">{speaker.position}</p>
            </div>
            
            <div className="text-sm md:text-base text-gray-900 leading-relaxed">
              {speaker.bio}
            </div>
            
            <div className="flex flex-row gap-4 items-center justify-start mt-2">
              {speaker.social.map((link) => (
                <Link
                  key={link.platform}
                  href={link.url}
                  aria-label={link.platform}
                  className="text-black hover:opacity-90 transition-colors duration-300"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

    
      <div className="flex flex-row items-center justify-center w-full mt-12 md:mt-24">
        <button className="button-secondary text-black! border-black!">
          <StarIcon className="h-6 w-6 mr-2 text-black" />
          {buttonText}
        </button>
      </div>
    </section>
  );
}