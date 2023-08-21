import divider from "../../assets/images/divider.svg";
import darkdivider from "../../assets/images/darkdivider.svg";
import { useTheme } from "../../contexts/themeContext";

function Divider() {
  const { theme } = useTheme();
  return (
    <img
      src={theme === "light" ? divider : darkdivider}
      alt="a dashed line"
      className="divider"
      aria-hidden="true"
    />
  );
}

export default Divider;
