import mapImage from "src/assets/map-image.svg";

export function ContactMap() {
  return (
    <section className="w-full max-w-[1200px] mb-[120px] px-[40px] flex justify-center xl:flex-col">
      <img
        className="w-full object-cover xl:mb-[30px]"
        src={mapImage}
        alt="Map Image"
      />
      <form className="w-full p-[100px] bg-[#F4F4F3] lg:p-[40px]">
        <h5 className="text-[#EEC044] text-[24px] lg:flex lg:items-center lg:justify-center">
          Contact us
        </h5>
        <h2 className="text-[#1F1E17] text-[48px] font-bold mb-[30px] lg:flex lg:justify-center lg:items-center lg:whitespace-nowrap sm:text-[24px]">
          Write a Message
        </h2>
        <div className="mb-[20px] w-full flex lg:flex-col">
          <input
            className="mr-[20px] p-[12px] rounded-[10px] lg:w-full lg:mr-0 lg:mb-[20px]"
            type="text"
            placeholder="Name"
          />
          <input
            className="p-[12px] rounded-[10px] lg:w-full lg:mr-0"
            type="email"
            placeholder="Email Address"
          />
        </div>
        <input
          className="w-full pl-[30px] pt-[15px] pr-[30px] pb-[100px] rounded-[10px] mb-[20px]"
          type="text"
          placeholder="Write a Message"
        />
        <button className="bg-[#4BAF47] text-[#ffffff] p-[17px] rounded-[10px] rounded-br-[10px] hover:bg-[#54c950] lg:w-full">
          Send a Message
        </button>
      </form>
    </section>
  );
}

export default ContactMap;
