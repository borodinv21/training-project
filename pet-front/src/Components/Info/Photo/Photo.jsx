import myphoto from "./Images/cat.jpeg";
import "./Photo.css";

export default function Photo() {
  return <img src={myphoto} alt="Моя фотография" className="photo" />;
}
