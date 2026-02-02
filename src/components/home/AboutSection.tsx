"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

// --- Types ---
interface Feature {
  image: string;
  title: string;
  description: string;
}

// --- Card Component ---
// Refined Card Component using responsive sizing
const StrictCard = ({ image, title, description, titleGap = "6px", className = "", priority = false }: Feature & { className?: string; titleGap?: string; priority?: boolean }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
      }}
      className={`relative flex flex-col items-start overflow-hidden box-border snap-center shrink-0 ${className}`}
      style={{
        width: "100%",
        maxWidth: "304px",
        minWidth: "304px",
        minHeight: "414px",
        borderRadius: "8px",
        border: "1px solid transparent",
        background: "linear-gradient(180deg, #D7F601 0%, rgba(255, 255, 255, 0.08) 100%) border-box",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      }}
      whileHover={{ scale: 1.05, zIndex: 10 }}
    >
      {/* Remove previous blur logic if not needed or adjust z-index if it interferes */}

      {/* Image Container */}
      <div
        className="relative w-[304px] h-[160px] z-[1]"
        style={{
          borderRadius: "9px",
          width: "304px",
          height: "160px"
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="304px"
          className="w-full h-full object-cover rounded-[9px]"
          quality={90}
          priority={priority}
        />
      </div>

      {/* Text Container: 32px gap from image */}
      <div
        className="relative z-[1] w-[304px] flex flex-col px-[22px]"
        style={{
          marginTop: "32px",
          height: "222px" // Fixed height for text section if needed, or let it flow
        }}
      >
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "130%",
            color: "#181818",
            marginBottom: titleGap,
            whiteSpace: "pre-line"
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "140%",
            color: "#181818"
          }}
        >
          {description}
        </div>
      </div>
    </motion.div>
  )
}


// --- Main Section ---
export default function AboutSection() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      // Check if content is overflowing (i.e. mobile state)
      if (scrollContainer.scrollWidth <= scrollContainer.clientWidth) return;

      const scrollStep = 304 + 24; // Card width + gap
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      if (scrollContainer.scrollLeft >= maxScrollLeft - 10) {
        // Reset to start
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll to next
        scrollContainer.scrollBy({ left: scrollStep, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      image: "/About/Card-1.webp",
      title: "Recruiters don’t hire certificates. They hire evidence.",
      description: "Everyone has a completion certificate. Aestr residents graduate with a deployment history — live systems, real projects, real proof."
    },
    {
      image: "/About/Card-2.webp",
      title: "Stop learning like a student. Start operating like a professional.",
      description: "Aestr Alpha is designed like a corporate environment. You clock in, collaborate, and ship outcomes — just like real teams."
    },
    {
      image: "/About/Card-3.webp",
      title: "We don’t chase trends. We build foundations.",
      description: "AI moves fast — but hiring still rewards strong fundamentals. We train you on the industrial backbone that runs global companies, and layer AI where it creates real value."
    },
    {
      image: "/About/Card-4.webp",
      title: "Built for GDC\nhiring reality.",
      description: "We design our exit profile around what Global Capability Centers actually hire for — enterprise stacks, delivery maturity, and proof of work"
    }
  ];

  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section
      className="relative w-full bg-[#D7F601] overflow-hidden py-12 md:py-20 lg:py-28"
      style={{
      }}
      id="about"
    >
      <motion.div
        className="w-full max-w-[1440px] mx-auto px-4 md:px-16 flex flex-col gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >

        {/* Header Content Group */}
        <motion.div variants={fadeInUp} className="w-full max-w-[1312px] flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
          {/* Title: Why Aestr Alpha */}
          <h2
            className="w-full lg:max-w-[656px]"
            style={{
              fontFamily: "var(--font-orbitron), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: "120%",
              color: "#181818",
              margin: 0
            }}
          >
            Why Aestr Alpha
          </h2>

          {/* Description Text */}
          <div
            className="w-full lg:max-w-[656px] flex flex-col gap-1"
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(16px, 2vw, 18px)",
              lineHeight: "150%",
              color: "#181818"
            }}
          >
            <p className="m-0">Online courses are cheaper. Degrees are everywhere.</p>
            <p className="m-0">So why choose a 6-month residency?</p>
            <p className="m-0">Because Aestr Alpha is built on one principle: evidence beats claims.</p>
          </div>
        </motion.div>

        {/* Cards Container */}
        <motion.div
          ref={scrollContainerRef}
          variants={staggerContainer}
          className="w-full max-w-[1312px] flex overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 p-4 md:py-8 md:px-2 md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 md:gap-8 justify-items-center xl:justify-items-start scrollbar-hide"
        >
          {features.map((feature, index) => (
            <StrictCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              titleGap={index < 2 ? "6px" : "32px"}
              priority={index < 4}
            />
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}