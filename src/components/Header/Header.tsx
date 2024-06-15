import agriosLogo from "/src/assets/agrios-logo.png";
import emailIcon from "/src/assets/email-icon.png";
import facebookLogo from "/src/assets/facebook-logo.png";
import instagramLogo from "/src/assets/instagram-logo.png";
import locationIcon from "/src/assets/location-icon.png";
import phoneIcon from "/src/assets/phone-icon.png";
import pinterestLogo from "/src/assets/pinterest-logo.png";
import twitterLogo from "/src/assets/twitter-logo.png";

export function Header() {
  return (
    <header>
      <section>
        <img src={agriosLogo} alt="Agrios Logo" />
        <div>
          <ul>
            <li>
              <img src={twitterLogo} alt="Twitter Logo" />
            </li>
            <li>
              <img src={facebookLogo} alt="Facebook Logo" />
            </li>
            <li>
              <img src={pinterestLogo} alt="Pinterest Logo" />
            </li>
            <li>
              <img src={instagramLogo} alt="Instagram Logo" />
            </li>
          </ul>
          <address>
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
