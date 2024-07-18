import { ContactGrid } from "./ContactGrid";
import { ContactHeader } from "./ContactHeader";

export function ContactPage() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <ContactHeader />
      <ContactGrid />
    </section>
  );
}

export default ContactPage;
