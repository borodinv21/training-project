import { NavLink } from "react-router-dom";
import DarkModeButton from "../darkModeButton/DarkModeButton";

import "./Navbar.css";

export default function Navbar() {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <NavLink to="/" className="logo">
              <strong>Портфолио</strong> разработчика
            </NavLink>

            <DarkModeButton />

            <ul className="nav-list">
              <li className="nav-list__item">
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return isActive ? activeLink : normalLink;
                  }}>
                  Главная
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink
                  to="projects/"
                  className={({ isActive }) => {
                    return isActive ? activeLink : normalLink;
                  }}>
                  Проекты
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink
                  to="contacts/"
                  className={({ isActive }) => {
                    return isActive ? activeLink : normalLink;
                  }}>
                  Контакты
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
