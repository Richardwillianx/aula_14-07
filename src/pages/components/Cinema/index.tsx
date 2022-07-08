import React from "react";
import { Title, Year } from "./styles";

/* type CinemaProps = {
  title: string;
  year?: number;
  children: React.ReactNode;
}; */

type CinemaProps = {
  movies: MoviesProps[];
  children: React.ReactNode;
};

type MoviesProps = {
  title: string;
  year?: number;
};

export default function Cinema({ movies, children }: CinemaProps) {
  return (
    <>
      <h2>Cinema Santa Rosa</h2>
      {movies.map((movie) => {
        return (
          <div>
            <Title>{movie.title}</Title>
            <Year>{movie.year}</Year>
          </div>
        );
      })}
      {children}
    </>
  );
}

{
  /*  const props = {
    title: "Buzz Lightyear",
    year: 2022,
}; */
}

{
  /* const { title, year } = props;
   */
}

{
  /*  <h1>Vamos ao Cinema?</h1>
     <strong>{title}</strong>
     <p>{year}</p>
     {children}
   </> */
}
