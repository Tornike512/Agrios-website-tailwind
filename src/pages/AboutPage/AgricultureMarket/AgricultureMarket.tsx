import palmsImage from "/src/assets/palms-image.svg";
import lightGreenCorrectIcon from "/src/assets/lightgreen-correct-icon.svg";
import smillingPersonImage from "/src/assets/smilling-person-image.svg";

export function AgricultureMarket() {
  return (
    <section className="w-full max-w-[1200px] flex mb-[120px]">
      <figure className="relative">
        <img className="mr-[135px]" src={palmsImage} alt="Palms Image" />
        <img
          className="absolute left-[-131px] rounded-[10px] bottom-[0px]"
          src={smillingPersonImage}
          alt="Smiling Person Image"
        />
      </figure>
      <aside>
        <h5 className="text-[#EEC044] text-[24px]">Get to Know Us</h5>
        <h2 className="flex justify-center text-[48px] text-[#1F1E17] leading-[50px] font-bold mb-[30px] sm:text-[36px]">
          The Best Agriculture Market
        </h2>
        <p className="text-[#4BAF47] text-[20px] font-bold mb-[30px]">
          There are many variations of passa of lorem available, but the
          majority have suffered alteration.
        </p>
        <p className="text-[16px] text-[#878680] mb-[40px]">
          There are many variations of passages of lorem ipsum available but the
          majority have suffered alteration in some form by injected humor or
          random word which don’t look even.
        </p>
        <figure className="mb-[33px]">
          <figcaption className="flex font-bold text-[18px]">
            <img
              className="mr-[8px]"
              src={lightGreenCorrectIcon}
              alt="lightGreen Correct Icon"
            />
            Suspe ndisse suscipit sagittis leo
          </figcaption>
          <figcaption className="flex font-bold text-[18px]">
            <img
              className="mr-[8px]"
              src={lightGreenCorrectIcon}
              alt="lightGreen Correct Icon"
            />
            Entum estibulum disgnissim posuere
          </figcaption>
          <figcaption className="flex font-bold text-[18px]">
            <img
              className="mr-[8px]"
              src={lightGreenCorrectIcon}
              alt="lightGreen Correct Icon"
            />
            Lorem Ipsum on the tend to repeat
          </figcaption>
        </figure>
        <button className="text-[#ffffff] font-bold bg-[#4BAF47] w-fit mt-[63px] px-[50px] py-4 rounded-[10px] hover:bg-[#54c950] sm:w-full sm:mt-[3.5rem]">
          Discover More
        </button>
      </aside>
    </section>
  );
}

export default AgricultureMarket;
