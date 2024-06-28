import palmsImage from "/src/assets/palms-image.svg";
import lightGreenCorrectIcon from "/src/assets/lightgreen-correct-icon.svg";
import smillingPersonImage from "/src/assets/smilling-person-image.svg";

export function AgricultureMarket() {
  return (
    <section className="w-full max-w-[1200px] flex">
      <figure>
        <img src={palmsImage} alt="Palms Image" />
        <img src={smillingPersonImage} alt="Smiling Person Image" />
      </figure>
      <aside>
        <h5>Get to Know Us</h5>
        <h2>The Best Agriculture Market</h2>
        <p>
          There are many variations of passa of lorem available, but the
          majority have suffered alteration.
        </p>
        <p>
          There are many variations of passages of lorem ipsum available but the
          majority have suffered alteration in some form by injected humor or
          random word which don’t look even.
        </p>
        <figure>
          <figcaption>
            <img src={lightGreenCorrectIcon} alt="lightGreen Correct Icon" />
            Suspe ndisse suscipit sagittis leo
          </figcaption>
          <figcaption>
            <img src={lightGreenCorrectIcon} alt="lightGreen Correct Icon" />
            Entum estibulum disgnissim posuere
          </figcaption>
          <figcaption>
            <img src={lightGreenCorrectIcon} alt="lightGreen Correct Icon" />
            Lorem Ipsum on the tend to repeat
          </figcaption>
        </figure>
        <button>Discover More</button>
      </aside>
    </section>
  );
}

export default AgricultureMarket;
