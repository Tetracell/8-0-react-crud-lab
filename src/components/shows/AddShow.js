import React from "react";

export default function AddShow() {

  return (
    <>
      <form className="addShow" id="addShow">
        <label for="title">Show Title: </label>
        <input type="text" name="title" id="title"></input>
        <br></br>
        <label for="description">Show Description:</label>
        <input type="text" name="description" id="description"></input>
        <br></br>
        <button ></button>
      </form>
    </>
  );
}
