import { heading, timeline } from "@/data/learning";
import Image from "next/image";
import DoubleStarIcon from "@/components/icons/DoubleStar";

export default function LearningJourney() {
  return (
    <section 
      
      className="flex flex-col lg:flex-row justify-center items-start py-16 lg:py-32 gap-12 lg:gap-8 px-6 lg:px-0"
    >
      

      <div className="flex flex-col justify-start items-center lg:items-start h-full gap-8 lg:gap-12 w-full lg:w-1/2 px-0 lg:px-8">
        
       
        <p className="w-auto font-sans font-semibold text-base leading-6 tracking-[0%] text-[#EAF0BD] text-center lg:text-left ">
          Your Story
        </p>

        <div className="font-orbitron text-(--secondary-color) text-3xl md:text-5xl font-bold leading-tight text-center lg:text-left whitespace-pre-line">
          {heading}
        </div>
        
        <Image
          src={"/home/AestrLogo.png"}
          alt="Aestr Logo"
          width={616}
          height={579}
          
          className="w-full max-w-[616px] lg:w-[616px] h-auto lg:h-[579px] object-contain"
        />
      </div>

      
      <div className="flex flex-col w-full lg:w-1/2 h-full items-start justify-center pl-0 lg:pl-12">
        {timeline.map((item, index) => {
          const isLast = index === timeline.length - 1;

          return (
            <div
              key={index}
              className="flex flex-row items-stretch justify-start gap-4 w-full"
            >
              
              <div className="flex flex-col items-center justify-start shrink-0 w-12 md:w-16">
                <DoubleStarIcon className="h-8 w-auto md:h-12 text-(--primary-color) mb-2" />
                {!isLast && (
                  <div className="bg-(--primary-color) w-px grow rounded-full mb-2"></div>
                )}
              </div>

          
              <div className="flex flex-col items-start justify-start text-(--secondary-color) pb-8 gap-2 md:gap-3">
                <p className="font-semibold text-sm md:text-base opacity-90">{item.time}</p>
                
                <p className="font-bold text-xl md:text-3xl">{item.title}</p>
                
                
                <p className="text-base md:text-lg leading-relaxed">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}