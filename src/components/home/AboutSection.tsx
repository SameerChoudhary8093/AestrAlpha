import React from 'react';

// --- Types ---
interface Feature {
  image: string;
  title: string;
  description: string;
}

// --- Card Component ---
const FeatureCard = ({ image, title, description }: Feature) => {
  return (
    <div
      style={{
        width: "304px",
        height: "414px",
        borderRadius: "8px",
        border: "1px solid transparent",
        background: "linear-gradient(#181818, #181818) padding-box, linear-gradient(180deg, #D7F601 0%, rgba(255, 255, 255, 0.08) 100%) border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0" // Assuming padding handled by inner elements positioning
      }}
    >
      {/* Image Area */}
      <div
        style={{
          width: "304px", // Full width of card minus border effectively
          height: "160px",
          borderRadius: "9px", // Requested 9px
          opacity: 1,
          overflow: "hidden",
          // Assuming image covers this area, using a placeholder color or img tag if URL provided
          background: "#222"
        }}
      >
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Content Area */}
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        {/* Title */}
        <h3
          style={{
            position: "absolute",
            top: "32px",
            left: "22px",
            width: "262px",
            // height: "78px", // Let height be natural to prevent cut off
            fontFamily: "Arial, sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "130%",
            color: "#D1D5DB"
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          style={{
            position: "absolute",
            top: "116px", // 32px (gap) + ~78px (title height, estimated) -> logic from prompt: "top: 84px" seems relative to something else or implies overlap. 
            // Creating simplified flow based on prompt layout relative to "image ke niche 32px gap" -> Title.
            // "Iske niche 6px gap" -> Description.
            // Re-calculating: Image(160) + Gap(32) = 192 (Top of Title).
            // Title Height(78) -> 192+78 = 270. 
            // Gap(6) -> 276 (Top of Desc).
            // Let's use relative flex flow for inner content to be safe and cleaner than absolute if possible, 
            // but prompt gave specific "top: 84px" and "left: 22px" which might be relative to the text container below image.
            // Let's stick to absolute to match the "pixel perfect" request if the container is the reference.
            // BUT, "top: 84px" for description and "height: 78" for title suggests they overlap if 0-based.
            // Let's assume standard flow: Image -> Gap -> Title -> Gap -> Desc.

            // Let's try Flex column for the text part below image.

            width: "262px",
            // height: "88px",
            fontFamily: "Arial, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "140%",
            color: "#EAF0BD",
            marginTop: "6px" // Gap between title and desc
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

// Refined Card Component using strict Flexbox to honor gaps
const StrictCard = ({ image, title, description }: Feature) => {
  return (
    <div
      style={{
        width: "304px",
        height: "414px",
        borderRadius: "8px",
        border: "1px solid transparent",
        background: "linear-gradient(180deg, #181818 55% 0%, #181818 55%) padding-box, linear-gradient(180deg, #D7F601 0%, rgba(255, 255, 255, 0.08) 100%) border-box",
        boxSizing: "border-box",
        overflow: "hidden", // Ensure weird radii don't leak
        position: "relative"
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "286px",
          height: "232px",
          top: "-126px",
          left: "-21px",
          background: "#D7F601",
          filter: "blur(244px)",
          zIndex: 0
        }}
      />
      {/* Image */}
      <div style={{ width: "304px", height: "160px", borderRadius: "9px", position: "relative", zIndex: 1 }}>
        <img src={image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "9px" }} />
      </div>

      {/* Text Container */}
      <div style={{ paddingLeft: "22px", marginTop: "32px", width: "262px" }}>
        <div
          style={{
            width: "262px",
            // height: "78px", 
            fontFamily: "Arial, sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "130%",
            color: "#EAF0BD",
            marginBottom: "6px"
          }}
        >
          {title}
        </div>
        <div
          style={{
            width: "262px",
            // height: "88px",
            fontFamily: "Arial, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "140%",
            color: "#EAF0BD" // Updated to match image (white/gray) vs prompt (yellow)
          }}
        >
          {description}
        </div>
      </div>
    </div>
  )
}


// --- Main Section ---
export default function AboutSection() {
  const features = [
    {
      image: "/About/Card-1.svg",
      title: "Recruiters don’t hire certificates. They hire evidence.",
      description: "Everyone has a completion certificate. Aestr residents graduate with a deployment history — live systems, real projects, real proof."
    },
    {
      image: "/About/Card-2.svg",
      title: "Stop learning like a student. Start operating like a professional.",
      description: "Aestr Alpha is designed like a corporate environment. You clock in, collaborate, and ship outcomes — just like real teams."
    },
    {
      image: "/About/Card-3.svg",
      title: "We don’t chase trends. We build foundations.",
      description: "AI moves fast — but hiring still rewards strong fundamentals. We train you on the industrial backbone that runs global companies, and layer AI where it creates real value."
    },
    {
      image: "/About/Card-4.svg",
      title: "Built for GDC hiring reality.",
      description: "We design our exit profile around what Global Capability Centers actually hire for — enterprise stacks, delivery maturity, and proof of work"
    }
  ];

  return (
    <section
      style={{
        width: "1440px",
        height: "799px",
        background: "#181818",
        margin: "0 auto", // Center the section container
        position: "relative",
        maxWidth: "100%",
        overflow: "hidden" // Clip overflowing content if any
      }}
      id="about"
    >
      {/* Header Content Group */}
      <div
        style={{
          position: "absolute",
          top: "112px",
          left: "64px",
          width: "1312px",
          height: "81px",
          display: "flex",
          justifyContent: "space-between", // To separate title and left text
          alignItems: "flex-start"
        }}
      >
        {/* Title: Why Aestr Alpha */}
        <h2
          style={{
            width: "656px",
            height: "58px",
            fontFamily: "var(--font-orbitron), sans-serif",
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "120%",
            color: "#EAF0BD",
            margin: 0
          }}
        >
          Why Aestr Alpha
        </h2>

        {/* Description Text */}
        <div
          style={{
            width: "656px",
            height: "81px",
            fontFamily: "Arial, sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "150%",
            color: "#EAF0BD"
          }}
        >
          <p style={{ margin: 0 }}>Online courses are cheaper. Degrees are everywhere.</p>
          <p style={{ margin: 0 }}>So why choose a 6-month residency?</p>
          <p style={{ margin: 0 }}>Because Aestr Alpha is built on one principle: evidence beats claims.</p>
        </div>
      </div>

      {/* Cards Container */}
      <div
        style={{
          position: "absolute",
          top: "273px",
          left: "64px",
          width: "1312px",
          height: "414px",
          display: "flex",
          gap: "32px" // Calculated gap: (1312 - (304*4)) / 3 = 96 / 3 = 32px. Perfect.
        }}
      >
        {features.map((feature, index) => (
          <StrictCard
            key={index}
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}