import { useParams } from "react-router-dom";

import GitHubButton from "../../components/gitHubButton/GitHubButton";

import { projects_ } from "../projects/Projects";

export default function ProjectPage() {
  const { id } = useParams();

  return (
    <>
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{projects_[id]["title"]}</h1>

          <img
            src={projects_[id]["image_big_size"]}
            alt=""
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>{projects_[id]["skills"]}</p>
          </div>

          <GitHubButton link={projects_[id]["git_hub_link"]} />
        </div>
      </div>
    </>
  );
}
