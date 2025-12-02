import { heading, perks, byline, buttonText } from "@/data/ambassador";
import Image from "next/image";
import DoubleStarIcon from "../icons/DoubleStar";
import StarIcon from "../icons/Star";
import Link from "next/link";

export default function CampusAmbassador() {
  return (
    <section
     
      className="w-full p-6 py-16 md:p-8 md:py-32 bg-(--primary-color) flex flex-col justify-center items-center text-black"
      id="ambassador"
    >
    
      <div className="flex flex-col md:flex-row justify-between items-start w-full md:w-[95%] gap-10 md:gap-4 mb-12 md:mb-24">
        
     
        <div className="text-3xl md:text-5xl font-orbitron font-bold w-full md:w-1/2 text-left">
          {heading}
        </div>

       
        <div className="flex flex-col justify-center items-start gap-6 w-full md:w-1/2">
          <div className="text-base md:text-lg">{byline}</div>
          
          <ul className="flex flex-col gap-3 text-base md:text-lg">
            {perks.map((perk, index) => (
              <div key={index} className="flex flex-row gap-4 items-start">
                {/* Added shrink-0 so the star doesn't get squashed if text wraps */}
                <DoubleStarIcon className="h-6 w-auto text-(--accent-color) shrink-0 mt-1" />
                <span>{perk}</span>
              </div>
            ))}
          </ul>
          
          <Link 
            href="https://aestr-alpha-6vl6.vercel.app/" 
            className="button-secondary text-black! border-black! mt-2"
          >
            <StarIcon className="h-6 w-auto mr-2" />
            {buttonText}
          </Link>
        </div>
      </div>

      <Image
        src={"/home/Ambassador.png"}
        alt="Campus Ambassador Program"
        width={1312}
        height={712}
        
        className="w-full md:w-[95%] h-auto"
      />
    </section>
  );
}