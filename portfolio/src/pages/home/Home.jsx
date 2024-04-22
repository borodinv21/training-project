import Header from "../../components/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Мой стек технологий</h2>
              <p>
                Python, Django, Flask, PostgresSQL, React, HTML, CSS,
                JavaScript, Docker
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
