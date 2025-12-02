import { heading, perks, byline, buttonText } from "@/data/ambassador";
import Image from "next/image";
import DoubleStarIcon from "../icons/DoubleStar";
import StarIcon from "../icons/Star";
import Link from "next/link";

export default function CampusAmbassador() {
  return (
    <section
      className="w-full p-8 bg-(--primary-color) flex flex-col justify-center items-center text-black py-32"
      id="ambassador"
    >
      <div className="flex flex-row justify-between items-start w-[95%] mb-24">
        <div className="text-5xl font-orbitron font-bold w-1/2">{heading}</div>
        <div className="flex flex-col justify-center items-start gap-6 w-1/2">
          <div className="text-lg">{byline}</div>
          <ul className="flex flex-col gap-2 text-lg">
            {perks.map((perk, index) => (
              <div key={index} className="flex flex-row gap-4">
                <DoubleStarIcon className="h-6 w-auto text-(--accent-color)" />
                {perk}
              </div>
            ))}
          </ul>
          <Link href="https://aestr-alpha-6vl6.vercel.app/" className="button-secondary text-black! border-black!">
            <StarIcon className="h-6 w-auto mr-2" />
            {buttonText}
          </Link>
        </div>
      </div>
      <Image
        src={"/home/Ambassador.png"}
        alt=""
        width={1312}
        height={712}
        className="w-[95%]"
      />
    </section>
  );
}
