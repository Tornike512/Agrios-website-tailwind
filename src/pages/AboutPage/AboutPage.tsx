import { AboutSection } from "./AboutSection";
import { AgricultureMarket } from "./AgricultureMarket";

export function AboutPage() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <AboutSection />
      <AgricultureMarket />
    </section>
  );
}

export default AboutPage;
