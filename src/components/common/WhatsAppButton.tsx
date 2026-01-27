"use client";

import React from "react";
import Image from "next/image";

const WhatsAppButton = () => {
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);

    const handleClick = () => {
        // WhatsApp redirect message
        const message = "Hi, I went through the “What You Graduate With” section on Aestr Alpha and would like to talk to a counselor.";
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/9828781952?text=${encodedMessage}`, "_blank");
    };

    if (!isClient) {
        return null;
    }

    return (
        <>
            <style jsx global>{`
        @keyframes float-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .whatsapp-bounce {
          animation: float-bounce 2s infinite ease-in-out;
        }
      `}</style>

            <div
                onClick={handleClick}
                className="whatsapp-bounce fixed right-4 bottom-4 md:right-[30px] md:bottom-[30px] flex flex-col items-center gap-2 md:gap-3 cursor-pointer z-[9999]"
            >
                {/* Icon Circle */}
                <div
                    className="hover:scale-110 transition-transform duration-200 w-[50px] h-[50px] md:w-[70px] md:h-[70px] flex items-center justify-center rounded-full shadow-lg"
                    style={{
                        backgroundColor: "#25D366",
                    }}
                >
                    <div className="relative w-[30px] h-[30px] md:w-[40px] md:h-[40px]">
                        <Image
                            src="/hero-assets/WhatsApp.svg"
                            alt="WhatsApp"
                            fill
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                </div>

                {/* Text Label */}
                <span
                    className="bg-[#D8F602] text-[#181818] px-3 py-1.5 md:px-4 md:py-2 rounded-full font-extrabold text-[12px] md:text-[14px] shadow-md whitespace-nowrap tracking-wide"
                    style={{
                        fontFamily: "var(--font-orbitron), sans-serif",
                    }}
                >
                    Talk to us
                </span>
            </div>
        </>
    );
};

export default WhatsAppButton;
