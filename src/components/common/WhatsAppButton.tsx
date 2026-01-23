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
                className="whatsapp-bounce"
                style={{
                    position: "fixed",
                    right: "30px",
                    bottom: "30px",
                    zIndex: 9999, // Ensure it's on top of everything
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "pointer",
                    flexFlow: "column",
                }}
            >
                {/* Icon Circle */}
                <div
                    className="hover:scale-110 transition-transform duration-200"
                    style={{
                        backgroundColor: "#25D366",
                        borderRadius: "50%",
                        width: "70px",
                        height: "70px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                    }}
                >
                    <div style={{ position: "relative", width: "40px", height: "40px" }}>
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
                    style={{
                        backgroundColor: "#D8F602", // Site accent yellow
                        color: "#181818",
                        padding: "8px 16px",
                        borderRadius: "20px",
                        fontWeight: "800",
                        fontSize: "14px",
                        fontFamily: "var(--font-orbitron), sans-serif",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                        whiteSpace: "nowrap",
                        letterSpacing: "0.5px"
                    }}
                >
                    Talk to us
                </span>
            </div>
        </>
    );
};

export default WhatsAppButton;
