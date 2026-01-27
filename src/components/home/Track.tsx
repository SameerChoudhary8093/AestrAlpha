"use client";

import React, { useState } from 'react';
import Image from "next/image";
import StarIcon from "@/components/icons/Star";
import Link from "next/link";
import BrochureModal from "./BrochureModal";
import ApplicationModal from "./ApplicationModal";

// No local tool icon imports needed as we use SimpleIcons CDN

// Card Component
const TrackCard = ({ imageSrc, title, description, href, toolIcons }: { imageSrc: string, title: string, description: string, href?: string, toolIcons?: { icon: React.ReactNode, label: string }[] }) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    width: "100%",
    maxWidth: "405px",
    minHeight: "410px",
    transform: isHovered ? "scale(1.03)" : "scale(1)",
    background: "transparent",
    overflow: "hidden",
  };

  const className = "relative flex flex-col items-start cursor-pointer transition-transform duration-300";

  const content = (
    <>
      {/* Ellipse 190 */}
      <div style={{
        position: "absolute",
        width: "286px",
        height: "286px",
        left: "46px",
        top: "-81.24px",
        background: "#D7F601",
        filter: "blur(244px)",
        borderRadius: "50%",
        opacity: 1,
        pointerEvents: "none",
        zIndex: 20
      }} />

      {/* Image Container */}
      <div
        className="relative z-10 w-full rounded-lg overflow-hidden border border-transparent"
        style={{
          height: "240px",
          background: "linear-gradient(#181818, #181818) padding-box, linear-gradient(180deg, #D8F602 0%, rgba(216, 246, 2, 0) 100%) border-box",
        }}>

        <Image
          src={imageSrc}
          alt={title}
          width={405}
          height={240}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 405px"
          className="w-full h-full object-cover"
        />

        {/* --- ADDED: Gradient Overlay --- */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            // Gradient fades to transparent by 90% to ensure the bottom is completely clean
            background: "linear-gradient(180deg, rgba(215, 246, 1, 0.6) 0%, rgba(252, 252, 249, 0) 90%)",
            mixBlendMode: "multiply",
            zIndex: 10
          }}
        />
        {/* Fade to Background Color (#181818) Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, transparent 0%, #181818 100%)",
            zIndex: 11
          }}
        />
        {/* ------------------------------- */}

      </div>

      {/* Text Content */}
      <div
        className="relative z-10 w-full pt-10 px-[20px] pb-6 flex flex-col gap-4"
        style={{
          background: "radial-gradient(100% 100% at 50% 0%, #2E360F 0%, transparent 100%)"
        }}
      >
        {/* Heading */}
        <h3
          className="w-full"
          style={{
            fontFamily: "var(--font-roboto), sans-serif",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "140%",
            color: "#EAF0BD",
            margin: 0,
            minHeight: "72px",
            display: "flex",
            alignItems: "flex-start",
          }}>
          {title}
        </h3>

        {/* Subtext */}
        <p
          className="w-full"
          style={{
            fontFamily: "var(--font-roboto), sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "150%",
            color: "#EAF0BD",
            margin: 0,
            whiteSpace: "pre-line",
            letterSpacing: "-0.01em",
            minHeight: "42px"
          }}>
          {description}
        </p>

        {/* Tool Icons Section */}
        {toolIcons && (
          <div className="grid grid-cols-2 gap-y-3 gap-x-2 mt-4 w-full">
            {toolIcons.map((tool, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                  {tool.icon}
                </div>
                <span className="text-[12px] leading-[140%] text-[#EAF0BD] opacity-80 font-sans truncate">
                  {tool.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={className}
        style={containerStyle}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={className}
      style={containerStyle}>
      {content}
    </div>
  );
};

interface TrackProps {
  heading?: React.ReactNode;
  byline?: string;
  alignDesktop?: "center" | "start" | "end" | "left" | "right";
}

export default function Track({ heading, byline, alignDesktop = "center" }: TrackProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);

  // Normalize alignDesktop to valid flex alignment
  const alignment = alignDesktop === "left" || alignDesktop === "start" ? "flex-start" : alignDesktop === "right" || alignDesktop === "end" ? "flex-end" : "center";
  const textAlign = alignDesktop === "left" || alignDesktop === "start" ? "left" : alignDesktop === "right" || alignDesktop === "end" ? "right" : "center";

  // Exact data from the uploaded image
  const cardData = [
    {
      title: "Salesforce Ecosystem Residency",
      desc: "Enterprise CRM + Agentforce layer • Consulting\n& platform roles",
      img: "/ChooseYourTrack/image-1.svg",
      href: "/salesforce-ecosystem-residency",
      toolIcons: [
        { icon: <Image src="/tracks/salesforce-cloud.png" alt="Salesforce Cloud" width={20} height={20} className="w-full h-full object-contain" />, label: "Salesforce Cloud" },
        { icon: <Image src="/tracks/apex.png" alt="Apex" width={20} height={20} className="w-full h-full object-contain" />, label: "Apex" },
        { icon: <Image src="/tracks/lwc.png" alt="LWC" width={20} height={20} className="w-full h-full object-contain" />, label: "LWC" },
        { icon: <Image src="/tracks/vs-code.png" alt="VS Code" width={20} height={20} className="w-full h-full object-contain" />, label: "VS Code" },
        { icon: <Image src="/tracks/git.svg" alt="Git" width={20} height={20} className="w-full h-full object-contain" />, label: "Git" },
        { icon: <Image src="/tracks/jira.svg" alt="Jira" width={20} height={20} className="w-full h-full object-contain" />, label: "Jira" },
      ]
    },
    {
      title: "AI Infrastructure & Cloud Native Residency",
      desc: "Cloud + Kubernetes + LLMOps • Infra, SRE,\nplatform roles",
      img: "/tracks/image-2.svg",
      href: "/ai-infrastructure-cloud-native-residency",
      toolIcons: [
        { icon: <Image src="/tracks/kubernetes.svg" alt="Kubernetes" width={20} height={20} className="w-full h-full object-contain" />, label: "Kubernetes" },
        { icon: <Image src="/tracks/docker.svg" alt="Docker" width={20} height={20} className="w-full h-full object-contain" />, label: "Docker" },
        { icon: <Image src="/tracks/python.svg" alt="Python" width={20} height={20} className="w-full h-full object-contain" />, label: "Python" },
        { icon: <Image src="/tracks/terraform.svg" alt="Terraform" width={20} height={20} className="w-full h-full object-contain" />, label: "Terraform" },
        { icon: <Image src="/tracks/aws.png" alt="AWS" width={20} height={20} className="w-full h-full object-contain" />, label: "AWS" },
        { icon: <Image src="/tracks/googlecloud.svg" alt="GCP" width={20} height={20} className="w-full h-full object-contain" />, label: "GCP" },
      ]
    },
    {
      title: "Enterprise Data Platform Residency",
      desc: "Modern data stack + vector pipelines • Data\nengineering & AI data roles",
      img: "/tracks/image-3.svg",
      href: "/enterprise-data-platform-residency",
      toolIcons: [
        { icon: <Image src="/tracks/python.svg" alt="Python" width={20} height={20} className="w-full h-full object-contain" />, label: "Python" },
        { icon: <Image src="/tracks/mysql.svg" alt="SQL" width={20} height={20} className="w-full h-full object-contain" />, label: "SQL" },
        { icon: <Image src="/tracks/snowflake.svg" alt="Snowflake" width={20} height={20} className="w-full h-full object-contain" />, label: "Snowflake" },
        { icon: <Image src="/tracks/apacheairflow.svg" alt="Airflow" width={20} height={20} className="w-full h-full object-contain" />, label: "Airflow" },
        { icon: <Image src="/tracks/apachespark.svg" alt="Spark" width={20} height={20} className="w-full h-full object-contain" />, label: "Spark" },
        { icon: <Image src="/tracks/vector-db.png" alt="Vector DB" width={20} height={20} className="w-full h-full object-contain" />, label: "Vector DB" },
      ]
    },
    {
      title: "ServiceNow Architect Residency",
      desc: "Workflow systems + enterprise automation • ITSM\n+ platform roles",
      img: "/tracks/image-4.svg",
      href: "/servicenow-architect-residency",
      toolIcons: [
        { icon: <Image src="/tracks/servicenow.png" alt="ServiceNow" width={20} height={20} className="w-full h-full object-contain" />, label: "ServiceNow" },
        { icon: <Image src="/tracks/javascript.svg" alt="JavaScript" width={20} height={20} className="w-full h-full object-contain" />, label: "JavaScript" },
        { icon: <Image src="/tracks/openapiinitiative.svg" alt="REST APIs" width={20} height={20} className="w-full h-full object-contain" />, label: "REST APIs" },
        { icon: <Image src="/tracks/flow-designer.png" alt="Flow Designer" width={20} height={20} className="w-full h-full object-contain" />, label: "Flow Designer" },
        { icon: <Image src="/tracks/cmdb.png" alt="CMDB" width={20} height={20} className="w-full h-full object-contain" />, label: "CMDB" },
        { icon: <Image src="/tracks/virtual-agent.png" alt="Virtual Agent" width={20} height={20} className="w-full h-full object-contain" />, label: "Virtual Agent" },
      ]
    },
    {
      title: "Modern Enterprise Backend Residency (Java)",
      desc: "Spring Boot + microservices + scale • BFSI &\nbackend roles",
      img: "/tracks/image-5.svg",
      href: "/modern-enterprise-backend-residency",
      toolIcons: [
        { icon: <Image src="/tracks/java.png" alt="Java" width={20} height={20} className="w-full h-full object-contain" />, label: "Java" },
        { icon: <Image src="/tracks/springboot.svg" alt="Spring Boot" width={20} height={20} className="w-full h-full object-contain" />, label: "Spring Boot" },
        { icon: <Image src="/tracks/kafka.png" alt="Kafka" width={20} height={20} className="w-full h-full object-contain" />, label: "Kafka" },
        { icon: <Image src="/tracks/postgresql.svg" alt="PostgreSQL" width={20} height={20} className="w-full h-full object-contain" />, label: "PostgreSQL" },
        { icon: <Image src="/tracks/kubernetes.svg" alt="Microservices" width={20} height={20} className="w-full h-full object-contain" />, label: "Microservices" },
        { icon: <Image src="/tracks/redis.svg" alt="Redis" width={20} height={20} className="w-full h-full object-contain" />, label: "Redis" },
      ]
    },
    {
      title: "Apple Ecosystem Residency (iOS)",
      desc: "Native Swift + Apple lab ecosystem • Premium mobile roles",
      img: "/tracks/image-6.svg",
      href: "/apple-ecosystem-residency",
      toolIcons: [
        { icon: <Image src="/tracks/swift.svg" alt="Swift" width={20} height={20} className="w-full h-full object-contain" />, label: "Swift" },
        { icon: <Image src="/tracks/xcode.svg" alt="Xcode" width={20} height={20} className="w-full h-full object-contain" />, label: "Xcode" },
        { icon: <Image src="/tracks/ios-sdk.png" alt="iOS SDK" width={20} height={20} className="w-full h-full object-contain" />, label: "iOS SDK" },
        { icon: <Image src="/tracks/core-data.png" alt="Core Data" width={20} height={20} className="w-full h-full object-contain" />, label: "Core Data" },
        { icon: <Image src="/tracks/coreml.png" alt="Core ML" width={20} height={20} className="w-full h-full object-contain" />, label: "Core ML" },
        { icon: <Image src="/tracks/testflight.png" alt="TestFlight" width={20} height={20} className="w-full h-full object-contain" />, label: "TestFlight" },
      ]
    },
  ];

  const defaultHeading = (
    <h2 style={{
      fontFamily: "var(--font-orbitron), sans-serif",
      fontWeight: 700,
      fontSize: "clamp(32px, 5vw, 48px)",
      lineHeight: "120%",
      color: "#EAF0BD",
      margin: 0,
      textAlign: textAlign as any
    }}>
      Choose Your Track
    </h2>
  );

  const defaultByline = "(Or explore multiple, based on your clarity.)";

  return (
    <section
      id="track"
      className="w-full flex justify-center py-16 px-4 md:py-28 md:px-16 box-border"
      style={{ backgroundColor: "#181818" }}
    >
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-20">
        {/* Header */}
        <div
          className="w-full max-w-[1312px] flex flex-col gap-6"
          style={{ alignItems: alignment }}
        >
          {heading ? heading : defaultHeading}

          {(byline !== undefined) ? (
            byline && <p style={{
              fontFamily: "var(--font-roboto), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(16px, 2vw, 18px)",
              lineHeight: "150%",
              color: "#EAF0BD",
              textAlign: textAlign as any
            }}>
              {byline}
            </p>
          ) : (
            <p style={{
              fontFamily: "var(--font-roboto), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(16px, 2vw, 18px)",
              lineHeight: "150%",
              color: "#EAF0BD",
              textAlign: textAlign as any
            }}>
              {defaultByline}
            </p>
          )}

        </div>

        {/* Cards Container - Grid Layout */}
        <div className="w-full max-w-[1312px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {cardData.map((card, i) => (
            <TrackCard
              key={i}
              imageSrc={card.img}
              title={card.title}
              description={card.desc}
              href={card.href}
              toolIcons={card.toolIcons}
            />
          ))}
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row gap-6 mt-0 w-full justify-center items-center">
          {/* Button 1: Apply Now */}
          <button
            onClick={() => setIsAppModalOpen(true)}
            className="group w-full md:w-[181px] h-[54px] bg-[#D7F601] border border-[#D7F601] rounded-[4px] md:rounded-tl-[4px] md:rounded-tr-[20px] md:rounded-br-[4px] md:rounded-bl-[4px] flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 transition-opacity"
          >
            <StarIcon style={{ width: "28px", height: "30px", color: "#181818" }} />
            <span style={{
              fontFamily: "var(--font-orbitron), sans-serif",
              fontWeight: 900,
              fontSize: "16px",
              lineHeight: "150%",
              color: "#181818",
              whiteSpace: "nowrap"
            }}>
              Apply Now
            </span>
          </button>

          {/* Button 2: Download Brochure */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="group w-full md:w-[363px] h-[54px] bg-transparent border border-[#D7F601] rounded-[4px] md:rounded-tl-[4px] md:rounded-tr-[20px] md:rounded-br-[4px] md:rounded-bl-[4px] flex items-center justify-center gap-2 cursor-pointer hover:bg-[#D7F601]/10 transition-colors"
          >
            <StarIcon style={{ width: "28px", height: "30px", color: "#D7F601" }} />
            <span style={{
              fontFamily: "var(--font-orbitron), sans-serif",
              fontWeight: 900,
              fontSize: "16px",
              lineHeight: "150%",
              color: "#D7F601",
              whiteSpace: "nowrap"
            }}>
              Download Brochure
            </span>
          </button>
        </div>

      </div>
      <BrochureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ApplicationModal isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />
    </section>
  );
}