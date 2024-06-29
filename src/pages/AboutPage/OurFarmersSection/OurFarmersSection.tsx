import kevinSmith from "src/assets/kevin-smith.svg";
import jessicaBrown from "src/assets/jessica-brown.svg";
import davidMartin from "src/assets/david-martin.svg";

export function OurFarmersSection() {
  return (
    <section>
      <h5>Team Members</h5>
      <h2>Meet Our Farmers</h2>
      <figure>
        <img src={kevinSmith} alt="Kevin Smith's farm" />
        <img src={jessicaBrown} alt="Jessica Brown's farm" />
        <img src={davidMartin} alt="David Martin's farm" />
      </figure>
    </section>
  );
}

export default OurFarmersSection;
