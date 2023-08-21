import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProjects } from "../api/projectsApi";
import BigTitle from "../components/layout/bigtitle";
import SmallTitle from "../components/layout/smalltitle";
import Layout from "../components/layout/layout";
import Button from "../components/layout/button";
import spiralsquigglies from "../assets/images/spiralsquigglies.svg";
import darkspiralsquigglies from "../assets/images/darkspiralsquigglies.svg";
import "./project.css";
import { useTheme } from "../contexts/themeContext";
import { useThemeClass } from "../contexts/useThemeClass";

function Project() {
  const { theme } = useTheme();
  useThemeClass(theme);

  const { id } = useParams();
  const [datas, setInfos] = useState(null);

  useEffect(() => {
    fetchProjects().then((data) => {
      const projectData = data.find((f) => f._id === id);
      if (projectData) {
        setInfos(projectData);
      } else {
        setInfos("404");
      }
    });
  }, [id]);

  if (datas === "404") {
    return <Navigate to="/404" />;
  }

  if (!datas) {
    return null;
  }

  return (
    <Layout>
      <div className="projectpage">
        <section className="projectpage__titlecontainer">
          <h1 className="projectpage__title">{datas.title}</h1>
          <img
            src={theme === "light" ? spiralsquigglies : darkspiralsquigglies}
            alt=""
            className="projectpage__squiggly"
          />
        </section>

        <img src={datas.image} alt="" className="projectpage__image" />
        <div className="projectpage__buttoncontainer">
          {datas.liveUrl && (
            <Button className="project__button --buttontext">
              <a href={datas.liveUrl} target="_blank">
                live website
              </a>
            </Button>
          )}
          <Button className="project__button --buttontext">
            <a href={datas.repo} target="_blank">
              github repo
            </a>
          </Button>
        </div>
        <div className="projectpage__descriptionscontainer">
          <section className="projectpage__descriptions projectpage__text">
            <BigTitle>The</BigTitle>
            <SmallTitle>project</SmallTitle>
            <p>{datas.description}</p>
          </section>
          <section className="projectpage__descriptions projectpage__text">
            <BigTitle>What</BigTitle>
            <SmallTitle>i learned on the way</SmallTitle>
            <p>{datas.skills}</p>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default Project;
