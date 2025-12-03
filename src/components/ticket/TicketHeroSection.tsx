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
      // CHANGED: items-left (invalid) -> items-start
      className="relative w-full min-h-[100dvh] overflow-hidden flex flex-col items-start justify-start"
      style={{
        background:
          "radial-gradient(112.15% 91.53% at 110.03% 77.26%, #426000 9.13%, #181818 68.08%)",
      }}
      id="tickets"
    >
      {/* Background Blur Element */}
      <div className="absolute w-[60%] md:w-[30%] aspect-square -left-[20%] md:-left-[10%] top-[5%] md:top-[10%] bg-(--primary-color)/10 mix-blend-screen blur-[50px] md:blur-[77px] rounded-full pointer-events-none" />

     
      <div className="relative z-10 w-full h-full flex flex-col items-start justify-center gap-12 md:gap-24 pt-20 md:pt-0 px-6 md:px-20">
        
     
        <div className="flex flex-col items-start justify-center gap-6 md:gap-8 text-left w-full">
          
          
          <div className="flex flex-col justify-center items-start font-bold text-[96px] md:text-[96px] lg:text-[96px] text-left gap-2 md:gap-0.5 font-orbitron text-[#FCFFE4] mt-12 md:mt-40 leading-none">
            
            
            <div>{ticketHeading[0]}</div>
            
            <div className="flex flex-row justify-start items-center flex-wrap gap-2 md:gap-0">
              <h1>Experience</h1>
              
              <Image
                src={"/ticket/Elements.svg"}
                alt="Decorative Element"
                height={130}
                width={104}
               
                // className="h-10 sm:h-16 md:h-24 lg:h-[10rem] w-auto mx-2 md:mx-4"
              />
              <h1>2025</h1>
            </div>
          </div>

          
          <div className="text-[24px] md:text-[24px] text-[#FCFFE4] font-regular">
            {ticketTagLine.split('\n').map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>

          {/* Description */}
          <div className="text-[20px] md:text-[20px] w-full md:w-3/4 text-gray-200 leading-relaxed">
            {ticketDescription}
          </div>

          {/* 
             Buttons 
             CHANGED: justify-center -> justify-start
          */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-start items-center w-full">
            <Link 
              href="#about" 
              className="button-primary w-full sm:w-auto justify-center"
            >
              <StarIcon className="h-6 w-auto mr-2" />
              {primaryButtonText}
            </Link>
            <button className="button-secondary w-full sm:w-auto justify-center">
              <StarIcon className="h-6 w-auto mr-2 text-(--primary-color)" />
              {secondaryButtonText}
            </button>
          </div>
        </div>

        {/* 
           Bottom Image
           You might want to remove 'mx-auto' if it exists implicitly, 
           but currently it will just flow left within the flex container.
        */}
        <Image
          src={"/Ticket/Ticketabout.svg"}
          alt="Ticket Hero Visual"
          height={700}
          width={1312}
          className="w-[95%] h-auto aspect-auto mb-12 md:mb-40 object-contain self-start" // Added self-start to ensure alignment
          priority
        />
      </div>
    </section>
  );
}