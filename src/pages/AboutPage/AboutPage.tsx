import { AboutSection } from "./AboutSection";
import { AboutVideo } from "./AboutVideo";
import { AgricultureMarket } from "./AgricultureMarket";

export function AboutPage() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <AboutSection />
      <AgricultureMarket />
      <AboutVideo />
    </section>
  );
}

export default AboutPage;
