import Hero from "@/components/home/Hero";
import TechSlider from "@/components/home/TechSlider";
import MissionVision from "@/components/home/MissionVision";
import TeamPreview from "@/components/home/TeamPreview";
import ClientReviews from "@/components/home/ClientReviews";

export default function Home() {
  return (
    <>
      <Hero />

      <TechSlider />

      <MissionVision />

      <ClientReviews />

      <TeamPreview />
      
    </>
  );
}