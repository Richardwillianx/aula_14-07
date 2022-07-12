import React from "react";
import { Title, Year } from "./styles";

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
