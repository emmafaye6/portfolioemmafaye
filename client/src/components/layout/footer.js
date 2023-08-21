import "./footer.css";
import githubIcon from "../../assets/images/githubicon.svg";
import envelopeIcon from "../../assets/images/footerenvelope.svg";
import linkedInIcon from "../../assets/images/footerlinkedin.svg";

function Footer() {
  return (
    <div className="footer">
      <section className="footer__iconcontainer">
        <a href="https://github.com/emmafaye6" target="_blank">
          <img src={githubIcon} alt="github icon" className="footer__icon" />
        </a>
        <a href="mailto:emmafaye06@gmail.com">
          <img src={envelopeIcon} alt="mail icon" className="footer__icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/emma-faye-b95a65217/"
          target="_blank"
        >
          <img
            src={linkedInIcon}
            alt="linkedin icon"
            className="footer__icon"
          />
        </a>
      </section>
      <section className="footer__textcontainer">
        <a
          href="https://github.com/emmafaye6/portfolioemmafaye"
          className="footer__link"
          target="_blank"
        >
          wanna see what's behind this website?
        </a>
        <p className="footer__text">
          design & code made with {"<"}3 by emma faye
        </p>
      </section>
    </div>
  );
}
export default Footer;
