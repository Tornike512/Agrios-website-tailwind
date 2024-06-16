import { v4 as uuidv4 } from "uuid";

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
    <header className="w-full bg-#ffffff flex items-center justify-center">
      <section className="w-[75%] max-w-[1200px] flex  items-center justify-between">
        <img src={agriosLogo} alt="Agrios Logo" />
        <div className="flex">
          {socialMedia.map((logo) => {
            return (
              <ul
                key={uuidv4()}
                className="flex items-center list-none cursor-pointer mr-2.5"
              >
                <li className="bg-[#f0f0f0] flex p-[7px] rounded-[100%] hover:bg-[#D1D1D1]">
                  <img src={logo.src} alt={logo.alt} />
                </li>
              </ul>
            );
          })}
          <address className="flex items-center">
            {contactInfo.map((info) => {
              return (
                <div key={uuidv4()} className="flex">
                  <img src={info.src} alt={info.alt} />
                  <div>
                    <p>{info.text}</p>
                    <p>{info.additonalText}</p>
                  </div>
                </div>
              );
            })}
          </address>
        </div>
      </section>
    </header>
  );
}

export default Header;
