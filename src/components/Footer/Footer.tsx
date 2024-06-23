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
      <footer className="bg-[#24231D] flex justify-center py-[120px]">
        <div className="flex max-w-[1200px] w-full text-[#A5A49A]">
          <ul className="flex">
            <li className="max-w-[270px] w-full px-[10px]">
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
            <li>
              <h3>Explore</h3>
              <figure>
                <img src={leafIcon} alt="Leaf Icon" />
                <figcaption>About</figcaption>
              </figure>
              <figure>
                <img src={leafIcon} alt="Leaf Icon" />
                <figcaption>Services</figcaption>
              </figure>
              <figure>
                <img src={leafIcon} alt="Leaf Icon" />
                <figcaption>Our Projects</figcaption>
              </figure>
              <figure>
                <img src={leafIcon} alt="Leaf Icon" />
                <figcaption>Meet the Farmers</figcaption>
              </figure>
              <figure>
                <img src={leafIcon} alt="Leaf Icon" />
                <figcaption>Latest News</figcaption>
              </figure>
              <figure>
                <img src={leafIcon} alt="Leaf Icon" />
                <figcaption>Contact</figcaption>
              </figure>
            </li>
            <li>
              <h3>News</h3>
              <div>
                <h4>Bringing Food Production Back To Cities</h4>
                <time>July 5, 2022</time>
              </div>
              <div>
                <h4>The Future of Farming, Smart Irrigation Solutions</h4>
                <time>July 5, 2022</time>
              </div>
            </li>
          </ul>
          <address>
            <h3>Contact</h3>
            <figure>
              <img src={yellowPhoneIcon} alt="Yellow Phone Icon" />
              <figcaption>666 888 0000</figcaption>
            </figure>
            <figure>
              <img src={yellowConvertIcon} alt="Yellow Convert Icon" />
              <a>Torniketsagareishvili64@gmail.com</a>
            </figure>
            <figure>
              <img src={yellowLocationIcon} alt="Yellow Location Icon" />
              <figcaption>
                80 broklyn golden street line New York, USA
              </figcaption>
            </figure>
            <input type="email" />
            <button>
              <img src={sendIcon} alt="Send Icon" />
            </button>
          </address>
        </div>
      </footer>
      ;
      <FooterNavigation />
    </>
  );
}

export default Footer;
