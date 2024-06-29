import femaleImage from "src/assets/female-image.svg";
import maleImage from "src/assets/male-image.svg";

export function WhatTheySaySection() {
  return (
    <section className="w-full bg-[#F8F7F0] flex items-center justify-center mb-[120px]">
      <div className="w-full max-w-[1200px] py-[120px]">
        <h5 className="text-[#EEC044] text-[24px] flex justify-center">
          Our Testimonials
        </h5>
        <h2 className="flex justify-center text-[48px] mb-[50px] text-[#1F1E17] leading-[50px] font-bold sm:text-[36px]">
          What They Say
        </h2>
        <div className="flex lg:block lg:px-[20px]">
          <figure className="flex bg-[#ffffff] p-[40px] rounded-[10px] mr-[20px] lg:mb-[20px] lg:mr-[0]">
            <img
              className="w-[60%] mr-[10px] rounded-[10px] object-cover"
              src={maleImage}
              alt="Male Person Image"
            />
            <figcaption className="text-[#878680] text-[22px] px-[20px] lg:flex lg:justify-between lg:flex-col lg:text-[28px] md:text-[20px]">
              There are many variations of passages available, but the majority
              have suffered alterations in some form by injected humor or
              randomness
              <div>
                <h4 className="flex justify-end font-bold mt-[20px]">
                  Bonnie Tolbet
                </h4>
                <p className="flex justify-end text-[16px]">Customer</p>
              </div>
            </figcaption>
          </figure>
          <figure className="flex bg-[#ffffff] p-[40px] rounded-[10px]">
            <img
              className="w-[60%] mr-[10px] rounded-[10px] object-cover"
              src={femaleImage}
              alt="Female Person Image"
            />
            <figcaption className="text-[#878680] text-[22px] px-[20px] lg:flex lg:justify-between lg:flex-col lg:text-[28px] md:text-[20px]">
              There are many variations of passages available, but the majority
              have suffered alterations in some form by injected humor or
              randomness
              <div>
                <h4 className="flex justify-end font-bold mt-[20px]">
                  Sarah Albert
                </h4>
                <p className="flex justify-end text-[16px]">Customer</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default WhatTheySaySection;
