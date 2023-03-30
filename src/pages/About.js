import poster from "../assets/images/about_poster.png";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <img className="about--poster" src={poster} />
      <div className="about--content">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="about--explore">
          <h2>Your destination is waiting. Your van is ready.</h2>
          <button className="link-button">Explore our vans</button>
        </div>
      </div>
    </div>
  );
}
export default About;
