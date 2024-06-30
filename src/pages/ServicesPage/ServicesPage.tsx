import { ServicesHeader } from "./ServicesHeader";
import { ServicesSection } from "./ServicesSection";

export function ServicesPage() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <ServicesHeader />
      <ServicesSection />
    </main>
  );
}

export default ServicesPage;
