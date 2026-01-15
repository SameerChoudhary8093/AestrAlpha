import dynamic from 'next/dynamic';
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/home/HeroSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import MentorSection from "@/components/home/MentorSection";
import AboutSection from "@/components/home/AboutSection";
import WhatsAppButton from "@/components/common/WhatsAppButton";

// Lazy load below-the-fold components
const WorkSimulationSection = dynamic(() => import("@/components/home/WorkSimulationSection"));
const AdvantagesSection = dynamic(() => import("@/components/home/AdvantagesSection"));
const OperatingSystemSection = dynamic(() => import("@/components/home/OperatingSystemSection"));
const LearningJourney = dynamic(() => import("@/components/home/LearningJourney"));
const WorkShop = dynamic(() => import("@/components/home/WorkShop"));
const Track = dynamic(() => import("@/components/home/Track"));
const CampusAmbassador = dynamic(() => import("@/components/home/Ambassador"));
const InvestmentSection = dynamic(() => import("@/components/home/InvestmentSection"));
const BoardMembers = dynamic(() => import("@/components/home/BoardMembers"));
const InsideTheResidency = dynamic(() => import("@/components/home/InsideTheResidency"));
const FAQSection = dynamic(() => import("@/components/home/faq/FAQSection"));

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <HeroSection />

      <ExperienceSection />
      {/* <AdvantagesSection /> */}
      <WorkSimulationSection />
      <LearningJourney />
      <OperatingSystemSection />
      <WorkShop />
      <Track />
      <AboutSection />
      <InvestmentSection />
      <CampusAmbassador />
      <BoardMembers />
      <InsideTheResidency />
      <FAQSection />
      <Footer />
    </>
  );
}
