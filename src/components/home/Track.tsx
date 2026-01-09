"use client";

import React, { useState } from 'react';
import Image from "next/image";
import StarIcon from "@/components/icons/Star";
import Link from "next/link";
import BrochureModal from "./BrochureModal";
import ApplicationModal from "./ApplicationModal";

import {
  SalesforceIcon, ApexIcon, LwcIcon, VsCodeIcon, GitHubIcon, PostmanIcon, JiraIcon, AgentforceIcon,
  KubernetesIcon, DockerIcon, PythonIcon, TerraformIcon, AwsIcon,
  DatabaseIcon, ServiceNowIcon, JavaScriptIcon,
  JavaIcon, SpringIcon, KafkaIcon, SwiftIcon, XcodeIcon, AppleIcon
} from "@/components/common/ToolIcons";

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
            letterSpacing: "-0.01em"
          }}>
          {description}
        </p>

        {/* Tool Icons Section */}
        {toolIcons && (
          <div className="grid grid-cols-2 gap-y-3 gap-x-2 mt-4 w-full">
            {toolIcons.map((tool, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-5 h-5 flex-shrink-0">
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
        { icon: <SalesforceIcon className="w-full h-full" />, label: "Salesforce Cloud" },
        { icon: <ApexIcon className="w-full h-full" />, label: "Apex" },
        { icon: <LwcIcon className="w-full h-full" />, label: "LWC" },
        { icon: <VsCodeIcon className="w-full h-full" />, label: "VS Code" },
        { icon: <div className="flex gap-[-4px]"><GitHubIcon className="w-full h-full" /><PostmanIcon className="w-full h-full ml-1" /></div>, label: "Git + Postman" },
        { icon: <div className="flex gap-[-4px]"><JiraIcon className="w-full h-full" /><AgentforceIcon className="w-full h-full ml-1" /></div>, label: "Jira + Agentforce" },
      ]
    },
    {
      title: "AI Infrastructure & Cloud Native Residency",
      desc: "Cloud + Kubernetes + LLMOps • Infra, SRE,\nplatform roles",
      img: "/ChooseYourTrack/image-2.svg",
      href: "/ai-infrastructure-cloud-native-residency",
      toolIcons: [
        { icon: <KubernetesIcon className="w-full h-full" />, label: "Kubernetes" },
        { icon: <DockerIcon className="w-full h-full" />, label: "Docker" },
        { icon: <PythonIcon className="w-full h-full" />, label: "Python/Go" },
        { icon: <TerraformIcon className="w-full h-full" />, label: "Terraform" },
        { icon: <AwsIcon className="w-full h-full" />, label: "AWS/GCP" },
        { icon: <div className="flex gap-[-4px]"><GitHubIcon className="w-full h-full" /></div>, label: "CI/CD (Git)" },
      ]
    },
    {
      title: "Enterprise Data Platform Residency",
      desc: "Modern data stack + vector pipelines • Data\nengineering & AI data roles",
      img: "/ChooseYourTrack/image-3.svg",
      href: "/enterprise-data-platform-residency",
      toolIcons: [
        { icon: <PythonIcon className="w-full h-full" />, label: "Python" },
        { icon: <DatabaseIcon className="w-full h-full" />, label: "SQL/NoSQL" },
        { icon: <DatabaseIcon className="w-full h-full" style={{ color: '#29B5E8' }} />, label: "Snowflake" }, // Simulating Snowflake
        { icon: <DatabaseIcon className="w-full h-full" style={{ color: '#00C7B7' }} />, label: "dbt/Airflow" },
        { icon: <JavaScriptIcon className="w-full h-full" />, label: "Spark" }, // Placeholder
        { icon: <DatabaseIcon className="w-full h-full" style={{ color: '#FF7000' }} />, label: "Vector DB" },
      ]
    },
    {
      title: "ServiceNow Architect Residency",
      desc: "Workflow systems + enterprise automation • ITSM\n+ platform roles",
      img: "/ChooseYourTrack/image-4.svg",
      href: "/servicenow-architect-residency",
      toolIcons: [
        { icon: <ServiceNowIcon className="w-full h-full" />, label: "ServiceNow" },
        { icon: <JavaScriptIcon className="w-full h-full" />, label: "JavaScript" },
        { icon: <PostmanIcon className="w-full h-full" />, label: "REST APIs" },
        { icon: <div className="flex gap-[-4px]"><JiraIcon className="w-full h-full" /></div>, label: "Flow Designer" }, // Using Jira as placeholder for Flow
        { icon: <DatabaseIcon className="w-full h-full" />, label: "CMDB" },
        { icon: <div className="flex gap-[-4px]"><AgentforceIcon className="w-full h-full" /></div>, label: "Virtual Agent" },
      ]
    },
    {
      title: "Modern Enterprise Backend Residency (Java)",
      desc: "Spring Boot + microservices + scale • BFSI &\nbackend roles",
      img: "/ChooseYourTrack/image-5.svg",
      href: "/modern-enterprise-backend-residency",
      toolIcons: [
        { icon: <JavaIcon className="w-full h-full" />, label: "Java" },
        { icon: <SpringIcon className="w-full h-full" />, label: "Spring Boot" },
        { icon: <KafkaIcon className="w-full h-full" />, label: "Kafka" },
        { icon: <DatabaseIcon className="w-full h-full" />, label: "PostgreSQL" },
        { icon: <DockerIcon className="w-full h-full" />, label: "Microservices" },
        { icon: <GitHubIcon className="w-full h-full" />, label: "Redis" }, // Placeholder
      ]
    },
    {
      title: "Apple Ecosystem Residency (iOS)",
      desc: "Native Swift + Apple lab ecosystem • Premium mobile roles",
      img: "/ChooseYourTrack/image-6.svg",
      href: "/apple-ecosystem-residency",
      toolIcons: [
        { icon: <SwiftIcon className="w-full h-full" />, label: "Swift" },
        { icon: <XcodeIcon className="w-full h-full" />, label: "Xcode" },
        { icon: <AppleIcon className="w-full h-full" />, label: "iOS SDK" },
        { icon: <div className="flex gap-[-4px]"><SalesforceIcon className="w-full h-full" /></div>, label: "Core Data" }, // Placeholder
        { icon: <AgentforceIcon className="w-full h-full" />, label: "Core ML" },
        { icon: <GitHubIcon className="w-full h-full" />, label: "TestFlight" },
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