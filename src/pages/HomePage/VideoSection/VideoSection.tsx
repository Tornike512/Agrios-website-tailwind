import agricultureVideo from "src/assets/agriculture-video.mp4";
import startVideoIcon from "src/assets/start-video-icon.svg";

export function VideoSection() {
  return (
    <section className="relative">
      <div className="w-full max-w-[1200px] left-[20%] absolute top-[7%] justify-center grid grid-cols-[1fr_1fr_1fr_1fr] items-center text-lg bg-[#4BAF47] h-[158px] text-white rounded-[10px]">
        <p className="flex justify-center">Agriculture Products</p>
        <p className="flex justify-center">Projects Completed</p>
        <p className="flex justify-center">Satisfied Clients</p>
        <p className="flex justify-center">Experts Farmers</p>
      </div>
      <video
        className="max-w-[1920px] w-full mt-[130px]"
        src={agricultureVideo}
        controls
      ></video>
      <img
        className="cursor-pointer absolute right-[417px] bottom-[42%]"
        src={startVideoIcon}
        alt="Start Video Icon"
      />
      <h2 className="text-[#ffffff] text-[70px] absolute left-[368px] absolute leading-[77px] font-[bold] bottom-[132px]">
        Agriculture
        <br /> Matters to the
        <br /> Future of
        <br /> Development
      </h2>
    </section>
  );
}

export default VideoSection;
