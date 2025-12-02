import {
  headline,
  heading,
  description,
  features,
  secondayButtonText,
} from "@/data/about";
import StarIcon from "@/components/icons/Star";
import DoubleStarIcon from "@/components/icons/DoubleStar";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      // 1. Adjusted padding: smaller on mobile (py-16), larger on desktop (md:py-32)
      className="w-full overflow-x-hidden flex flex-col items-center justify-center text-(--secondary-color) gap-6 p-6 py-16 md:p-8 md:py-32"
      id="about"
    >
      <div className="text-base md:text-lg font-medium text-center">{headline}</div>
      
      {/* 2. Responsive Text Size: 3xl on mobile, 5xl on desktop */}
      <div className="text-3xl md:text-5xl font-orbitron font-bold text-center">
        {heading}
      </div>

      {/* 3. Responsive Width: w-full on mobile (so text doesn't squash), 60% on desktop */}
      <div className="text-base md:text-lg w-full md:w-[60%] text-center leading-relaxed">
        {description}
      </div>

      {/* 4. Layout Switch: flex-col (stack) on mobile, flex-row (side-by-side) on desktop */}
      {/* 5. Removed massive p-16 padding on mobile, kept it for desktop */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-4 flex-wrap w-full py-8 md:p-16">
        {features.map((feature, index) => (
          <div
            key={index}
            // 6. Width adjustment: Full width on mobile, 30% on desktop
            className="flex flex-col items-center justify-start gap-4 w-full md:w-[30%] min-w-[250px]"
          >
            <DoubleStarIcon className="h-10 w-auto md:h-12 text-(--primary-color)" />
            <div className="text-2xl md:text-3xl font-semibold text-center">
              {feature.title}
            </div>
            <div className="text-center text-sm md:text-base px-2">
              {feature.description}
            </div>
          </div>
        ))}
      </div>

      <Link
        href="https://aestr-alpha-6vl6.vercel.app/"
        className="button-secondary mt-4"
      >
        <StarIcon className="h-6 w-auto md:h-8 mr-2 text-(--primary-color)" />
        {secondayButtonText}
      </Link>
    </section>
  );
}