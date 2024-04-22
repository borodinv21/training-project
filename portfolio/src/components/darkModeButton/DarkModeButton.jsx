import { useEffect, useRef } from "react";
import { useLocalStorage } from "../../utils/UseLocalStorage";

import sun from "./img/icons/sun.svg";
import moon from "./img/icons/moon.svg";

import "./DarkModeButton.css";

export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", "Light");

  const buttonRef = useRef(null);

  useEffect(() => {
    if (darkMode === "Dark") {
      document.body.classList.add("dark");
      buttonRef.current.classList.add("dark-mode-btn--active");
    } else {
      document.body.classList.remove("dark");
      buttonRef.current.classList.remove("dark-mode-btn--active");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    console.log("DarMode on");
    setDarkMode((currentValue) => {
      return currentValue === "Light" ? "Dark" : "Light";
    });
  };

  return (
    <>
      <button
        ref={buttonRef}
        className="dark-mode-btn"
        onClick={toggleDarkMode}>
        <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
      </button>
    </>
  );
}
