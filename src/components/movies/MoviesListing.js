import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Re-write all this crap with React Link and such

export default function MoviesListing({ movie }) {
  const { title, description, duration, id, listedIn } = movie;
  const params = useParams();
  console.log(params);

  return (
    <>
      <article className="movie">
        <h3 className="title">
          <Link to={`/movies/${id}`}> {title} </Link>
        </h3>
        <p className="description">{description}</p>
        <aside className="details">
          <p>
            <span>Listed Categories:</span>{" "}
            {listedIn ? listedIn : "No categories available"}
          </p>
          <p>
            <span>Duration:</span> {duration ? duration : "No duration listed"}
          </p>
        </aside>
      </article>
    </>
  );
}
