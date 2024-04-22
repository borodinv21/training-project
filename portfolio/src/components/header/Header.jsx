import "./Header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>
              Привет, меня зовут <em>Вячеслав</em>
            </strong>
            <br />я Python Backend Разработчик
          </h1>
          <div className="header__text">
            <p>Создаю, Ломаю, Чиню</p>
          </div>
        </div>
      </header>
    </>
  );
}
