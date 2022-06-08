import React from "react";
import { useParams, useHistory } from "react-router-dom";
import "./Movie.css";
import Error from "../common/Error"

export default function Movie({ movies }) {
  const { id } = useParams();
  const { history } = useHistory();
  const movie = movies.find((movie) => movie.id === id);
  const handleClick = () => {
    history.pushState("/movies");
  };
  return (
    <section className="movies-class-wrapper">
      {!movie ? (
        <Error />
      ) : (
        <>
          <h2>{movie.title}</h2>
          <section className="movies-movie">
            <aside>
              <p>
                <span>Duration:</span>{" "}
                {movie.duration ? movie.duration : "No duration listed"}
              </p>
              <p>
                <span>Country:</span> {movie.country}
              </p>
              <p>
                <span>Rating:</span> {movie.rating}
              </p>
              <p>
                <span>Date Added:</span> {movie.dateAdded}
              </p>
            </aside>
            <article>{movie.description}</article>
          </section>
        </>
      )}
    </section>
  );
}
