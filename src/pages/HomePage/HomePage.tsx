import { HeaderSection } from "./HeaderSection";
import { FeaturesSection } from "./FeaturesSection";
import { OfferSection } from "./OfferSection";
import { VideoSection } from "./VideoSection";
import { ExploreProjects } from "./ExploreProjects";
import { ReviewsSection } from "./ReviewsSection";
import { ChooseAgrios } from "./ChooseAgrios";
import { NewsSection } from "./NewsSection";

export function HomePage() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <HeaderSection />
      <FeaturesSection />
      <OfferSection />
      <VideoSection />
      <ExploreProjects />
      <ReviewsSection />
      <ChooseAgrios />
      <NewsSection />
    </main>
  );
}

export default HomePage;
