import computer from "../../assets/images/computer.svg";
import darkcomputer from "../../assets/images/darkcomputer.svg";
import "./herobanner.css";
import Button from "../layout/button";
import { useTheme } from "../../contexts/themeContext";
import cv from "../../assets/cv.pdf";

function HeroBanner() {
  const { theme } = useTheme();
  return (
    <>
      <div className="herobanner">
        <section className="herobanner__left">
          <p className="herobanner--small">Hello, my name is</p>{" "}
          <h1 className="herobanner__title">Emma Faye</h1>
          <img
            src={theme === "light" ? computer : darkcomputer}
            className="herobanner__image"
            alt="computer with a rocket coming off it"
            aria-hidden="true"
          />
          <p className="herobanner__big">I'm a junior dev based in France.</p>
          <p className="herobanner__big">
            I like to design and build front-end things and make them as pretty,
            fast, and accessible as possible! ✨
          </p>
          <Button src={cv} className="herobanner__button --buttontext">
            check out my resume
          </Button>
        </section>
      </div>
    </>
  );
}
export default HeroBanner;
