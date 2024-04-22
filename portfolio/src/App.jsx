import "./styles/main.css";
import "./styles/reset.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Contacts from "./pages/contacts/Contacts";
import ProjectPage from "./pages/projectPage/ProjectPage";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects/" element={<Projects />} />
          <Route path="contacts/" element={<Contacts />} />
          <Route path="project-page/:id" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
