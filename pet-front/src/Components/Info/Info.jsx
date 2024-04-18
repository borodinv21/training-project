import Photo from "./Photo/Photo";
import About from "./About/About";
import "./Info.css";

export default function Info() {
  return (
    <>
      <section>
        <div className="about-block">
          <div className="photo-block">
            <Photo></Photo>
          </div>
          <div className="about">
            <About></About>
          </div>
        </div>
      </section>
    </>
  );
}
