import contactHeader from "src/assets/contact-header.svg";

export function ContactHeader() {
  return (
    <figure className="mb-[120px]">
      <img
        className="w-full lg:[400px] object-cover"
        src={contactHeader}
        alt="Contact Header Image"
      />
    </figure>
  );
}

export default ContactHeader;
