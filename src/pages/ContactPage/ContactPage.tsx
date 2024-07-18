import { ContactGrid } from "./ContactGrid";
import { ContactHeader } from "./ContactHeader";
import { ContactMap } from "./ContactMap";

export function ContactPage() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <ContactHeader />
      <ContactGrid />
      <ContactMap />
    </section>
  );
}

export default ContactPage;
