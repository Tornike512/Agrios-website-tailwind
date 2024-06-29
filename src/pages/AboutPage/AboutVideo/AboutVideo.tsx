import ecoFriendlyVideo from "src/assets/eco-friendly-video.mp4";

export function AboutVideo() {
  return (
    <section className="w-full max-w-[1920px] relative">
      <h2 className="text-[#ffffff] font-bold text-[60px] absolute left-[30%] bottom-2/4 text-center">
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
      <div className="bg-[#1F1E17] h-[184px] w-full grid grid-cols-[1fr_1fr_1fr_1fr]">
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
