import aboutImage from "/src/assets/about-page-main-image.svg";

export function AboutSection() {
  return (
    <figure className="flex items-center justify-center mb-[120px]">
      <img
        className="w-full max-w-[1920px] lg:h-[400px] lg:object-cover"
        src={aboutImage}
        alt="About Image"
      />
    </figure>
  );
}

export default AboutSection;
