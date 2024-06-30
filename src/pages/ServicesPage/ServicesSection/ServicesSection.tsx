import farmingImage from "src/assets/farming-image.svg";
import greenSquareImage from "src/assets/green-square-image.svg";
import tomatoFarmingImage from "src/assets/tomato-farming-image.svg";
import hayImage from "src/assets/hay-image.svg";

export function ServicesSection() {
  return (
    <section className="mb-[120px] ">
      <aside>
        <h3>Need Help?</h3>
        <p>
          Need assistance with filling out a form? Call our corporate office,
          and we will connect you with a team member for help.
        </p>
        <p>+92 (000) -9630</p>
        <button>Start Shopping Now</button>
      </aside>
      <article>
        <img src={farmingImage} alt="Agriculture field" />
        <h2>Agriculture Products</h2>
        <p>
          Lorem ipsum is simply free text used by copy typing and refreshing.
          Neque porro est qui dolorem ipsum quia quaed inventore veritatis et
          quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus
          quis enim var sed efficitur turpis gilla sed sit amet finibus eros.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s.
        </p>
        <p>
          It has survived not only five centuries. Lorem Ipsum is simply dummy
          text of the new design, printing, and type setting. When an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book, it has survived not only five centuries but also the leap into
          electronic typesetting.
        </p>
        <div>
          <figure>
            <img src={hayImage} alt="Hay bales" />
            <h3>Our Benefits</h3>
            <figcaption>
              It has survived not only five centuries. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum.
            </figcaption>
          </figure>
          <figure>
            <img src={tomatoFarmingImage} alt="Tomato farming" />
            <figcaption>
              Nsectetur cing elit. Suspendisse suscipit sagittis leo. Entum
              estibulum dignissim posuere. Lorem Ipsum on the tend to repeat.
            </figcaption>
          </figure>
        </div>
        <div>
          <h2>World’s Hottest Destinations for Vegans</h2>
          <img src={greenSquareImage} alt="Green Square Image" />
        </div>
        <div>
          <h2>Let’s Grow Naturally and Live Naturally</h2>
          <img src={greenSquareImage} alt="Green Square Image" />
        </div>
        <p>
          Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum
          leo ligula, molestie ullamcorper vulputate, vitae sodales commodo
          nisl. Nulla facilisi. Pellentesque est metus, condimentum vitae.
        </p>
        <div>
          <h2>Best Vegetables for Your Healthy Hair</h2>
          <img src={greenSquareImage} alt="Green Square Image" />
        </div>
      </article>
    </section>
  );
}

export default ServicesSection;
