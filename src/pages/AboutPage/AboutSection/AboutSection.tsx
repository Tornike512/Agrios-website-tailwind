import aboutImage from "/src/assets/about-page-main-image.svg";

export function AboutSection() {
  return (
    <figure className="flex items-center justify-center">
      <img
        className="w-full max-w-[1920px]"
        src={aboutImage}
        alt="About Image"
      />
    </figure>
  );
}

export default AboutSection;
