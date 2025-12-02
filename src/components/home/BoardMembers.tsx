import { heading, byline, boardMembers, buttonText } from "@/data/board";
import StarIcon from "@/components/icons/Star";
import Image from "next/image";
import Link from "next/link";

export default function BoardMembers() {
  return (
    <section className="w-full p-8 flex flex-col justify-center items-start py-32 bg-[#1C1825] text-white">
      <h2 className="text-5xl font-bold mb-4 font-orbitron">{heading}</h2>
      <p className="text-lg mb-16">{byline}</p>
      <div className="grid grid-cols-3 gap-6 w-full justify-between items-center gap-y-10">
        {boardMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-start justify-start gap-4"
          >
            <Image
              src={member.photo.src}
              alt={member.photo.alt}
              width={member.photo.width}
              height={member.photo.height}
              className="h-64 w-64 object-cover"
            />
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p>{member.position}</p>
            </div>
            <div>{member.bio}</div>
            <div className="flex flex-row gap-4 items-center justify-center mt-2">
              {member.social.map((link) => (
                <Link
                  key={link.platform}
                  href={link.url}
                  aria-label={link.platform}
                  className="text-white hover:opacity-90 transition-colors duration-300"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-center w-full mt-24">
        <button className="button-secondary text-white! border-white!">
          <StarIcon className="h-6 w-6 mr-2 text-(--primary-color)" />
          {buttonText}
        </button>
      </div>
    </section>
  );
}
