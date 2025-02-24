import React from "react";
import { Link } from "react-router-dom";
import "./showList.css"

// Re-write all this crap with React Link and such

export default function ShowsListing({ show }) {
  const { title, description, duration, id, listedIn } = show;
  return (
    <>
      <article className="show">
        <h3 className="title">
          <Link to={`/shows/${id}`}> {title} </Link>
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
