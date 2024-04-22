import "./Footer.css";
import github from "./img/gitHub.svg";
import telegram from "./img/telegram.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="#!">
                  <img src={github} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={telegram} alt="Link" />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
