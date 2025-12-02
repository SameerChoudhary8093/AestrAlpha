import { heading, byline, boardMembers, buttonText } from "@/data/board";
import StarIcon from "@/components/icons/Star";
import Image from "next/image";
import Link from "next/link";

export default function BoardMembers() {
  return (
    <section 
      // 1. Padding: Reduced to p-6 py-16 on mobile, scaled up to p-8 py-32 on desktop
      className="w-full p-6 py-16 md:p-8 md:py-32 flex flex-col justify-center items-start bg-[#1C1825] text-white"
    >
      
      {/* 2. Heading Size: text-3xl on mobile, text-5xl on desktop */}
      <h2 className="text-3xl md:text-5xl font-bold mb-4 font-orbitron w-full text-left">
        {heading}
      </h2>
      
      {/* 3. Spacing: Reduced mb-16 to mb-8 on mobile to save space */}
      <p className="text-base md:text-lg mb-8 md:mb-16 max-w-3xl">
        {byline}
      </p>

      {/* 4. Grid System: 
         - grid-cols-1 (1 column) on mobile
         - md:grid-cols-2 (2 columns) on tablets
         - lg:grid-cols-3 (3 columns) on desktop 
         - Increased vertical gap (gap-y-12) for clear separation on mobile
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full justify-between items-start gap-y-12 md:gap-y-10">
        {boardMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-start justify-start gap-4 w-full"
          >
            {/* 5. Image: Added w-full and h-auto so the image scales with the column width */}
            <Image
              src={member.photo.src}
              alt={member.photo.alt}
              width={member.photo.width}
              height={member.photo.height}
              className="w-full h-auto object-cover rounded-lg"
            />
            
            <div className="flex flex-col gap-1">
              <h3 className="text-xl md:text-2xl font-semibold">{member.name}</h3>
              <p className="text-sm md:text-base text-gray-300">{member.position}</p>
            </div>
            
            <div className="text-sm md:text-base text-gray-200 leading-relaxed">
              {member.bio}
            </div>
            
            <div className="flex flex-row gap-4 items-center justify-start mt-2">
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

      {/* 6. Button Spacing: Reduced top margin on mobile */}
      <div className="flex flex-row items-center justify-center w-full mt-12 md:mt-24">
        <button className="button-secondary text-white! border-white!">
          <StarIcon className="h-6 w-6 mr-2 text-(--primary-color)" />
          {buttonText}
        </button>
      </div>
    </section>
  );
}