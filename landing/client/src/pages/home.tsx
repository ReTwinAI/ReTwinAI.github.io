import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ValuePropositions from "@/components/value-propositions";
import SolutionProcess from "@/components/solution-process";
import Testimonials from "@/components/testimonials";
import TeamSection from "@/components/team-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ValuePropositions />
      <SolutionProcess />
      <Testimonials />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
