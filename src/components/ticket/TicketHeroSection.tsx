import Image from "next/image";
import {
  ticketHeading,
  ticketDescription,
  ticketTagLine,
  primaryButtonText,
  secondaryButtonText,
} from "@/data/ticket";
import StarIcon from "../icons/Star";
import Link from "next/link";

export default function TicketHeroSection() {
  return (
    <section
      className="relative w-full min-h-[100dvh] overflow-hidden flex flex-col items-start justify-start"
      style={{
        background:
          "radial-gradient(112.15% 91.53% at 110.03% 77.26%, #426000 9.13%, #181818 68.08%)",
      }}
      id="tickets"
    >
      {/* Background Blur Element */}
      <div className="absolute w-[60%] md:w-[30%] aspect-square -left-[20%] md:-left-[10%] top-[5%] md:top-[10%] bg-(--primary-color)/10 mix-blend-screen blur-[50px] md:blur-[77px] rounded-full pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-start justify-center gap-8 md:gap-24 pt-24 pb-12 md:pt-0 px-6 md:px-20">
        
        <div className="flex flex-col items-start justify-center gap-6 md:gap-8 text-left w-full">
          
          {/* 
            HEADING AREA 
            Changes: 
            - Added responsive font sizes (text-4xl up to text-[96px])
            - Adjusted leading (line-height) for tighter mobile display
          */}
          <div className="flex flex-col justify-center items-start font-bold text-left gap-2 md:gap-0.5 font-orbitron text-[#FCFFE4] mt-8 md:mt-40 leading-tight md:leading-none">
            
            {/* Dynamic Font Size for First Line */}
            <div className="text-4xl sm:text-6xl md:text-8xl lg:text-[96px]">
              {ticketHeading[0]}
            </div>
            
            <div className="flex flex-row justify-start items-center flex-wrap gap-x-3 gap-y-0 md:gap-4">
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[96px]">Experience</h1>
              
              {/* 
                 Inline Image
                 Changes: removed fixed width/height prop dominance and used responsive CSS height 
                 to match the text size on mobile vs desktop.
              */}
              <div className="relative h-8 w-auto sm:h-14 md:h-20 lg:h-[100px] aspect-[104/130]">
                <Image
                  src={"/Ticket/Elements.svg"}
                  alt="Decorative Element"
                  fill
                  className="object-contain"
                />
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[96px]">2025</h1>
            </div>
          </div>

          {/* Tagline - Responsive Text Size */}
          <div className="text-lg sm:text-xl md:text-2xl lg:text-[24px] text-[#FCFFE4] font-regular">
            {ticketTagLine.split('\n').map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>

          {/* Description - Responsive Text Size & Width */}
          <div className="text-base sm:text-lg md:text-[20px] w-full md:w-3/4 text-gray-200 leading-relaxed">
            {ticketDescription}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-start items-center w-full">
            <Link 
              href="#" 
              className="button-primary w-full sm:w-auto justify-center"
            >
              <StarIcon className="h-5 w-5 md:h-6 md:w-auto mr-2" />
              {primaryButtonText}
            </Link>
            <Link href="#agenda" className="button-secondary w-full sm:w-auto justify-center">
              <StarIcon className="h-5 w-5 md:h-6 md:w-auto mr-2 text-(--primary-color)" />
              {secondaryButtonText}
            </Link>
          </div>
        </div>

        {/* Bottom Image */}
        <Image
          src={"/Ticket/Ticketabout.svg"}
          alt="Ticket Hero Visual"
          height={700}
          width={1312}
          className="w-full md:w-[95%] h-auto aspect-auto mb-8 md:mb-40 object-contain self-start" 
          priority
        />
      </div>
    </section>
  );
}