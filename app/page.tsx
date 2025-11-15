import DestinationsTop from "@/components/destinations-top";
import Features from "@/components/features-1";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-start ">
      <HeroSection/>
      <Features/>
      <DestinationsTop/>
      
    </div>
  );
}
