import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import AboutSection from "@/components/home/AboutSection";

import CampusAmbassador from "@/components/home/Ambassador";
import BoardMembers from "@/components/home/BoardMembers";
import InsideTheResidency from "@/components/home/InsideTheResidency";
import TicketHeroSection from "@/components/ticket/TicketHeroSection";
import EventOverview from "@/components/ticket/EventOverview";
import AISummitSection from "@/components/ticket/AISummitSection";
import LearningJourney from "@/components/home/LearningJourney";
import SpeakerSection from "@/components/home/SpeakerSection";
import Track from "@/components/home/Track";
import WorkShop from "@/components/home/WorkShop";
import Agenda from "@/components/home/Agenda";
import AI_Summit_CTA from "@/components/ticket/AI_Summit_CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <TicketHeroSection />
      <EventOverview />
      <AISummitSection />
      <Agenda />
      <AI_Summit_CTA />
      <InsideTheResidency />

      <Footer />
    </>
  );
}

