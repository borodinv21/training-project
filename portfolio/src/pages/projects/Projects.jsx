import ProjectCard from "../../components/project_card/ProjectCard";

import { projectsList } from "../../helpers/projectsList";

export default function Projects() {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Мои проекты</h2>
          <ul className="projects">
            {projectsList.map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  title={project.title}
                  img={project.img}
                  index={index}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}
