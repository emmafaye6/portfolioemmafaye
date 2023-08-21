import "./contact.css";
import BigTitle from "../layout/bigtitle";
import SmallTitle from "../layout/smalltitle";
import envelope from "../../assets/images/envelopeicon.svg";
import linkedinicon from "../../assets/images/linkedinicon.svg";
import contactsquiggly from "../../assets/images/contactsquigglies.svg";
import darkcontactsquiggly from "../../assets/images/darkcontactsquigglies.svg";
import { useTheme } from "../../contexts/themeContext";

function Contact() {
  const { theme } = useTheme();
  return (
    <div className="contact" id="contact">
      <BigTitle>Contact me</BigTitle>
      <SmallTitle>anytime !</SmallTitle>
      <div className="contact__container">
        <section className="contact__mail">
          <p className="contact__title">Send me a mail</p>
          <div className="contact__texticoncontainer">
            <img src={envelope} alt="envelope icon" className="contact__icon" />
            <a href="mailto:emmafaye06@gmail.com" className="contact__link">
              emmafaye06@gmail.com
            </a>
          </div>
        </section>
        <section className="contact__linkedin">
          <p className="contact__title">Find me on linkedIn</p>
          <div className="contact__texticoncontainer">
            <img
              src={linkedinicon}
              alt="linkedin icon"
              className="contact__icon"
            />
            <a
              className="contact__link"
              href="https://www.linkedin.com/in/emma-faye-b95a65217/"
              target="_blank"
            >
              my linkedin profile
            </a>
          </div>
        </section>
        <img
          src={theme === "light" ? contactsquiggly : darkcontactsquiggly}
          alt=""
          className="contact__squiggly"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export default Contact;
