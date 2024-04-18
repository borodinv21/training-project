import axios from "axios";
import { useState, useEffect } from "react";

export default function Projects() {
  const [state, setState] = useState({ details: [] });

  let rendered = false;
  let data;

  useEffect(() => {
    axios
      .get("http://localhost:8000/backend-api/")
      .then((res) => {
        data = res.data;
        setState({
          details: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    rendered = true;
  }, [rendered]);

  return (
    <>
      <h1>Мои проекты</h1>
      <ul>
        {state.details.map((output, id) => (
          <div key={id}>
            <h2>{output.name}</h2>
          </div>
        ))}
      </ul>
    </>
  );
}
