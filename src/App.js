import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AboutMePage from "./Pages/AboutMe/AboutMePage";
import SkillsPage from "./Pages/Skills/SkillsPage";
import ProjectsPage from "./Pages/Projects/ProjectsPage";
import TestimonialsPage from "./Pages/Testimonials/TestimonialsPage";
import ContactMePage from "./Pages/ContactMe/ContactMePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutme" element={<AboutMePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contactme" element={<ContactMePage />} />
      </Routes>
    </Router>
  );
}

export default App;
