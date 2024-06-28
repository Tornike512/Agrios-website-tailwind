import FooterNavigation from "./FooterNavigation/FooterNavigation";

import blackAgriosLogo from "src/assets/black-agrios-logo.svg";
import leafIcon from "src/assets/leaf-icon.svg";
import sendIcon from "src/assets/send-icon.svg";
import whiteFacebookLogo from "src/assets/white-facebook-logo.svg";
import whiteInstagramLogo from "src/assets/white-instagram-logo.svg";
import whitePinterestLogo from "src/assets/white-pinterest-logo.svg";
import whiteTwitterLogo from "src/assets/white-twitter-logo.svg";
import yellowConvertIcon from "src/assets/yellow-convert-icon.svg";
import yellowLocationIcon from "src/assets/yellow-location-icon.svg";
import yellowPhoneIcon from "src/assets/yellow-phone-icon.svg";

export function Footer() {
  return (
    <>
      <footer className="bg-[#24231D] flex justify-center py-[120px] px-[40px] lg:pl-[18%] sm:pl-[11%]">
        <div className="flex max-w-[1200px] w-full text-[#A5A49A] justify-between lg:block">
          <ul className="flex mr-[65px] lg:block">
            <li className="max-w-[270px] w-full  lg:max-w-fit lg:mb-[20px]">
              <img
                className="mb-[21px]"
                src={blackAgriosLogo}
                alt="Agrios Logo"
              />
              <p className="mb-[20px]">
                There are many variations of passages of lorem ipsum available,
                but the majority suffered.
              </p>
              <figure className="flex">
                <img
                  className="bg-[#1F1E17] mr-[10px] px-[15px] py-[13px] rounded-[100%] cursor-pointer hover:bg-[#525252]"
                  src={whiteTwitterLogo}
                  alt="Twitter Logo"
                />
                <img
                  className="bg-[#1F1E17] mr-[10px] px-[15px] py-[13px] rounded-[100%] cursor-pointer hover:bg-[#525252]"
                  src={whiteFacebookLogo}
                  alt="FAcebook Logo"
                />
                <img
                  className="bg-[#1F1E17] mr-[10px] px-[15px] py-[13px] rounded-[100%] cursor-pointer hover:bg-[#525252]"
                  src={whitePinterestLogo}
                  alt="Pinterest Logo"
                />
                <img
                  className="bg-[#1F1E17] px-[15px] py-[13px] rounded-[100%] cursor-pointer hover:bg-[#525252]"
                  src={whiteInstagramLogo}
                  alt="Instagram Logo"
                />
              </figure>
            </li>
            <li className="mr-[35px] lg:max-w-fit lg:mb-[20px]">
              <h3 className="text-[#ffffff] text-[20px] font-bold max-w-[74px] w-full border-b-[5px] border-b-[#4BAF47] border-solid mb-[20px]">
                Explore
              </h3>
              <figure className="flex mb-[6px]">
                <img className="mr-[10px] " src={leafIcon} alt="Leaf Icon" />
                <figcaption className="whitespace-nowrap">About</figcaption>
              </figure>
              <figure className="flex mb-[6px]">
                <img className="mr-[10px]" src={leafIcon} alt="Leaf Icon" />
                <figcaption className="whitespace-nowrap">Services</figcaption>
              </figure>
              <figure className="flex mb-[6px]">
                <img className="mr-[10px]" src={leafIcon} alt="Leaf Icon" />
                <figcaption className="whitespace-nowrap">
                  Our Projects
                </figcaption>
              </figure>
              <figure className="flex mb-[6px]">
                <img className="mr-[10px]" src={leafIcon} alt="Leaf Icon" />
                <figcaption className="whitespace-nowrap">
                  Meet the Farmers
                </figcaption>
              </figure>
              <figure className="flex mb-[6px]">
                <img className="mr-[10px]" src={leafIcon} alt="Leaf Icon" />
                <figcaption className="whitespace-nowrap">
                  Latest News
                </figcaption>
              </figure>
              <figure className="flex mb-[6px]">
                <img className="mr-[10px]" src={leafIcon} alt="Leaf Icon" />
                <figcaption className="whitespace-nowrap">Contact</figcaption>
              </figure>
            </li>
            <li className="w-full max-w-[190px] lg:max-w-fit lg:mb-[20px]">
              <h3 className="text-[#ffffff] text-[20px] font-bold max-w-[74px] w-full border-b-[5px] border-b-[#4BAF47] border-solid mb-[20px]">
                News
              </h3>
              <div className="mb-[32px]">
                <h4 className="text-[#ffffff]">
                  Bringing Food Production Back To Cities
                </h4>
                <time className="text-[#EEC044]">July 5, 2022</time>
              </div>
              <div>
                <h4 className="text-[#ffffff]">
                  The Future of Farming, Smart Irrigation Solutions
                </h4>
                <time className="text-[#EEC044]">July 5, 2022</time>
              </div>
            </li>
          </ul>
          <address className="not-italic max-w-[270px] w-full px-[15px] relative lg:p-0">
            <h3 className="text-[#ffffff] text-[20px] font-bold max-w-[74px] w-full border-b-[5px] border-b-[#4BAF47] border-solid mb-[20px]">
              Contact
            </h3>
            <figure className="flex mb-[10px]">
              <img
                className="mr-[8px]"
                src={yellowPhoneIcon}
                alt="Yellow Phone Icon"
              />
              <figcaption>666 888 0000</figcaption>
            </figure>
            <figure className="flex mb-[10px]">
              <img
                className="mr-[8px]"
                src={yellowConvertIcon}
                alt="Yellow Convert Icon"
              />
              <a>Torniketsagareishvili64@gmail.com</a>
            </figure>
            <figure className="flex mb-[18px]">
              <img
                className="mr-[8px]"
                src={yellowLocationIcon}
                alt="Yellow Location Icon"
              />
              <figcaption>
                80 broklyn golden street line New York, USA
              </figcaption>
            </figure>
            <input
              className="w-full p-[10px] rounded-[10px]"
              placeholder="Your Email Address"
              type="email"
            />
            <button className="bg-[#4BAF47] p-[16px] absolute rounded-tr-[10px] rounded-br-[10px] hover:bg-[#54c950] right-[-1px]">
              <img src={sendIcon} alt="Send Icon" />
            </button>
          </address>
        </div>
      </footer>
      <FooterNavigation />
    </>
  );
}

export default Footer;
