import { AboutSection } from "./AboutSection";
import { AboutVideo } from "./AboutVideo";
import { AgricultureMarket } from "./AgricultureMarket";
import { OurFarmersSection } from "./OurFarmersSection";
import { WhatTheySaySection } from "./WhatTheySaySection";

export function AboutPage() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <AboutSection />
      <AgricultureMarket />
      <AboutVideo />
      <WhatTheySaySection />
      <OurFarmersSection />
    </main>
  );
}

export default AboutPage;
