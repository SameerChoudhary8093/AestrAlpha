import Image from "next/image";
import {
  homeHeading,
  homeDescription,
  homeTagLine,
  primaryButtonText,
  secondaryButtonText,
} from "@/data/home";
import StarIcon from "../icons/Star";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-start py-8 lg:py-0"
      style={{
        background:
          "radial-gradient(112.15% 91.53% at 110.03% 77.26%, #667015 9.13%, #181818 68.08%)",
      }}
      id="home"
    >
      <div className="absolute w-[30%] aspect-square -left-[10%] top-[10%] bg-(--primary-color)/10 mix-blend-screen blur-[77px] rounded-full pointer-events-none" />
      
      {/* 
        Changes made for responsiveness:
        1. gap-12 for mobile, lg:gap-24 for desktop 
        2. Added px-4 to prevent content touching edges on mobile
      */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-12 lg:gap-24 px-4 sm:px-6 lg:px-0 max-w-[900px] sm:max-w-[1100px] lg:max-w-none mx-auto py-6">
        
        <div className="flex flex-col items-center justify-center gap-6 lg:gap-8 text-center w-full">
          
          {/* 
             Heading Logic:
             1. text-3xl (mobile) -> text-5xl (tablet) -> text-[6rem] (desktop/original)
             2. mt-24 (mobile) -> lg:mt-40 (desktop/original)
          */}
          <div className="flex flex-col justify-center items-center font-bold text-3xl md:text-5xl lg:text-[6rem] text-center gap-0.5 font-orbitron text-[#FCFFE4] mt-24 lg:mt-40 leading-tight lg:leading-none">
            
            {/* Added flex-wrap to prevent overflow on very small screens */}
            <div className="flex flex-row flex-wrap justify-center items-center">
              <h1>{homeHeading[0]}</h1>
              
              {/* 
                Inline Image Logic:
                1. h-8 (mobile) -> md:h-[6rem] -> lg:h-[10rem] (desktop) 
                2. Adjusted margins for smaller screens
              */}
              <Image
                src={"/home/TextImage.png"}
                alt=""
                height={710}
                width={973}
                className="h-8 w-auto mx-2 md:h-[6rem] lg:h-[10rem] lg:mx-4 object-contain"
              />
              <h1>{homeHeading[1]}</h1>
            </div>
            <div>{homeHeading[2]}</div>
          </div>

          {/* Tagline: text-xl (mobile) -> lg:text-5xl (desktop) */}
          <div className="text-xl md:text-3xl lg:text-5xl text-[#FCFFE4]">
            {homeTagLine}
          </div>

          {/* Description: w-full (mobile) -> lg:w-3/4 (desktop), text-sm -> text-xl */}
          <div className="text-sm md:text-lg lg:text-xl w-full md:w-3/4 px-2 lg:px-0 text-gray-300 lg:text-inherit max-w-[640px] lg:max-w-none">
            {homeDescription}
          </div>

          {/* Buttons: Stacked on very small screens, row on others */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center items-center w-full">
            <Link href="https://aestr-alpha-6vl6.vercel.app/" className="button-primary flex justify-center items-center">
              <StarIcon className="h-6 w-auto mr-2 lg:h-8" />
              {primaryButtonText}
            </Link>
            <button className="button-secondary flex justify-center items-center">
              <StarIcon className="h-6 w-auto mr-2 text-(--primary-color) lg:h-8" />
              {secondaryButtonText}
            </button>
          </div>
        </div>

        {/* 
           Hero Image:
           1. mb-12 (mobile) -> lg:mb-40 (desktop)
        */}
        <Image
          src={"/home/HeroImage.png"}
          alt=""
          height={700}
          width={1312}
          className="w-full max-w-[420px] sm:max-w-[640px] lg:max-w-none lg:w-[95%] h-auto aspect-auto mb-12 lg:mb-40 object-contain"
          priority
        />
      </div>
    </section>
  );
}