import headerMainImage from "src/assets/header-main-image.svg";

export function HeaderSection() {
  return (
    <section className="max-w-[1920px] w-full justify-center flex items-center">
      <img
        className="max-w-[1920px] w-full relative sm:h-[312px] object-cover"
        src={headerMainImage}
        alt="Header Section Main Image"
      />
      <div className="w-full max-w-[1200px] flex flex-col justify-end absolute text-[#ffffff] px-[20px] sm:items-center">
        <p className="text-[16px] md:text-[12px]">WELCOME TO AGRIOS FARMING</p>
        <h1 className="text-[120px] leading-[120px] lg:leading-[64px] lg:text-[64px] md:text-[36px] md:leading-[40px]">
          Agriculture &<br /> Eco Farming
        </h1>
        <p className="text-[16px] mt-[20px] sm:hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus,
          <br /> luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className="bg-[#4BAF47] font-bold w-fit mt-10 px-[50px] py-4 rounded-[10px] hover:bg-[#54c950] md:mt-3 md:px-[25px] sm:w-full sm:mt-[45px]">
          Discover More
        </button>
      </div>
    </section>
  );
}

export default HeaderSection;
