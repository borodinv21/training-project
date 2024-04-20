import bigImg from "../projects/img/projects/01-big.jpg";
import GitHubButton from "../../components/gitHubButton/GitHubButton";

export default function ProjectPage() {
  return (
    <>
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">Video service</h1>

          <img src={bigImg} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>Skills: React, Node.js, MongoDB</p>
          </div>

          <GitHubButton link="https://github.com/borodinv21" />
        </div>
      </div>
    </>
  );
}
