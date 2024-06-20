import fruitsImage from "src/assets/fruits-image.svg";
import organitServiceImage from "src/assets/organic-service-image.svg";
import plantImage from "src/assets/plant-image.svg";
import reformingImage from "src/assets/reforming-image.svg";
import ripeningImage from "src/assets/ripening-image.svg";
import technologyImage from "src/assets/technology-image.svg";
import tractorImage from "src/assets/tractor-image.svg";
import confirmIcon from "src/assets/confirm-icon.svg";

export function FeaturesSection() {
  return (
    <section className="w-[1200px] mt-[120px]">
      <ul className="grid grid-cols-[1fr_1fr_1fr]">
        <li>
          <p>Feature 01</p>
          <h3>We're using a new technology</h3>
          <img src={technologyImage} alt="Technology Image" />
        </li>
        <li>
          <p>Feature 02</p>
          <h3>Good in smart organic services</h3>
          <img src={organitServiceImage} alt="Organic Service Image" />
        </li>
        <li>
          <p>Feature 03</p>
          <h3>Reforming in the systems</h3>
          <img src={reformingImage} alt="Reforming Image" />
        </li>
      </ul>
      <div>
        <section>
          <img src={tractorImage} alt="Tractor Image" />
          <img src={plantImage} alt="Plant Image" />
        </section>
        <article>
          <p>Our Introductions</p>
          <h2>Agriculture & Organic Product Farm</h2>
          <p>Agrios is the largest global organic farm.</p>
          <p>
            There are many variations of passages of lorem ipsum available but
            the majority have suffered alteration in some form by injected humor
            or random word which don’t look even.
          </p>
          <ul>
            <li>
              <img src={fruitsImage} alt="Fruits Icon" />
              <h4>Growing fruits vegetables</h4>
            </li>
            <li>
              <img src={ripeningImage} alt="Ripening Icon" />
              <h4>Tips for ripening your fruits</h4>
            </li>
          </ul>
          <p>
            <img src={confirmIcon} alt="Confirm Image" />
            Lorem Ipsum is not simply random text.
          </p>
          <p>
            <img src={confirmIcon} alt="Confirm Image" />
            Making this the first true generator on the internet.
          </p>
          <button>Discover More</button>
        </article>
      </div>
    </section>
  );
}

export default FeaturesSection;
