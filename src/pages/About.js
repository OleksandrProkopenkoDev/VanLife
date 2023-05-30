import { useNavigate } from "react-router-dom";
import poster from "../assets/images/about_poster.png";
import "./About.css";

function About() {
  const navigate = useNavigate();

  const goToVansPage = () => {
    navigate("/vans");
  };

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
          <button className="link-button" onClick={goToVansPage}>
            Explore our vans
          </button>
        </div>
      </div>
    </div>
  );
}
export default About;
