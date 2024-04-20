import "./ProjectCard.css";
import projectImg1 from "../../pages/projects/img/projects/01.jpg";

export default function ProjectCard() {
  return (
    <>
      <li className="project">
        <a href="./project-page.html">
          <img src={projectImg1} alt="Project img" className="project__img" />
          <h3 className="project__title">Gaming streaming portal</h3>
        </a>
      </li>
    </>
  );
}
