import { heading, byline, advantages } from "@/data/advantages";
import DoubleStarIcon from "../icons/DoubleStar";

export default function AdvantagesSection() {
  return (
    <section className="w-full overflow-x-hidden flex flex-col items-center justify-center text-black gap-4 p-8 py-32 bg-(--primary-color)">
      <div className="font-orbitron font-bold text-5xl w-full flex flex-row items-center justify-center">
        <div className="w-[35%] text-center leading-tight">{heading}</div>
      </div>
      <div className="text-lg">{byline}</div>
      <div className="flex flex-row items-center mt-10 w-full justify-between gap-4 p-4">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className="flex flex-row items-start gap-2 justify-center"
          >
            <DoubleStarIcon className="h-12 w-auto shrink-0 text-(--accent-color)" />
            <div className="flex flex-col justify-center items-start text-left">
              <p className="font-bold text-2xl">{advantage.title}</p>
              <p className="mt-2 text-left">{advantage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
