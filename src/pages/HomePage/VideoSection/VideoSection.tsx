import agricultureVideo from "src/assets/video.mp4";

export function VideoSection() {
  return (
    <section className="relative max-w-[1920px] mt-[60px] sm:px-[20px] sm:mt-[120px]">
      <video
        className="max-w-[1920px] w-full sm:h-[400px] sm:object-cover sm:rounded-[20px]"
        src={agricultureVideo}
        autoPlay
        muted
        loop
      ></video>
      <div className="max-w-[1200px] w-[62%] top-[-13%] left-[19%] px-[40px] absolute z-[2] justify-center grid grid-cols-[1fr_1fr_1fr_1fr] items-center text-lg bg-[#4BAF47] h-[158px] text-white rounded-[10px] mb-[-60px] xl:hidden">
        <p className="flex justify-center mr-[20px] whitespace-nowrap">
          Agriculture Products
        </p>
        <p className="flex justify-center mr-[20px] whitespace-nowrap">
          Projects Completed
        </p>
        <p className="flex justify-center mr-[20px] whitespace-nowrap">
          Satisfied Clients
        </p>
        <p className="flex justify-center">Experts Farmers</p>
      </div>
      <h2 className="text-[#ffffff] top-[-22%] text-[70px] absolute text-center mx-auto inset-x-0 font-bold xl:top-[19%] xl:text-[48px] lg:text-[34px] md:text-[24px] sm:top-[35%]">
        Agriculture Matters to the
        <br /> Future of
        <br /> Development
      </h2>
    </section>
  );
}

export default VideoSection;
