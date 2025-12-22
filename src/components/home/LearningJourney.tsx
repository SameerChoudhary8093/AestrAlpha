import React from 'react';
import Image from "next/image";

export default function LearningJourney() {
  return (
    <section
      style={{
        width: "100%",
        background: "#D7F601",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1440px",
          padding: "112px 64px",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          gap: "80px"
        }}
      >
        {/* Left Section: width 616 */}
        <div style={{ width: "616px", display: "flex", flexDirection: "column" }}>
          {/* Subheader: Your 6-Month Experience */}
          <div
            style={{
              width: "182px",
              height: "24px",
              fontFamily: "var(--font-roboto), sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "150%",
              color: "#181818",
              marginBottom: "16px"
            }}
          >
            Your 6-Month Experience
          </div>

          {/* Heading: Your Learning Journey... */}
          <h2
            style={{
              fontFamily: "var(--font-orbitron), sans-serif",
              fontWeight: 700,
              fontSize: "48px",
              lineHeight: "120%",
              color: "#181818",
              margin: "0 0 80px 0"
            }}
          >
            Your Learning Journey Inside Aestr Alpha
          </h2>

          {/* Image */}
          <div
            style={{
              width: "616px",
              height: "579px",
              borderRadius: "8px",
              background: "transparent",
              overflow: "hidden"
            }}
          >
            <Image
              src="/home/LearningJourney.svg"
              alt="Learning Journey"
              width={616}
              height={579}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Right Section: width 616, gap 90px between items */}
        <div
          style={{
            width: "616px",
            display: "flex",
            flexDirection: "column",
            gap: "90px"
          }}
        >
          {/* Item 1 */}
          <div style={{ width: "616px", display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "40px" }}>
            <Image src="/home/Content.svg" alt="Icon" width={58} height={61} style={{ flexShrink: 0 }} />
            <div style={{ width: "518.47px" }}>
              <h3 style={{ fontFamily: "Arial, sans-serif", fontWeight: 700, fontSize: "32px", lineHeight: "130%", color: "#181818", margin: 0 }}>
                Office hours, not classroom hours
              </h3>
              <p style={{ marginTop: "10px", fontFamily: "Arial, sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "150%", color: "#181818", margin: "10px 0 0 0" }}>
                9:00 AM – 12:00 PM: Concepts (“Download”)<br />
                1:00 PM – 6:00 PM: Build (“Work Simulation”)<br />
                You’ll use Slack/Discord, Jira/Trello, Git — and operate in sprints
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div style={{ width: "616px", display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "40px" }}>
            <Image src="/home/Content.svg" alt="Icon" width={58} height={61} style={{ flexShrink: 0 }} />
            <div style={{ width: "518.47px" }}>
              <h3 style={{ fontFamily: "Arial, sans-serif", fontWeight: 700, fontSize: "32px", lineHeight: "130%", color: "#181818", margin: 0 }}>
                Hands-on guided One massive product. One team.
              </h3>
              <p style={{ marginTop: "10px", fontFamily: "Arial, sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "150%", color: "#181818", margin: "10px 0 0 0" }}>
                The entire cohort collaborates on a single large build to learn how real cross-functional teams ship. Developers, data, and product workflows operate together. & mentor sessions.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div style={{ width: "616px", display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "40px" }}>
            <Image src="/home/Content.svg" alt="Icon" width={58} height={61} style={{ flexShrink: 0 }} />
            <div style={{ width: "518.47px" }}>
              <h3 style={{ fontFamily: "Arial, sans-serif", fontWeight: 700, fontSize: "32px", lineHeight: "130%", color: "#181818", margin: 0 }}>
                Real client outcomes
              </h3>
              <p style={{ marginTop: "10px", fontFamily: "Arial, sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "150%", color: "#181818", margin: "10px 0 0 0" }}>
                Residents work with partner startups/SMEs to build real deliverables — with real feedback, documentation, and professional artifacts (LOR + live work links).
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div style={{ width: "616px", display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "40px" }}>
            <Image src="/home/Content.svg" alt="Icon" width={58} height={61} style={{ flexShrink: 0 }} />
            <div style={{ width: "518.47px" }}>
              <h3 style={{ fontFamily: "Arial, sans-serif", fontWeight: 700, fontSize: "32px", lineHeight: "130%", color: "#181818", margin: 0 }}>
                Portfolio + Career Prep
              </h3>
              <p style={{ marginTop: "10px", fontFamily: "Arial, sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "150%", color: "#181818", margin: "10px 0 0 0" }}>
                LinkedIn, Resume, Interviews, Portfolio review.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}