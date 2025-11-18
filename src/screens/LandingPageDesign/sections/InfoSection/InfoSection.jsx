import { ChevronRightIcon } from "lucide-react";
import React from "react";

const scheduleItems = [
  {
    time: "09:00 AM",
    title: "Registration & Welcome",
    description: "Lorem Ipsum",
  },
  {
    time: "09:00 AM",
    title: "Registration & Welcome",
    description: "Lorem Ipsum",
  },
  {
    time: "09:00 AM",
    title: "Registration & Welcome",
    description: "Lorem Ipsum",
  },
  {
    time: "09:00 AM",
    title: "Registration & Welcome",
    description: "Lorem Ipsum",
  },
];

export const InfoSection = () => {
  return (
    <section className="w-full flex flex-col gap-4 py-[150px]">
      {scheduleItems.map((item, index) => (
        <article
          key={index}
          className="relative flex items-center border border-solid border-[#d7f601] h-[134px] translate-y-[-1rem] animate-fade-in opacity-0"
          style={{ "--animation-delay": `${index * 200}ms` }}
        >
          <div className="inline-flex items-center gap-[17px] ml-[45px]">
            <div className="flex items-center justify-center gap-[12.7px] px-[19.05px] py-[11.43px] bg-[#d7f601] min-w-[129.57px] h-[47px]">
              <time className="[font-family:'Aeonik-Medium',Helvetica] font-medium text-[#181818] text-[20.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                {item.time}
              </time>
            </div>

            <div className="flex flex-col gap-[5px] w-[325px]">
              <h3 className="[font-family:'Aeonik-Bold',Helvetica] font-bold text-white text-[25px] tracking-[0] leading-[35px]">
                {item.title}
              </h3>

              <p className="[font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[25px]">
                {item.description}
              </p>
            </div>
          </div>

          <ChevronRightIcon className="absolute right-[33px] top-1/2 -translate-y-1/2 w-[33px] h-[16px] text-white" />
        </article>
      ))}
    </section>
  );
};
