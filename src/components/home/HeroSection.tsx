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
      // 1. Min-Height: Used min-h-[100dvh] for better mobile browser support (address bar handling)
      className="relative w-full min-h-[100dvh] overflow-hidden flex flex-col items-center justify-start"
      style={{
        background:
          "radial-gradient(112.15% 91.53% at 110.03% 77.26%, #667015 9.13%, #181818 68.08%)",
      }}
      id="home"
    >
      {/* 2. Background Blur: Adjusted size and position for mobile so it's visible but not overwhelming */}
      <div className="absolute w-[60%] md:w-[30%] aspect-square -left-[20%] md:-left-[10%] top-[5%] md:top-[10%] bg-(--primary-color)/10 mix-blend-screen blur-[50px] md:blur-[77px] rounded-full pointer-events-none" />
      
      {/* 3. Main Container Spacing: Reduced gap from 24 (6rem) to 12 (3rem) on mobile */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-12 md:gap-24 pt-20 md:pt-0">
        
        <div className="flex flex-col items-center justify-center gap-6 md:gap-8 px-4 text-center">
          
          {/* 4. MAIN HEADING FIX:
              - Text Size: text-4xl (mobile) -> text-6xl (tablet) -> text-[6rem] (desktop)
              - Spacing: Reduced mt-40 to mt-12 on mobile.
          */}
          <div className="flex flex-col justify-center items-center font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] text-center gap-2 md:gap-0.5 font-orbitron text-[#FCFFE4] mt-12 md:mt-40 leading-none">
            
            {/* Row 1 of Heading */}
            <div className="flex flex-row justify-center items-center flex-wrap gap-2 md:gap-0">
              <h1>{homeHeading[0]}</h1>
              
              {/* 5. INLINE IMAGE FIX:
                  - The image was h-[10rem] (approx 160px), which is huge for mobile.
                  - Changed to h-12 (48px) on mobile, scaling up to h-[10rem] on desktop.
              */}
              <Image
                src={"/home/TextImage.png"}
                alt="Decorative Element"
                height={710}
                width={973}
                className="h-10 sm:h-16 md:h-24 lg:h-[10rem] w-auto mx-2 md:mx-4"
              />
              <h1>{homeHeading[1]}</h1>
            </div>
            
            {/* Row 2 of Heading */}
            <div>{homeHeading[2]}</div>
          </div>

          {/* 6. Tagline: text-xl (mobile) -> text-5xl (desktop) */}
          <div className="text-xl md:text-5xl text-[#FCFFE4] font-medium">
            {homeTagLine}
          </div>

          {/* 7. Description: 
              - Width: w-full (mobile) -> w-3/4 (desktop).
              - Text size: text-sm (mobile) -> text-xl (desktop).
          */}
          <div className="text-base md:text-xl w-full md:w-3/4 text-gray-200 leading-relaxed px-2">
            {homeDescription}
          </div>

          {/* 8. Buttons: 
              - flex-col (stack) on mobile (optional, but usually safer for long button text).
              - sm:flex-row (side-by-side) on tablets/desktop.
          */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center items-center w-full">
            <Link 
              href="https://aestr-alpha-6vl6.vercel.app/" 
              className="button-primary w-full sm:w-auto justify-center"
            >
              <StarIcon className="h-6 w-auto mr-2" />
              {primaryButtonText}
            </Link>
            <button className="button-secondary w-full sm:w-auto justify-center">
              <StarIcon className="h-6 w-auto mr-2 text-(--primary-color)" />
              {secondaryButtonText}
            </button>
          </div>
        </div>

        {/* 9. Hero Image:
            - Reduced bottom margin (mb-12 vs mb-40).
            - Added padding-bottom to ensure it doesn't get cut off.
        */}
        <Image
          src={"/home/HeroImage.png"}
          alt="Hero Visual"
          height={700}
          width={1312}
          className="w-[95%] h-auto aspect-auto mb-12 md:mb-40 object-contain"
          priority
        />
      </div>
    </section>
  );
}