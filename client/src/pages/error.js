import "./error.css";
import Layout from "./../components/layout/layout.js";
import { Link } from "react-router-dom";
import footersquiggly1 from "./../assets/images/footersquiggly1.svg";
import footersquiggly2 from "./../assets/images/footersquiggly2.svg";
import { useTheme } from "../contexts/themeContext";
import { useThemeClass } from "../contexts/useThemeClass";

function Error() {
  const { theme } = useTheme();
  useThemeClass(theme);

  return (
    <Layout>
      <div className="error">
        <img src={footersquiggly1} alt="" className="footersquiggly1" />
        <img src={footersquiggly2} alt="" className="footersquiggly2" />
        <p className="error__title">Error 404</p>
        <p className="error__text">
          Oopsie, looks like something unexpected happened!
        </p>
        <Link to="/" className="error__link">
          Homepage
        </Link>
      </div>
    </Layout>
  );
}
export default Error;
