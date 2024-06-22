import harvestingImage from "src/assets/harvesting-image.svg";
import tractorFarmingImage from "src/assets/tractor-farming-image.svg";
import wheatFarmingImage from "src/assets/wheat-farming-image.svg";

export function ExploreProjects() {
  return (
    <section>
      <p>Recently Completed</p>
      <h2>Explore Projects</h2>
      <div>
        <figure>
          <img src={harvestingImage} alt="Wheat Image" />
          <figcaption>Easy Harvesting</figcaption>
        </figure>
        <figure>
          <img src={tractorFarmingImage} alt="Tractor Image" />
          <figcaption>Agriculture Farming</figcaption>
        </figure>
        <figure>
          <img src={harvestingImage} alt="Wheat Image" />
          <figcaption>Ecological Farming</figcaption>
        </figure>
        <figure>
          <img src={wheatFarmingImage} alt="Wheat Farming Image" />
          <figcaption>Organic Solutions</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default ExploreProjects;
