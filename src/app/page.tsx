
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/home/HeroSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import AboutSection from "@/components/home/AboutSection";
import WhatsAppButton from "@/components/common/WhatsAppButton";

import WorkSimulationSection from "@/components/home/WorkSimulationSection";
import OperatingSystemSection from "@/components/home/OperatingSystemSection";
import LearningJourney from "@/components/home/LearningJourney";
import WorkShop from "@/components/home/WorkShop";
import Track from "@/components/home/Track";
import CampusAmbassador from "@/components/home/Ambassador";
import InvestmentSection from "@/components/home/InvestmentSection";
import BoardMembers from "@/components/home/BoardMembers";
import InsideTheResidency from "@/components/home/InsideTheResidency";
import FAQSection from "@/components/home/faq/FAQSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <HeroSection />

      <ExperienceSection />
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
