import fiveStarsImage from "src/assets/five-stars-image.jpg";
import personImage from "src/assets/my-image.jpg";
import greenCircle from "src/assets/green-circle-image.svg";

export function ReviewsSection() {
  return (
    <section className="w-full flex items-center justify-center bg-[#F8F7F0] py-[120px] px-[40px] ">
      <div className="flex justify-center max-w-[1200px] w-full lg:block">
        <section className="max-w-[308px] w-full mr-[30px] lg:w-full lg:max-w-fit text-center">
          <p className="text-[24px] text-[#EEC044]">Our Testimonials</p>
          <h2 className="text-[48px] text-[#1F1E17] font-bold leading-[55px] mb-[30px]">
            What They're Saying About Agrios
          </h2>
          <p className="text-[16px] text-[#878680] mb-[43px]">
            There are many variations of passages available, but the majority
            have suffered alteration in some form by injected humor or random
            words which don't look even.
          </p>
          <button className="bg-[#4BAF47] font-bold w-fit px-[50px] py-4 rounded-[10px] hover:bg-[#54c950] text-[#ffffff] lg:w-[104%]">
            View All Testimonials
          </button>
        </section>
        <article className="h-[250px] p-[40px] flex items-center justify-center bg-[#ffffff] rounded-[10px] mt-[10px] lg:mt-[40px] md:flex md:flex-col-reverse md:h-fit md:text-center">
          <div>
            <p className="text-[18px] text-[#878680] mb-[25px]">
              There are many variations of passages available, but the majority
              have suffered alteration in some form by injected humor or random
              words which don't look even.
            </p>
            <figure className="flex justify-between md:grid md:justify-center">
              <figcaption className="text-[24px] font-bold whitespace-nowrap mr-[20px]">
                Tornike Tsagareishvili
              </figcaption>
              <img
                className=" w-full max-w-[180px] md:ml-[26px] md:my-[10px]"
                src={fiveStarsImage}
                alt="Five Stars Image"
              />
            </figure>
          </div>
          <figure className="max-w-[450px] w-full flex items-center justify-center flex-col relative">
            <img
              className="w-full max-w-[150px] rounded-[100%] border-[5px] border-dotted border-[#EEC044] md:mb-[40px]"
              src={personImage}
              alt="Person Image"
            />
            <img
              className="absolute bottom-[-15px] w-[53px] left-[42%] md:bottom-[24px] md:left-[46%]"
              src={greenCircle}
              alt="Green Circle Image"
            />
          </figure>
        </article>
      </div>
    </section>
  );
}

export default ReviewsSection;
