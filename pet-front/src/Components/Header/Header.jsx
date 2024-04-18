import Button from "../Button/Button";
import "./Header.css";

export default function Header({ active, onClick }) {
  return (
    <>
      <div className="header_">
        <Button
          name={"Обо мне"}
          isActive={active === "info"}
          onClick={() => onClick("info")}>
          Обо мне
        </Button>
        <Button
          name={"Мои проекты"}
          isActive={active === "projects"}
          onClick={() => onClick("projects")}>
          Мои проекты
        </Button>
      </div>
    </>
  );
}
