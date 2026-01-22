import { heading, perks, byline, buttonText } from "@/data/ambassador";
import Image from "next/image";
import DoubleStarIcon from "../icons/DoubleStar";
import StarIcon from "../icons/Star";
import Link from "next/link";

export default function CampusAmbassador() {
  return (
    <section

      className="w-full p-6 py-16 md:p-8 md:py-32 bg-(--primary-color) flex flex-col justify-center items-center text-black"
      id="ambassador"
    >

      <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-[1312px] gap-10 md:gap-4 mb-12 md:mb-24">


        <div className="text-[32px] md:text-[48px] font-orbitron font-bold leading-[1.2] whitespace-pre-line max-w-[616px] w-full md:w-1/2 text-left">
          {heading}
        </div>


        <div className="flex flex-col justify-center items-start gap-6 w-full md:w-1/2">
          {/* byline: Lead. Inspire. Represent. */}
          <div
            style={{
              width: '100%',
              maxWidth: '616px',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '150%',
              color: '#000000',
            }}
          >
            {byline}
          </div>

          <ul
            className="flex flex-col gap-3"
            style={{
              fontFamily: 'Arial, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '150%',
              color: '#000000',
            }}
          >
            {perks.map((perk, index) => (
              <div key={index} className="flex flex-row gap-4 items-start">
                <DoubleStarIcon className="h-6 w-auto text-(--accent-color) shrink-0 mt-1" />
                <span>{perk}</span>
              </div>
            ))}
          </ul>

          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfX-l0DhYna7HIFA_qjP4b3OQpvGZJo-wdSx5XbvrOa3YbIgg/viewform?usp=publish-editor"
            className="flex items-center justify-center gap-2 hover:bg-black/5 transition-colors mt-8 w-full md:w-[181px]"
            style={{
              height: '53.8px',
              padding: '12px 24px',
              borderTopLeftRadius: '4px',
              borderTopRightRadius: '20px',
              borderBottomRightRadius: '4px',
              borderBottomLeftRadius: '4px',
              border: '1px solid #000000',
              fontFamily: "var(--font-orbitron), sans-serif",
              fontWeight: 900,
              fontSize: '16px',
              lineHeight: '150%',
              textDecoration: 'none',
              color: '#000000',
            }}
          >
            <StarIcon style={{ width: "24px", height: "24px", color: "#000000" }} />
            <span className="whitespace-nowrap">Apply Now</span>
          </Link>
        </div>
      </div>

      <div className="w-full max-w-[1312px] h-auto rounded-2xl overflow-hidden">
        <Image
          src="/test/Ambassador.webp"
          alt="Campus Ambassador Program"
          width={1312}
          height={662}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1312px"
          style={{ borderRadius: "16px" }}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}