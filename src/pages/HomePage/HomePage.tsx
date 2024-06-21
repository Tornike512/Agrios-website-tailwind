import { HeaderSection } from "./HeaderSection";
import { FeaturesSection } from "./FeaturesSection";
import { OfferSection } from "./OfferSection";
import { FutureSection } from "./FutureSection";

export function HomePage() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <HeaderSection />
      <FeaturesSection />
      <OfferSection />
      <FutureSection />
    </div>
  );
}

export default HomePage;
