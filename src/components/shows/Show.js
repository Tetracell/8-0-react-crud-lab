import React from "react";
import { useParams, useHistory } from "react-router-dom";
import "./Show.css";
import Error from "../common/Error";
import { withRouter } from "react-router-dom";

export default function Show({ shows, handleDelete }) {
  const { id } = useParams();
  const history = useHistory();
  const show = shows.find((show) => show.id === id);
  const handleClick = () => {
    history.push("/shows");
  };
  return (
    <section className="shows-class-wrapper">
      {!show ? (
        <Error />
      ) : (
        <>
          <h2>{show.title}</h2>
          <section className="shows-show">
            <aside>
              <p>
                <span>Duration:</span>{" "}
                {show.duration ? show.duration : "No duration listed"}
              </p>
              <p>
                <span>Country:</span> {show.country}
              </p>
              <p>
                <span>Rating:</span> {show.rating}
              </p>
              <p>
                <span>Date Added:</span> {show.dateAdded}
              </p>
            </aside>
            <article>{show.description}</article>
            <aside>
              <button value={id} onClick={handleDelete} class="delete">
                Remove show
              </button>
            </aside>
            <aside>
              <button value={id} onClick={handleClick} class="delete">
                Go back
              </button>
            </aside>
          </section>
        </>
      )}
    </section>
  );
}
