import "./ProjectCard.css";
import { NavLink } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    <>
      <li className="project">
        <NavLink to={`/project-page/${props.index}`}>
          <img src={props.img} alt="Project img" className="project__img" />
          <p>{props.index}</p>
          <h3 className="project__title">{props.title}</h3>
        </NavLink>
      </li>
    </>
  );
}
