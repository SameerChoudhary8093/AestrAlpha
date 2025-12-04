import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import AboutSection from "@/components/home/AboutSection";
import AdvantagesSection from "@/components/home/AdvantagesSection";
import CampusAmbassador from "@/components/home/Ambassador";
import BoardMembers from "@/components/home/BoardMembers";
import Gallery from "@/components/home/Gallery";
import TicketHeroSection from "@/components/ticket/TicketHeroSection";
import LearningJourney from "@/components/home/LearningJourney";
import SpeakerSection from "@/components/home/SpeakerSection";
import Track from "@/components/home/Track";
import WorkShop from "@/components/home/WorkShop";
import Agenda from "@/components/home/Agenda";
export default function Home() {
  return (
    <>
      <Navbar />
      <TicketHeroSection />
      <Track
        heading={
          <>
            WORKSHOPS TO
            <br />
            BLOW YOUR MIND
          </>
        }
        byline=""
        alignDesktop="start"
      />
      <SpeakerSection /> 
      <WorkShop
        heading={
          <>
           WORKSHOP HIGHLIGHT
          </>
        }
        description={`Dive deeper into the Aestr Alpha experience with premium sessions, networking, and exclusive content curated for attendees who want to go further.`}
        date={
          <>
            Jan 12, 2025, 2:00 PM &nbsp;|&nbsp; Main Workshop Arena
          </>
        }
      />
      <Agenda />
      <CampusAmbassador />
      <Gallery backgroundColor="bg-[#5b1dd6]" />
      
      <Footer />
    </>
  );
}
