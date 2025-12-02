import Image from "next/image";
import {
  homeHeading,
  homeDescription,
  homeTagLine,
  primaryButtonText,
  secondaryButtonText,
} from "@/data/home";
import StarIcon from "../icons/Star";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-start"
      style={{
        background:
          "radial-gradient(112.15% 91.53% at 110.03% 77.26%, #667015 9.13%, #181818 68.08%)",
      }}
      id="home"
    >
      <div className="absolute w-[30%] aspect-square -left-[10%] top-[10%] bg-(--primary-color)/10 mix-blend-screen blur-[77px] rounded-full pointer-events-none" />
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-24">
        <div className="flex flex-col items-center justify-center gap-8 px-4 text-center">
          <div className="flex flex-col justify-center items-center font-bold text-[6rem] text-center gap-0.5 font-orbitron text-[#FCFFE4] mt-40 leading-none">
            <div className="flex flex-row justify-center items-center">
              <h1>{homeHeading[0]}</h1>
              <Image
                src={"/home/TextImage.png"}
                alt=""
                height={710}
                width={973}
                className="h-[10rem] w-auto mx-4"
              />
              <h1>{homeHeading[1]}</h1>
            </div>
            <div>{homeHeading[2]}</div>
          </div>
          <div className="text-5xl text-[#FCFFE4]">{homeTagLine}</div>
          <div className="text-xl w-3/4">{homeDescription}</div>
          <div className="flex flex-row gap-4 mt-4 justify-center items-center">
            <button className="button-primary">
              <StarIcon className="h-8 w-auto mr-2" />
              {primaryButtonText}
            </button>
            <button className="button-secondary">
              <StarIcon className="h-8 w-auto mr-2 text-(--primary-color)" />
              {secondaryButtonText}
            </button>
          </div>
        </div>
        <Image
          src={"/home/HeroImage.png"}
          alt=""
          height={700}
          width={1312}
          className="w-[95%] h-auto aspect-auto mb-40 object-contain"
        />
      </div>
    </section>
  );
}
