import { HeaderSection } from "./HeaderSection";
import { FeaturesSection } from "./FeaturesSection";
import { OfferSection } from "./OfferSection";
import { VideoSection } from "./VideoSection";
import { ExploreProjects } from "./ExploreProjects";
import { ReviewsSection } from "./ReviewsSection";

export function HomePage() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <HeaderSection />
      <FeaturesSection />
      <OfferSection />
      <VideoSection />
      <ExploreProjects />
      <ReviewsSection />
    </div>
  );
}

export default HomePage;
