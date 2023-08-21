import portfolioData from "../data/portfolioData";
import BigTitle from "../components/layout/bigtitle";
import SmallTitle from "../components/layout/smalltitle";
import Button from "../components/layout/button";
import portfolioscreenshot from "../assets/images/portfolioscreenshot.png";
import Layout from "../components/layout/layout";
import spiralsquigglies from "../assets/images/spiralsquigglies.svg";
import darkspiralsquigglies from "../assets/images/darkspiralsquigglies.svg";
import { useTheme } from "../contexts/themeContext";
import { useThemeClass } from "../contexts/useThemeClass";

function PortfolioPage() {
  const { theme } = useTheme();
  useThemeClass(theme);

  const data = portfolioData[0];

  return (
    <Layout>
      <div className="projectpage">
        <section className="projectpage__titlecontainer">
          <h1 className="projectpage__title">{data.title}</h1>
          <img
            src={theme === "light" ? spiralsquigglies : darkspiralsquigglies}
            alt=""
            className="projectpage__squiggly"
          />
        </section>

        <img src={portfolioscreenshot} alt="" className="projectpage__image" />
        <div className="projectpage__buttoncontainer">
          <Button className="project__button --buttontext">
            <a href={data.repo} target="_blank">
              github repo
            </a>
          </Button>
        </div>
        <div className="projectpage__descriptionscontainer">
          <section className="projectpage__descriptions projectpage__text">
            <BigTitle>The</BigTitle>
            <SmallTitle>project</SmallTitle>
            <p>{data.description}</p>
          </section>
          <section className="projectpage__descriptions projectpage__text">
            <BigTitle>What</BigTitle>
            <SmallTitle>i learned on the way</SmallTitle>
            <p>{data.skills}</p>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default PortfolioPage;
