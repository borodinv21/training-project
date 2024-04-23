import "./ProjectCard.css";
import { NavLink } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    <>
      <li className="project">
        <NavLink to={`/project-page/${props.index}`}>
          <img src={props.img} alt="Projectimg" className="project__img" />
          <h3 className="project__title">{props.title}</h3>
        </NavLink>
      </li>
    </>
  );
}
