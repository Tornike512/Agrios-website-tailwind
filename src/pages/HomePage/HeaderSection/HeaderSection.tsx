import headerMainImage from "src/assets/header-main-image.svg";

export function HeaderSection() {
  return (
    <section className="max-w-[1200px] w-full">
      <img
        className="max-w-[1920px] w-full absolute -translate-x-2/4 translate-y-0 z-[-1] left-2/4"
        src={headerMainImage}
        alt="Header Section Main Image"
      />
      <div className="w-full max-w-[1200px] h-[600px] flex flex-col justify-end text-[#ffffff]">
        <p className="text-[16px]">WELCOME TO AGRIOS FARMING</p>
        <h1 className="text-[120px] leading-[120px]">
          Agriculture &<br /> Eco Farming
        </h1>
        <p className="text-[16px] mt-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus,
          <br /> luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className="bg-[#4BAF47] font-bold w-fit mt-10 px-[50px] py-4 rounded-[10px] hover:bg-[#54c950]">
          Discover More
        </button>
      </div>
    </section>
  );
}

export default HeaderSection;
