import { heading, byline, advantages } from "@/data/advantages";
import DoubleStarIcon from "../icons/DoubleStar";

export default function AdvantagesSection() {
  return (
    <section className="w-full overflow-x-hidden flex flex-col items-center justify-center text-black gap-6 p-6 py-16 md:p-8 md:py-32 bg-(--primary-color)">
      
      {/* 1. Typography & Layout: */}
      {/* Changed text to 3xl for mobile, 5xl for desktop. */}
      {/* Removed fixed height constraints if any were implied. */}
      <div className="font-orbitron font-bold text-3xl md:text-5xl w-full flex flex-row items-center justify-center">
        
        {/* 2. Heading Width: */}
        {/* Crucial fix: Changed w-[35%] to w-full on mobile. */}
        {/* It now only applies w-[35%] on large screens (lg:). */}
        <div className="w-full md:w-[70%] lg:w-[35%] text-center leading-tight">
          {heading}
        </div>
      </div>

      {/* 3. Byline: Added padding for mobile readability */}
      <div className="text-base md:text-lg text-center max-w-2xl px-4">
        {byline}
      </div>

      {/* 4. Flex Direction: */}
      {/* flex-col (stack) on mobile, lg:flex-row (side-by-side) on large screens. */}
      {/* Added gap-10 for vertical spacing on mobile. */}
      <div className="flex flex-col lg:flex-row items-start mt-10 w-full justify-between gap-10 lg:gap-4 p-0 md:p-4">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            // 5. Item Width:
            // Full width on mobile, 1/3 width on desktop to distribute evenly.
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