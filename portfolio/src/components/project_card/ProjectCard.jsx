import "./ProjectCard.css";
import projectImg1 from "../../pages/projects/img/projects/01.jpg";

export default function ProjectCard(props) {
  return (
    <>
      <li className="project">
        <a href="./project-page.html">
          <img src={props.img} alt="Project img" className="project__img" />
          <h3 className="project__title">{props.title}</h3>
        </a>
      </li>
    </>
  );
}
