import farmingImage from "src/assets/farming-image.svg";
import tomatoFarmingImage from "src/assets/tomato-farming-image.svg";
import hayImage from "src/assets/hay-image.svg";

export function ServicesSection() {
  return (
    <section className="w-full max-w-[1200px] mb-[120px] flex px-[40px] lg:block">
      <aside className="bg-[#54c654] h-fit rounded-[10px] px-[50px] py-[30px] mr-[30px] flex flex-col justify-center text-center lg:mr-[0] lg:mb-[30px]">
        <h3 className="text-[#ffffff] text-[24px] font-bold mb-[33px]">
          Need Help?
        </h3>
        <p className="text-[#C3F5C1] text-[16px] mb-[15px]">
          Need assistance with filling out a form? Call our corporate office,
          and we will connect you with a team member for help.
        </p>
        <p className="text-[#ffffff] text-[24px] whitespace-nowrap">
          +92 (000) -9630
        </p>
        <button className="mt-[33px] w-full text-[14px] bg-[#EEC044] font-bold px-[50px] py-4 rounded-[10px] hover:bg-[#FFD972] text-[#ffffff] whitespace-nowrap md:w-full ">
          Start Shopping Now
        </button>
      </aside>
      <article>
        <img
          className="mb-[20px] w-full"
          src={farmingImage}
          alt="Agriculture field"
        />
        <h2 className="text-[40px] font-bold mb-[20px] lg:flex lg:justify-center">
          Agriculture Products
        </h2>
        <p className="text-[#878680] text-[16px] mb-[33px] lg:text-center">
          Lorem ipsum is simply free text used by copy typing and refreshing.
          Neque porro est qui dolorem ipsum quia quaed inventore veritatis et
          quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus
          quis enim var sed efficitur turpis gilla sed sit amet finibus eros.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s.
        </p>
        <p className="text-[#878680] text-[16px] mb-[33px] lg:text-center">
          It has survived not only five centuries. Lorem Ipsum is simply dummy
          text of the new design, printing, and type setting. When an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book, it has survived not only five centuries but also the leap into
          electronic typesetting.
        </p>
        <div className="flex mb-[50px] lg:block">
          <figure className="px-[10px] mr-[30px] lg:mr-[0]">
            <img className="mb-[14px] w-full" src={hayImage} alt="Hay bales" />
            <h3 className="text-[30px] font-bold mb-[10px] lg:flex lg:justify-center">
              Our Benefits
            </h3>
            <figcaption className="text-[#878680] text-[16px] lg:flex lg:text-center lg:mb-[20px]">
              It has survived not only five centuries. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum.
            </figcaption>
          </figure>
          <figure className="px-[10px] mr-[30px] lg:mr-[0]">
            <img
              className="mb-[14px] w-full"
              src={tomatoFarmingImage}
              alt="Tomato farming"
            />
            <figcaption className="text-[16px] font-bold leading-[38px] lg:text-center">
              Nsectetur cing elit. Suspendisse suscipit sagittis leo. Entum
              estibulum dignissim posuere. Lorem Ipsum on the tend to repeat.
            </figcaption>
          </figure>
        </div>
        <div className="bg-[#F8F7F0] flex justify-between items-center p-[20px] rounded-[10px] mb-[10px] cursor-pointer">
          <h2 className="text-[20px] font-bold md:text-center">
            World’s Hottest Destinations for Vegans
          </h2>
          <div className="bg-[#C5CE38] rounded-[10px] h-[60px] w-[60px] md:hidden"></div>
        </div>
        <div className="bg-[#F8F7F0] flex justify-between items-center p-[20px] rounded-[10px] mb-[22px] cursor-pointer">
          <h2 className="text-[20px] font-bold md:text-center">
            Let’s Grow Naturally and Live Naturally
          </h2>
          <div className="bg-[#C5CE38] rounded-[10px] h-[60px] w-[60px] md:hidden"></div>
        </div>
        <p className="text-[#878680] text-[16px] pl-[50px] mb-[22px] lg:pl-[0] lg:text-center">
          Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum
          leo ligula, molestie ullamcorper vulputate, vitae sodales commodo
          nisl. Nulla facilisi. Pellentesque est metus, condimentum vitae.
        </p>
        <div className="bg-[#F8F7F0] flex justify-between items-center p-[20px] rounded-[10px] mb-[22px] cursor-pointer">
          <h2 className="text-[20px] font-bold md:text-center">
            Best Vegetables for Your Healthy Hair
          </h2>
          <div className="bg-[#C5CE38] rounded-[10px] h-[60px] w-[60px] md:hidden"></div>
        </div>
      </article>
    </section>
  );
}

export default ServicesSection;
