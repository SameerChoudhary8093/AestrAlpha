import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";

export const AgendaSection = () => {
  const agendaItems = [
    {
      time: "09:00 AM",
      title: "Registration & Welcome",
      description: "Lorem Ipsum",
    },
  ];

  return (
    <section className="w-full opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
      {agendaItems.map((item, index) => (
        <article
          key={index}
          className="flex items-center justify-between border border-solid border-[#d7f601] px-[45px] py-[34px] transition-colors hover:bg-[#d7f601]/5"
        >
          <div className="flex items-center gap-[17px]">
            <Badge className="h-[47px] w-[129.57px] items-center justify-center gap-[12.7px] bg-[#d7f601] px-[19.05px] py-[11.43px] text-[20.3px] font-medium text-[#181818] hover:bg-[#d7f601] [font-family:'Aeonik-Medium',Helvetica]">
              {item.time}
            </Badge>

            <div className="flex flex-col gap-[5px]">
              <h3 className="w-[325px] text-[25px] font-bold leading-[35px] tracking-[0] text-white [font-family:'Aeonik-Bold',Helvetica]">
                {item.title}
              </h3>

              <p className="w-[325px] text-base font-normal leading-[25px] tracking-[0] text-white [font-family:'Aeonik-Regular',Helvetica]">
                {item.description}
              </p>
            </div>
          </div>

          <ChevronRightIcon className="h-[16.3px] w-[32.6px] text-white transition-transform hover:translate-x-1" />
        </article>
      ))}
    </section>
  );
};
