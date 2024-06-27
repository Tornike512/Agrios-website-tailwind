import chooseAgriosImage from "src/assets/choose-agrios-main-image.svg";
import greenCorrectIcon from "src/assets/green-correct-icon.svg";
import lightGreenCorrectIcon from "src/assets/light-green-correct-icon.svg";
import yellowCorrectIcon from "src/assets/yellow-correct-icon.svg";

export function ChooseAgrios() {
  return (
    <section className="my-[120px] w-full max-w-[1240px] flex px-[40px]">
      <img
        className="mr-[10px] xl:hidden"
        src={chooseAgriosImage}
        alt="Choose Agrios Section Main Image"
      />
      <figure>
        <p className="text-[24px] text-[#EEC044] xl:text-cennter">
          Our Farm Benefits
        </p>
        <h2 className="text-[48px] text-[#1F1E17] font-bold leading-[55px] mb-[30px]">
          Why Choose Agrios Market
        </h2>
        <p className="text-[16px] text-[#878680] mb-[34px]">
          There are many variations of passages available, but the majority have
          suffered alteration in some form by injected humor or random words
          which don't look even.
        </p>
        <ul>
          <li className="flex items-start">
            <img
              className="mr-[25px] mt-[7px] items-start"
              src={greenCorrectIcon}
              alt="Green Correct Icon"
            />
            <div>
              <h3 className="text-[24px] text-[#1F1E17] font-bold">
                Quality Organic Food
              </h3>
              <p className="text-[16px] text-[#878680]">
                There are variations. You need to be sure there is nothing
                hidden in the middle of the text.
              </p>
            </div>
          </li>
          <li className="flex items-start mt-[23px]">
            <img
              className="mr-[25px] mt-[7px] items-start"
              src={lightGreenCorrectIcon}
              alt="Light Green Correct Icon"
            />
            <div>
              <h3 className="text-[24px] text-[#1F1E17] font-bold">
                Professional Farmers
              </h3>
              <p className="text-[16px] text-[#878680]">
                There are variations. You need to be sure there is nothing
                hidden in the middle of the text.
              </p>
            </div>
          </li>
          <li className="flex items-start mt-[23px]">
            <img
              className="mr-[25px] mt-[7px] items-start"
              src={yellowCorrectIcon}
              alt="Yellow Correct Icon"
            />
            <div>
              <h3 className="text-[24px] text-[#1F1E17] font-bold">
                Quality Products
              </h3>
              <p className="text-[16px] text-[#878680]">
                There are variations. You need to be sure there is nothing
                hidden in the middle of the text.
              </p>
            </div>
          </li>
        </ul>
        <button className="mt-[90px] bg-[#4BAF47] font-bold w-fit px-[50px] py-4 rounded-[10px] hover:bg-[#54c950] text-[#ffffff] md:w-full">
          Discover More
        </button>
      </figure>
    </section>
  );
}

export default ChooseAgrios;
