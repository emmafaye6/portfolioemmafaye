import BigTitle from "../layout/bigtitle";
import SmallTitle from "../layout/smalltitle";
import "./about.css";

function About() {
  return (
    <div className="about" id="about">
      <BigTitle>About</BigTitle>
      <SmallTitle>the developer</SmallTitle>

      <h4 className="about__title">the journey</h4>
      <p className="about__text">
        After spending some time coding by myself, I enrolled at OpenClassrooms
        and got a degree in front-end development while doing an internship in a
        webdesign firm. I came out with a true passion for all things web and a
        desire to keep learning, always.
      </p>
      <h4 className="about__title">the skills</h4>
      <p className="about__text">
        <span className="--medium">dev :</span> HTML-CSS, Javascript, React
        (react-router, react-redux), testing and debugging, SEO, accessibility,
        web performance, command line, git, responsive design
      </p>
      <p className="about__text">
        <span className="--medium">webdesign :</span> ui/ux, visual design,
        wireframing, figma
      </p>
    </div>
  );
}

export default About;
