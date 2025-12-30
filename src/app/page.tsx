import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import AboutSection from "@/components/home/AboutSection";
import AdvantagesSection from "@/components/home/AdvantagesSection";
import WorkSimulationSection from "@/components/home/WorkSimulationSection";
import OperatingSystemSection from "@/components/home/OperatingSystemSection";
import CampusAmbassador from "@/components/home/Ambassador";
import BoardMembers from "@/components/home/BoardMembers";
import HeroSection from "@/components/home/HeroSection";
import LearningJourney from "@/components/home/LearningJourney";
import Track from "@/components/home/Track";
import WorkShop from "@/components/home/WorkShop";
import InsideTheResidency from "@/components/home/InsideTheResidency";
import InvestmentSection from "@/components/home/InvestmentSection";
import FAQSection from "@/components/home/faq/FAQSection";
import FloatingForm from "@/components/home/FloatingForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FloatingForm />
      <AboutSection />
      {/* <AdvantagesSection /> */}
      <WorkSimulationSection />
      <LearningJourney />
      <OperatingSystemSection />
      <WorkShop />
      <Track />
      <CampusAmbassador />
      <InvestmentSection />
      <BoardMembers />
      <InsideTheResidency />
      <FAQSection />
      <Footer />
    </>
  );
}
