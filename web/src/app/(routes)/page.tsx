import FloatingIconsBackground from "@/components/shared/FloatingIconsBackground";
import BannerSection from "@/features/home/BannerSection";
import HeroSection from "@/features/home/HeroSection";
import StorySection from "@/features/home/StorySection";
import TrailerSection from "@/features/home/TrailerSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <div className="relative isolate">
        <FloatingIconsBackground />
        <div className="relative z-10">
          <StorySection />
        </div>
      </div>

      <TrailerSection />

      <BannerSection />
    </>
  );
}
