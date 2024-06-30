import servicesHeaderImage from "src/assets/services-header.svg";

export function ServicesHeader() {
  return (
    <figure className="mb-[120px]">
      <img
        className="w-full"
        src={servicesHeaderImage}
        alt="Services Header Image"
      />
    </figure>
  );
}

export default ServicesHeader;
