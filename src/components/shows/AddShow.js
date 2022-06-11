import React from "react";
import { useState } from "react";
import { createShow } from "../../api/fetch";

export default function AddShow() {
  //console.log(createShow('fake show', "FAJORA RKOAWRKAOWRKQRQRQKF QKAR )KQR"));
  const [titleText, settitleText] = useState('');
  const [descriptionText, setdescriptionText] = useState('');

  const handleAdd = ((title, description)=> {
    console.log("I am adding a show");
    console.log(title, description)
    try {
      createShow(title, description);
    } catch (err) {
      console.log(err);
    }
  })

  return (
    <>
      <form className="addShow" id="addShow">
        <label for="title">Show Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={titleText}
          onChange={(e) => settitleText(e.target.value)}
        ></input>
        <br></br>
        <label for="description">Show Description: </label>
        <input
          type="text"
          name="description"
          id="description"
          value={descriptionText}
          onChange={(e) => setdescriptionText(e.target.value)}
        ></input>
        <br></br>
        <button
          onClick={(() => handleAdd(titleText, descriptionText))} // Wrapped in anon function to prevent firing on every udpate
          className="submit"
        >Add Show</button>
      </form>
    </>
  );
}
