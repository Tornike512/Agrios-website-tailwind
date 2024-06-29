import ecoFriendlyVideo from "src/assets/eco-friendly-video.mp4";

export function AboutVideo() {
  return (
    <section className="w-full max-w-[1920px] relative">
      <h2 className="w-full text-[#ffffff] font-bold text-[60px] absolute bottom-2/4 text-center lg:text-[45px] md:text-[36px] md:bottom-[55%] sm:text-[28px] sm:bottom-[63%]">
        ECO-Friendly Products can
        <br /> be Made from Scratch
      </h2>
      <video
        className="w-full max-w-[1920px]"
        src={ecoFriendlyVideo}
        loop
        autoPlay
        muted
      ></video>
      <div className="bg-[#1F1E17] h-[184px] w-full grid grid-cols-[1fr_1fr_1fr_1fr] lg:grid-cols-[1fr_1fr] sm:grid-cols-[1fr] sm:mb-[10px]">
        <p className="text-[#A5A49A] text-[18px] flex items-center justify-center">
          Agriculture Products
        </p>
        <p className="text-[#A5A49A] text-[18px] flex items-center justify-center">
          Projects Completed
        </p>
        <p className="text-[#A5A49A] text-[18px] flex items-center justify-center">
          Satisfied Clients
        </p>
        <p className="text-[#A5A49A] text-[18px] flex items-center justify-center">
          Experts Farmers
        </p>
      </div>
    </section>
  );
}

export default AboutVideo;
