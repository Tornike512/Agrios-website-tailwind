import fiveStarsImage from "src/assets/five-stars-image.jpg";
import frameImage from "src/assets/frame-image.svg";
import personImage from "src/assets/my-image.jpg";
import greenCircle from "src/assets/green-circle-image.svg";

export function ReviewsSection() {
  return (
    <section>
      <div>
        <section>
          <p>Our Testimonials</p>
          <h2>What They're Saying About Agrios</h2>
          <p>
            There are many variations of passages available, but the majority
            have suffered alteration in some form by injected humor or random
            words which don't look even.
          </p>
          <button>View All Testimonials</button>
        </section>
        <article>
          <div>
            <p>
              There are many variations of passages available, but the majority
              have suffered alteration in some form by injected humor or random
              words which don't look even.
            </p>
            <figure>
              <figcaption>Bonnie Tolbert</figcaption>
              <img src={fiveStarsImage} alt="Five Stars Image" />
            </figure>
          </div>
          <figure>
            <img src={frameImage} alt="Frame Image" />
            <img src={personImage} alt="Person Image" />
            <img src={greenCircle} alt="Green Circle Image" />
          </figure>
        </article>
      </div>
    </section>
  );
}

export default ReviewsSection;
