import { useParams } from "react-router-dom";
import bigImg from "../projects/img/projects/01-big.jpg";
import { projectsList } from "../../helpers/projectsList";
import GitHubButton from "../../components/gitHubButton/GitHubButton";

export default function ProjectPage() {
  const { id } = useParams();

  return (
    <>
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{projectsList[id]["title"]}</h1>

          <img
            src={projectsList[id]["bigImg"]}
            alt=""
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>{projectsList[id]["skills"]}</p>
          </div>

          <GitHubButton link={projectsList[id]["gitLink"]} />
        </div>
      </div>
    </>
  );
}
