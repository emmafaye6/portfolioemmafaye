import pinkdivider from "../../assets/images/footerdivider.svg";
import darkdivider from "../../assets/images/darkdivider.svg";
import { useTheme } from "../../contexts/themeContext";

function FooterDivider() {
  const { theme } = useTheme();
  return (
    <img
      src={theme === "light" ? pinkdivider : darkdivider}
      alt="a dashed line"
      className="pinkdivider"
      aria-hidden="true"
    />
  );
}

export default FooterDivider;
