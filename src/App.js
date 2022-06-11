import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Nav from "./components/common/Nav";
import Home from "./components/home/Home";
import ShowsIndex from "./components/shows/ShowsIndex";
import MoviesIndex from "./components/movies/MoviesIndex";
import AddShow from "./components/shows/AddShow"
import Footer from "./components/common/Footer";

const App = () => (
  <div className="wrapper">
    <Nav />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/shows">
        <ShowsIndex />
      </Route>
      <Route path="/movies">
        <MoviesIndex />
      </Route>
      <Route path="/addshow">
        <AddShow />
      </Route>
    </Switch>
    <Footer />
  </div>
);

export default App;
