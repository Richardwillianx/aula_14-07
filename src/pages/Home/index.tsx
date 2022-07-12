import { Link } from "react-router-dom";
import Cinema from "../../components/Cinema";
import Temperatura from "../Temperatura";

export default function Home() {
  const movies = [
    {
      title: "Thor",
      year: 2022,
    },
    {
      title: "Top Gun",
      year: 2022,
    },
  ];
  return (
    <>
      <h1>Home</h1>
      <Cinema movies={movies} />
      <div>
        <Link to="/Temperatura">
          <button>Temperatura</button>
        </Link>
        <p>
          <Link to="/Filtro">
            <button>Filtro</button>
          </Link>
        </p>
        <p>
          <Link to="/Revisao">
            <button>Revisão</button>
          </Link>
        </p>
        <p>
          <Link to="/atividade">
            <button>Atividades com Hooks</button>
          </Link>
        </p>
      </div>
    </>
  );
}
