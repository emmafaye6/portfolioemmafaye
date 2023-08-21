import "./portfolio.css";
import portfolioData from "../../data/portfolioData";
import BigTitle from "../layout/bigtitle";
import SmallTitle from "../layout/smalltitle";
import metasquigglies from "../../assets/images/metasquigglies.svg";
import Button from "../layout/button";
import portfolioimage from "../../assets/images/portfolioimage.png";
import { Link } from "react-router-dom";

function Portfolio() {
  const data = portfolioData[0];

  return (
    <div className="portfolio" id="meta">
      <BigTitle>Wanna see</BigTitle>
      <SmallTitle>something kinda meta?</SmallTitle>
      <img
        src={metasquigglies}
        alt=""
        className="portfolio__metasquigglies"
        aria-hidden="true"
      />
      <section className="portfolio__card">
        <img
          src={portfolioimage}
          alt="device mockup of a computer opened on this website"
          className="portfolio__image"
        />
        <p className="portfolio__title">{data.title}</p>
        <p className="portfolio__description">{data.description}</p>
        <Button className="project__button --buttontext">
          <Link to="/projects/portfolio">the project</Link>
        </Button>
      </section>
    </div>
  );
}

export default Portfolio;
