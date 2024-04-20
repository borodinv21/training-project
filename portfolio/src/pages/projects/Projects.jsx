import ProjectCard from "../../components/project_card/ProjectCard";
import projectImg1 from "./img/projects/01.jpg";
import projectImg2 from "./img/projects/02.jpg";
import projectImg3 from "./img/projects/03.jpg";
import projectImg4 from "./img/projects/04.jpg";
import projectImg5 from "./img/projects/05.jpg";
import projectImg6 from "./img/projects/06.jpg";

export default function Projects() {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </ul>
        </div>
      </main>
    </>
  );
}
