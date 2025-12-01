import {
  headline,
  heading,
  description,
  features,
  secondayButtonText,
} from "@/data/about";
import StarIcon from "@/components/icons/Star";
import DoubleStarIcon from "@/components/icons/DoubleStar";

export default function AboutSection() {
  return (
    <section className="w-full overflow-x-hidden flex flex-col items-center justify-center text-(--secondary-color) gap-4 p-8 py-32">
      <div className="text-lg">{headline}</div>
      <div className="text-5xl font-orbitron font-bold">{heading}</div>
      <div className="text-lg w-[60%] text-center">{description}</div>
      <div className="flex flex-row items-center justify-between gap-4 flex-wrap w-full p-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-4 w-[30%] min-w-[250px]"
          >
            <DoubleStarIcon className="h-12 w-auto text-(--primary-color)" />
            <div className="text-3xl font-semibold text-center">
              {feature.title}
            </div>
            <div className="text-center">{feature.description}</div>
          </div>
        ))}
      </div>
      <button className="button-secondary">
        <StarIcon className="h-8 w-auto mr-2 text-(--primary-color)" />
        {secondayButtonText}
      </button>
    </section>
  );
}
