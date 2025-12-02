import { heading, byline, advantages } from "@/data/advantages";
import DoubleStarIcon from "../icons/DoubleStar";

export default function AdvantagesSection() {
  return (
    <section className="w-full overflow-x-hidden flex flex-col items-center justify-center text-black gap-6 p-6 py-16 md:p-8 md:py-32 bg-(--primary-color)">
      
      
      <div className="font-orbitron font-bold text-3xl md:text-5xl w-full flex flex-row items-center justify-center">
        
      
        <div className="w-full md:w-[70%] lg:w-[35%] text-center leading-tight">
          {heading}
        </div>
      </div>

      <div className="text-base md:text-lg text-center max-w-2xl px-4">
        {byline}
      </div>

      <div className="flex flex-col lg:flex-row items-start mt-10 w-full justify-between gap-10 lg:gap-4 p-0 md:p-4">
        {advantages.map((advantage, index) => (
          <div
            key={index}
         
            className="flex flex-row items-start gap-3 justify-start lg:justify-center w-full lg:w-1/3"
          >
            <DoubleStarIcon className="h-10 w-auto md:h-12 shrink-0 text-(--accent-color)" />
            <div className="flex flex-col justify-center items-start text-left">
              <p className="font-bold text-xl md:text-2xl">{advantage.title}</p>
              <p className="mt-2 text-left text-sm md:text-base leading-relaxed">
                {advantage.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}