const URL = process.env.REACT_APP_API_BASE_URL;

export function getAllMovies() {
  return fetch(`${URL}/movies`).then((response) => response.json());
}

export function getAllShows() {
  return fetch(`${URL}/shows`).then((response) => response.json());
}

export function destroyShow(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/shows/${id}`, options).then((response) => {
    return response.json();
  });
}

export function createShow(title, description) {
  let encodedUrl = new URLSearchParams();
  encodedUrl.append("title", title);
  encodedUrl.append("description", description);
  // What is going to be passed in? Title, Description, Duration, Year...
  const options = {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: encodedUrl,
  };
  return fetch(`${URL}/shows/`, options).then((response) => {
    return response.json();
  });
}

export function createMovie(title, description) {
  let encodedUrl = new URLSearchParams();
  encodedUrl.append("title", title);
  encodedUrl.append("description", description);

  const options = {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: encodedUrl,
  };
  return fetch(`${URL}/movies/`, options); // Do I need the .then return?
}
