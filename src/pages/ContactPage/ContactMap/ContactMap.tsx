import mapImage from "src/assets/map-image.svg";

export function ContactMap() {
  return (
    <section className="w-full max-w-[1200px] mb-[120px] flex justify-center">
      <img className="" src={mapImage} alt="Map Image" />
      <form className="p-[100px] bg-[#F4F4F3]">
        <h5 className="text-[#EEC044] text-[24px]">Contact us</h5>
        <h2 className="text-[#1F1E17] text-[48px] font-bold mb-[30px]">
          Write a Message
        </h2>
        <div className="mb-[20px] w-full">
          <input
            className="mr-[20px] p-[12px] rounded-[10px]"
            type="text"
            placeholder="Name"
          />
          <input
            className="p-[12px] rounded-[10px]"
            type="email"
            placeholder="Email Address"
          />
        </div>
        <input
          className="w-full pl-[30px] pt-[15px] pr-[30px] pb-[100px] rounded-[10px] mb-[20px]"
          type="text"
          placeholder="Write a Message"
        />
        <button className="bg-[#4BAF47] text-[#ffffff] p-[17px] rounded-[10px] rounded-br-[10px] hover:bg-[#54c950]">
          Send a Message
        </button>
      </form>
    </section>
  );
}

export default ContactMap;
