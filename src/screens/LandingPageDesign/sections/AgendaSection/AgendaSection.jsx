import { PlusIcon } from "lucide-react"; // Changed to PlusIcon
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const AgendaSection = () => {

  const agendaItems = [
    {
      time: "09:00 AM",
      title: "Registration & Welcome",
      description: "Lorem Ipsum",
    },
    {
      time: "09:00 AM", // Added more items to match the image count
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

  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full pt-[30px] md:pt-[40px] pb-0 agenda-section"> {/* Added dark background */}
      <div className="max-w-[1312px] mx-auto px-4 agenda-inner">

        <div className="flex flex-col gap-4 agenda-list"> {/* Added gap between agenda items */}
          {agendaItems.map((item, index) => (
            <article
              key={index}
              className={`flex items-center justify-between w-full max-w-[1312px] h-[98px] mx-auto border border-solid border-white px-[24px] py-[20px] transition-colors hover:bg-[#d7f601]/5 agenda-item ${expandedIndex === index ? "expanded" : ""}`}
              onClick={() => handleToggle(index)}
            >
              {/* Left: time + text */}
              <div className="flex items-center gap-[17px] w-full">
                <Badge
                  className={`agenda-time h-[47px] w-[129.57px] flex items-center justify-center bg-[#d7f601] hover:bg-[#d7f601] px-[19.05px] py-[11.43px] border-none shadow-none focus:ring-0 focus:ring-offset-0 rounded-none ${expandedIndex === index ? "" : "hidden md:block"}`}
                >
                  <span className="flex items-center justify-center w-[92px] h-[23px] text-[20.32px] leading-[100%] tracking-[0] font-medium text-[#181818] [font-family:'Aeonik-Medium',Helvetica]">
                    {item.time}
                  </span>
                </Badge>

                <div className="flex flex-col gap-[5px] w-full">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-[25px] font-bold leading-[35px] tracking-normal text-white [font-family:'Aeonik-Bold',Helvetica]">
                      {item.title}
                    </h3>
                    <PlusIcon className="h-6 w-6 text-white flex-shrink-0" />
                  </div>

                  <p className={`agenda-description text-base font-normal leading-[25px] tracking-normal text-white [font-family:'Aeonik-Regular',Helvetica] ${expandedIndex === index ? "" : "hidden md:block"}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="w-full max-w-[1312px] mx-auto mt-[40px] flex flex-col items-center text-center gap-4">
          <h3 className="[font-family:'Roboto',sans-serif] font-bold text-white text-[32px] leading-[130%] tracking-[0] text-center">
            Still have a question?
          </h3>

          <p className="max-w-[560px] text-sm sm:text-base text-white/80 whitespace-nowrap [font-family:'Aeonik-Regular',Helvetica]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <Button
            className="mt-2 w-[200px] h-[64px] px-[32px] py-[16px] flex items-center justify-center border border-white bg-transparent text-white [font-family:'Roboto',sans-serif] font-normal text-[18px] leading-[150%] tracking-[0] hover:bg-white/10 transition-colors rounded-none"
          >
            Buy Tickets
          </Button>
        </div>
      </div>
    </section>
  );
};