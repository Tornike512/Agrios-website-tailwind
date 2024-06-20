import { HeaderSection } from "./HeaderSection";
import { FeaturesSection } from "../FeaturesSection";

export function HomePage() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <HeaderSection />
      <FeaturesSection />
    </div>
  );
}

export default HomePage;
