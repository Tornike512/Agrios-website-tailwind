import { v4 as uuidv4 } from "uuid";
import { Navigation } from "../Navigation";
import { useNavigate } from "react-router-dom";

import agriosLogo from "/src/assets/agrios-logo.svg";
import emailIcon from "/src/assets/email-icon.svg";
import facebookLogo from "/src/assets/facebook-logo.svg";
import instagramLogo from "/src/assets/instagram-logo.svg";
import locationIcon from "/src/assets/location-icon.svg";
import phoneIcon from "/src/assets/phone-icon.svg";
import pinterestLogo from "/src/assets/pinterest-logo.svg";
import twitterLogo from "/src/assets/twitter-logo.svg";
import menuIcon from "/src/assets/menu-icon.svg";

export function Header() {
  const navigate = useNavigate();

  const socialMedia = [
    { src: twitterLogo, alt: "Twitter Logo" },
    { src: facebookLogo, alt: "Facebook Logo" },
    { src: pinterestLogo, alt: "Pinterest Logo" },
    { src: instagramLogo, alt: "Instagram Logo" },
  ];

  const handleHomeNavigation = () => {
    navigate("/");
  };

  const contactInfo = [
    {
      src: phoneIcon,
      alt: "Phone Icon",
      text: "Call anytime",
      additonalText: "+ 98 (000) - 9630",
    },
    {
      src: emailIcon,
      alt: "Email Icon",
      text: "Send email",
      additonalText: "TornikeTsagareishvili64@gmail.com",
    },
    {
      src: locationIcon,
      alt: "Location Icon",
      text: "380 St Kilda Road",
      additonalText: "Melbourne, Australia",
    },
  ];

  return (
    <>
      <header className="w-full bg-#ffffff h-[115px] flex items-center justify-center">
        <section className="max-w-[1200px] w-full flex  items-center justify-between">
          <img
            onClick={handleHomeNavigation}
            className="p-[20px] lg:pr-0 lg:w-[140px] lg:pl-[10px] cursor-pointer"
            src={agriosLogo}
            alt="Agrios Logo"
          />
          <img
            className="hidden md:block md:w-[65px] md:px-[20px] cursor-pointer"
            src={menuIcon}
            alt="Menu Icon"
          />
          <div className="flex md:hidden">
            {socialMedia.map((logo, index) => {
              return (
                <ul
                  key={uuidv4()}
                  className={`flex items-center list-none cursor-pointer lg:hidden ${
                    index === contactInfo.length ? "mr-0" : "mr-2.5"
                  }`}
                >
                  <li className="bg-[#f0f0f0] flex p-[7px] rounded-[100%] hover:bg-[#D1D1D1]  ">
                    <img
                      className="appearance-none"
                      src={logo.src}
                      alt={logo.alt}
                    />
                  </li>
                </ul>
              );
            })}
            <address className="flex items-center not-italic">
              {contactInfo.map((info, index) => {
                return (
                  <div
                    key={uuidv4()}
                    className={`flex items-center justify-center px-5 py-2.5 lg:px-[10px] ${
                      index === 1
                        ? "border-x-2 border-solid border-[#E4E2D7]"
                        : ""
                    }`}
                  >
                    <img
                      className="p-2.5 lg:pl-[2px]"
                      src={info.src}
                      alt={info.alt}
                    />
                    <div>
                      <p className="text-[#878680] text-[12px] lg:text-[10px]">
                        {info.text}
                      </p>
                      <p className="whitespace-nowrap text-[14px] lg:text-[12px] font-bold">
                        {info.additonalText}
                      </p>
                    </div>
                  </div>
                );
              })}
            </address>
          </div>
        </section>
      </header>
      <Navigation />
    </>
  );
}

export default Header;
