import FooterNavigation from "./FooterNavigation/FooterNavigation";

export function Footer() {
  return (
    <>
      <footer>
        <div>
          <ul>
            <li>
              <img src="" alt="Agrios Logo" />
              <p>
                There are many variations of passages of lorem ipsum available,
                but the majority suffered.
              </p>
              <figure>
                <img src="" alt="Twitter Logo" />
                <img src="" alt="FAcebook Logo" />
                <img src="" alt="Pinterest Logo" />
                <img src="" alt="Instagram Logo" />
              </figure>
            </li>
            <li>
              <h3>Explore</h3>
              <figure>
                <img src="" alt="Leaf Icon" />
                <figcaption>About</figcaption>
              </figure>
              <figure>
                <img src="" alt="Leaf Icon" />
                <figcaption>Services</figcaption>
              </figure>
              <figure>
                <img src="" alt="Leaf Icon" />
                <figcaption>Our Projects</figcaption>
              </figure>
              <figure>
                <img src="" alt="Leaf Icon" />
                <figcaption>Meet the Farmers</figcaption>
              </figure>
              <figure>
                <img src="" alt="Leaf Icon" />
                <figcaption>Latest News</figcaption>
              </figure>
              <figure>
                <img src="" alt="Leaf Icon" />
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
              <img src="" alt="Yellow Phone Icon" />
              <figcaption>666 888 0000</figcaption>
            </figure>
            <figure>
              <img src="" alt="Yellow Convert Icon" />
              <a>Torniketsagareishvili64@gmail.com</a>
            </figure>
            <figure>
              <img src="" alt="Yellow Location Icon" />
              <figcaption>
                80 broklyn golden street line New York, USA
              </figcaption>
            </figure>
            <input type="email" />
            <button>
              <img src="" alt="Send Icon" />
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
