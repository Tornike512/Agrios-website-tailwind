import agronomyImage from "src/assets/agronomy-image.svg";
import foodProductionImage from "src/assets/food-production-image.svg";

export function NewsSection() {
  return (
    <article>
      <h4>From the Blog</h4>
      <h2>News & Articles</h2>
      <figure className="">
        <img src={foodProductionImage} alt="Wheat Farming Image" />
        <img src={foodProductionImage} alt="Wheat Farming Image" />
        <img src={agronomyImage} alt="Agronomy Image" />
      </figure>
    </article>
  );
}

export default NewsSection;
