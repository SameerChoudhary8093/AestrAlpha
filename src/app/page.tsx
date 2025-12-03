import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import AboutSection from "@/components/home/AboutSection";
import AdvantagesSection from "@/components/home/AdvantagesSection";
import CampusAmbassador from "@/components/home/Ambassador";
import BoardMembers from "@/components/home/BoardMembers";
import Gallery from "@/components/home/Gallery";
import HeroSection from "@/components/home/HeroSection";
import LearningJourney from "@/components/home/LearningJourney";
import Track from "@/components/home/Track";
import WorkShop from "@/components/home/WorkShop";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AdvantagesSection />
      <LearningJourney />
      <WorkShop />
      <Track />
      <CampusAmbassador />
      <BoardMembers />
      <Gallery />
      <Footer />
    </>
  );
}
