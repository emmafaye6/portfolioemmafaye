import Layout from "../components/layout/layout";
import Divider from "../components/layout/divider";
import HeroBanner from "../components/herobanner/herobanner";
import About from "../components/about/about";
import Projects from "../components/projects/projects";
import Portfolio from "../components/portfolio/portfolio";
import Contact from "../components/contact/contact";
import { useTheme } from "../contexts/themeContext";
import { useThemeClass } from "../contexts/useThemeClass";

function Home() {
  const { theme } = useTheme();
  useThemeClass(theme);

  return (
    <Layout>
      <HeroBanner />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Portfolio />
      <Divider />
      <Contact />
    </Layout>
  );
}

export default Home;
