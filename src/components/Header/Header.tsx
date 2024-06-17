import { v4 as uuidv4 } from "uuid";
import { Navigation } from "../Navigation";

import agriosLogo from "/src/assets/agrios-logo.svg";
import emailIcon from "/src/assets/email-icon.svg";
import facebookLogo from "/src/assets/facebook-logo.svg";
import instagramLogo from "/src/assets/instagram-logo.svg";
import locationIcon from "/src/assets/location-icon.svg";
import phoneIcon from "/src/assets/phone-icon.svg";
import pinterestLogo from "/src/assets/pinterest-logo.svg";
import twitterLogo from "/src/assets/twitter-logo.svg";

export function Header() {
  const socialMedia = [
    { src: twitterLogo, alt: "Twitter Logo" },
    { src: facebookLogo, alt: "Facebook Logo" },
    { src: pinterestLogo, alt: "Pinterest Logo" },
    { src: instagramLogo, alt: "Instagram Logo" },
  ];

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
        <section className="w-[75%] max-w-[1200px] flex  items-center justify-between">
          <img className="p-[20px]" src={agriosLogo} alt="Agrios Logo" />
          <div className="flex">
            {socialMedia.map((logo, index) => {
              return (
                <ul
                  key={uuidv4()}
                  className={`flex items-center list-none cursor-pointer ${
                    index === contactInfo.length ? "mr-0" : "mr-2.5"
                  }`}
                >
                  <li className="bg-[#f0f0f0] flex p-[7px] rounded-[100%] hover:bg-[#D1D1D1]">
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
                    className={`flex items-center justify-center px-5 py-2.5 ${
                      index === 1
                        ? "border-x-2 border-solid border-[#E4E2D7]"
                        : ""
                    }`}
                  >
                    <img className="p-2.5" src={info.src} alt={info.alt} />
                    <div>
                      <p className="text-[#878680] text-[12px]">{info.text}</p>
                      <p className="whitespace-nowrap text-[14px] font-bold">
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
