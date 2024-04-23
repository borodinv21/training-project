import ProjectCard from "../../components/project_card/ProjectCard";

import axios from "axios";
import { useEffect, useState } from "react";

let projects_ = [];

export default function Projects() {
  const [state, setState] = useState({ details: [] });

  let rendered = false;
  let data;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/projects-list/")
      .then((res) => {
        data = res.data;
        setState({
          details: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    rendered = true;
  }, [rendered]);

  projects_ = state.details;

  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Мои проекты</h2>
          <ul className="projects">
            {state.details.map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  title={project.title}
                  img={project.image}
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

export { projects_ };
