import chooseAgriosImage from "src/assets/choose-agrios-main-image.svg";
import greenCorrectIcon from "src/assets/green-correct-icon.svg";
import lightGreenCorrectIcon from "src/assets/light-green-correct-icon.svg";
import yellowCorrectIcon from "src/assets/yellow-correct-icon.svg";

export function ChooseAgrios() {
  return (
    <section>
      <img src={chooseAgriosImage} alt="Choose Agrios Section Main Image" />
      <figure>
        <p>Our Farm Benefits</p>
        <h2>Why Choose Agrios Market</h2>
        <p>
          There are many variations of passages available, but the majority have
          suffered alteration in some form by injected humor or random words
          which don't look even.
        </p>
        <ul>
          <li>
            <img src={greenCorrectIcon} alt="Green Correct Icon" />
            <div>
              <h3>Quality Organic Food</h3>
              <p>
                There are variations. You need to be sure there is nothing
                hidden in the middle of the text.
              </p>
            </div>
          </li>
          <li>
            <img src={lightGreenCorrectIcon} alt="Light Green Correct Icon" />
            <div>
              <h3>Professional Farmers</h3>
              <p>
                There are variations. You need to be sure there is nothing
                hidden in the middle of the text.
              </p>
            </div>
          </li>
          <li>
            <img src={yellowCorrectIcon} alt="Yellow Correct Icon" />
            <div>
              <h3>Quality Products</h3>
              <p>
                There are variations. You need to be sure there is nothing
                hidden in the middle of the text.
              </p>
            </div>
          </li>
        </ul>
      </figure>
      <button>Discover More</button>
    </section>
  );
}

export default ChooseAgrios;
