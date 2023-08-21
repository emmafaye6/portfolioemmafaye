import React, { useEffect, useState } from "react";
import { fetchProjects } from "../../api/projectsApi";
import BigTitle from "../layout/bigtitle";
import Button from "../layout/button";
import SmallTitle from "../layout/smalltitle";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/themeContext";
import checkoutSquiggly from "../../assets/images/checkoutsquigglies.svg";
import darkcheckoutSquiggly from "../../assets/images/darkcheckoutsquigglies.svg";
import "./projects.css";
import { BallTriangle } from "react-loader-spinner";

function Projects() {
  const { theme } = useTheme();
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects().then((data) => {
      setProjectsData(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="projects" id="projects">
      <BigTitle>Check out</BigTitle>
      <img
        src={theme === "light" ? checkoutSquiggly : darkcheckoutSquiggly}
        alt=""
        className="projects__squiggly"
        aria-hidden="true"
      />
      <SmallTitle>my projects</SmallTitle>
      {loading ? (
        <div className="projects__loader">
          <BallTriangle color="#EAB8B8" width="4rem" />
          <p className="project__description">Loading projects...</p>
        </div>
      ) : (
        <section className="projects__projectlist">
          {projectsData.map((project) => (
            <div key={project._id} className="project">
              <Link to={`/projects/${project._id}`}>
                {" "}
                <img
                  src={project.thumbnail}
                  alt=""
                  className="project__image"
                  loading="lazy"
                />
                <p className="project__title">{project.title}</p>
                <p className="project__description">{project.description}</p>
              </Link>
              <Link to={`/projects/${project._id}`}>
                <Button className="project__button --buttontext">
                  the project
                </Button>
              </Link>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default Projects;
