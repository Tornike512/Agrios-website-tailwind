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
    { src: twitterLogo, alt: "Twitter Logo", id: "twitter" },
    { src: facebookLogo, alt: "Facebook Logo", id: "facebook" },
    { src: pinterestLogo, alt: "Pinterest Logo", id: "pinterest" },
    { src: instagramLogo, alt: "Instagram Logo", id: "instagram" },
  ];

  return (
    <header className="w-full bg-#ffffff flex items-center justify-center">
      <section className="w-[75%] max-w-[1200px] flex  items-center justify-between">
        <img src={agriosLogo} alt="Agrios Logo" />
        <div className="flex">
          {socialMedia.map((logo) => {
            return (
              <ul
                key={logo.id}
                className="flex items-center list-none cursor-pointer mr-2.5"
              >
                <li className="bg-[#e3e3e3] flex p-[7px] rounded-[100%]">
                  <img src={logo.src} alt={logo.alt} />
                </li>
              </ul>
            );
          })}
          <address className="flex items-center">
            <div>
              <img src={phoneIcon} alt="Phone Icon" />
              <div>
                <p>Call anytime</p>
                <p>+ 98 (000) - 9630</p>
              </div>
            </div>
            <div>
              <img src={emailIcon} alt="Email Icon" />
              <div>
                <p>Send email</p>
                <p>TornikeTsagareishvili64@gmail.com</p>
              </div>
            </div>
            <div>
              <img src={locationIcon} alt="Location Icon" />
              <div>
                <p>380 St Kilda Road</p>
                <p>Melbourne, Australia</p>
              </div>
            </div>
          </address>
        </div>
      </section>
    </header>
  );
}

export default Header;
