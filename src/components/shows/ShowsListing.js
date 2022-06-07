import React from "react";
import { Link } from "react-router-dom";

// Re-write all this crap with React Link and such


export default function ShowLising(props) {
  return (
    <>
      <article className="show">
        <h3 className="title">
          <Link to={`/show/${props.show.id}`}>Title property</Link>
        </h3>
        <p className="description">Description propety</p>
        <aside className="details">
          <p>
            <span>Listed Categories:</span> ListedIn property
          </p>
          <p>
            <span>Duration:</span> Duration property
          </p>
        </aside>
      </article>
    </>
  );
}
