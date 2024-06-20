import applesImage from "src/assets/apples-image.svg";
import grapesImage from "src/assets/grapes-image.svg";
import milkIcon from "src/assets/milk-icon.svg";
import plantIcon from "src/assets/plant-icon-2.svg";
import plantImage from "src/assets/plant-image.svg";
import tractorIcon from "src/assets/tractor-icon.svg";
import vegetablesImage from "src/assets/vegetables-image.svg";
import vegetablesIcon from "src/assets/vegetables-icon.svg";

export function OfferSection() {
  return (
    <section className="max-w-[1200px] relative w-full ">
      <div className="absolute z-[-2] top-0 w-[1200px] h-[400px] bg-[#F8F7F0]"></div>
      <p>Our Services</p>
      <h2>What We Offer</h2>
      <ul>
        <li>
          <img src={applesImage} alt="Apple Image" />
          <img src={tractorIcon} alt="Tractor Icon" />
          <button>Read More</button>
          <div>
            <p>Agriculture Products</p>
          </div>
        </li>
        <li>
          <img src={vegetablesImage} alt="Vegetables Image" />
          <img src={vegetablesIcon} alt="Vegetable Icon" />
          <button>Read More</button>
          <div>
            <p>Organic Products</p>
          </div>
        </li>
        <li>
          <img src={plantImage} alt="Plant Image" />
          <img src={plantIcon} alt="Plant Icon" />
          <button>Read More</button>
          <div>
            <p>Fresh Vegetables</p>
          </div>
        </li>
        <li>
          <img src={grapesImage} alt="Grapes Image" />
          <img src={milkIcon} alt="Milk Icon" />
          <button>Read More</button>
          <div>
            <p>Dairy Products</p>
          </div>
        </li>
      </ul>
      <div>
        <p>Agriculture Products</p>
        <p>Projects Completed</p>
        <p>Satisfied Clients</p>
        <p>Experts Farmers</p>
      </div>
    </section>
  );
}

export default OfferSection;
