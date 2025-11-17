import DestinationsTop from "@/components/destinations-top";
import Features from "@/components/features-1";
import HeroSection from "@/components/hero-section";
import StepsToTrip from "@/components/steps-to-trip";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-start ">
      <HeroSection/>
      <Features/>
      <DestinationsTop/>
      <StepsToTrip/>
      
    </div>
  );
}
