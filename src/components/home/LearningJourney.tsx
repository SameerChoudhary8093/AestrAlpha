import { heading, timeline } from "@/data/learning";
import Image from "next/image";
import DoubleStarIcon from "@/components/icons/DoubleStar";

export default function LearningJourney() {
  return (
    <section className="flex flex-row justify-center items-start py-32 gap-8">
      <div className="flex flex-col justify-start items-start h-full gap-12 w-1/2 px-8">
        <div className="font-orbitron text-(--secondary-color) text-5xl font-bold leading-tight text-left">
          {heading}
        </div>
        <Image
          src={"/home/AestrLogo.png"}
          alt=""
          width={616}
          height={579}
          className="grow"
        />
      </div>

      <div className="flex flex-col w-1/2 h-full items-start justify-center pl-12">
        {timeline.map((item, index) => {
          const isLast = index === timeline.length - 1;

          return (
            <div
              key={index}
              className="flex flex-row items-stretch justify-start gap-4"
            >
              <div className="flex flex-col items-center justify-start shrink-0 w-16">
                <DoubleStarIcon className="h-12 w-auto text-(--primary-color) mb-2" />
                {!isLast && (
                  <div className="bg-(--primary-color) w-px grow rounded-full mb-2"></div>
                )}
              </div>
              <div className="flex flex-col items-start justify-start text-(--secondary-color) pb-8 gap-3">
                <p className="font-semibold">{item.time}</p>
                <p className="font-bold text-3xl">{item.title}</p>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
