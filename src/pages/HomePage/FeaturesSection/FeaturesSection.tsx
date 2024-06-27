import fruitsImage from "src/assets/fruits-image.svg";
import organicServiceImage from "src/assets/organic-image.svg";
import plantImage from "src/assets/plant-image.svg";
import reformingImage from "src/assets/reforming-image.svg";
import ripeningImage from "src/assets/ripening-image.svg";
import technologyImage from "src/assets/technology-image.svg";
import tractorImage from "src/assets/tractor-image.svg";
import confirmIcon from "src/assets/confirm-icon.svg";

export function FeaturesSection() {
  return (
    <section className="relative w-[1240px] px-[40px] mt-[120px] xl:w-full sm:px-[20px]">
      <ul className="grid grid-cols-[400px_400px_400px] gap-x-[30px] absolute w-full z-[2] top-[-19%] right-[11px] xl:hidden ">
        <li className="bg-[#ffffff] text-center shadow-[-12px_0px_15px_#0000001f] rounded-[10px] flex flex-col items-center justify-center p-2.5">
          <p className="text-[20px] text-[#EEC044] py-[10px]">Feature 01</p>
          <h3 className="text-[24px] font-bold">
            We're using a<br /> new technology
          </h3>
          <img className="mb-5" src={technologyImage} alt="Technology Image" />
        </li>
        <li className="bg-[#ffffff] text-center shadow-[-12px_0px_15px_#0000001f] rounded-[10px] flex flex-col items-center justify-center p-2.5">
          <p className="text-[20px] text-[#EEC044] py-[10px]">Feature 02</p>
          <h3 className="text-[24px] font-bold">
            Good in smart
            <br /> organic services
          </h3>
          <img
            className="mb-5"
            src={organicServiceImage}
            alt="Organic Service Image"
          />
        </li>
        <li className="bg-[#ffffff] text-center shadow-[-12px_0px_15px_#0000001f] rounded-[10px] flex flex-col items-center justify-center p-2.5">
          <p className="text-[20px] text-[#EEC044] py-[10px]">Feature 03</p>
          <h3 className="text-[24px] font-bold">
            Reforming
            <br /> in the systems
          </h3>
          <img className="mb-5" src={reformingImage} alt="Reforming Image" />
        </li>
      </ul>
      <div className="pt-[106px] flex xl:pt-0">
        <section className="relative h-[600px]">
          <img
            className="xl:w-full xl:min-w-[340px] md:hidden"
            src={tractorImage}
            alt="Tractor Image"
          />
          <img
            className=" absolute rounded-[100%] border-[15px] border-solid border-white -left-11 -bottom-11 xl:hidden"
            src={plantImage}
            alt="Plant Image"
          />
        </section>
        <article className="px-[60px] py-0 sm:px-[10px]">
          <p className="text-[#EEC044] text-[24px]">Our Introductions</p>
          <h2 className="text-[48px] leading-[60px] font-bold mb-[33px]">
            Agriculture & Organic Product Farm
          </h2>
          <p className="text-[26px] text-[#4BAF47] font-bold">
            Agrios is the largest global organic farm.
          </p>
          <p className="text-[16px] text-[#878680] mb-[40px]">
            There are many variations of passages of lorem ipsum available but
            the majority have suffered alteration in some form by injected humor
            or random word which don’t look even.
          </p>
          <ul className="flex mb-[35px]">
            <li className="flex items-center sm:mr-[10px]">
              <img className="mr-2.5" src={fruitsImage} alt="Fruits Icon" />
              <h4 className="text-[20px] font-bold leading-[20px]">
                Growing fruits vegetables
              </h4>
            </li>
            <li className="flex items-center">
              <img className="mr-2.5" src={ripeningImage} alt="Ripening Icon" />
              <h4 className="text-[20px] font-bold leading-[20px]">
                Tips for ripening your fruits
              </h4>
            </li>
          </ul>
          <p className="flex text-[16px] font-bold">
            <img className="mr-2.5" src={confirmIcon} alt="Confirm Image" />
            Lorem Ipsum is not simply random text.
          </p>
          <p className="flex text-[16px] font-bold">
            <img className="mr-2.5" src={confirmIcon} alt="Confirm Image" />
            Making this the first true generator on the internet.
          </p>
          <button className="text-[#ffffff] font-bold bg-[#4BAF47] w-fit mt-[5.5rem] px-[50px] py-4 rounded-[10px] hover:bg-[#54c950] sm:w-full sm:mt-[3.5rem]">
            Discover More
          </button>
        </article>
      </div>
    </section>
  );
}

export default FeaturesSection;
