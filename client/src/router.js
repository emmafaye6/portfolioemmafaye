import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Project from "../src/pages/project.js";
import PortfolioPage from "../src/pages/portfoliopage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/404" element={<Error />} />
      <Route path="*" element={<Navigate to="/404" />} />
      <Route path="projects/:id" element={<Project />} />
      <Route path="/projects/portfolio" element={<PortfolioPage />} />
    </Routes>
  );
}

export default Router;
