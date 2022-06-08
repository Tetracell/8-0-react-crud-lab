import React from "react";
import Error from "../common/Error";
import Show from "./Show.js";

// Helper functions
import { getAllShows } from "../../api/fetch";
import { Switch, Route } from "react-router-dom";
import ShowsListing from "./ShowsListing";

class ShowsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      loadingError: false,
    };
  }

  componentDidMount() {
    getAllShows()
      .then((shows) => this.setState({ shows, loadingError: false }))
      .catch((error) => {
        console.error(error);
        this.setState({ loadingError: true });
      });
  }

  render() {
    if(this.state.loadingError){ <Error/>}
    return (
      <Switch>
        <Route path="/shows/:id">
          <Show shows={this.state.shows}/>
        </Route>
        <section className="shows-index-wrapper">
          <h2>All Shows</h2>
          <section className="shows-index">
            {this.state.shows.map((show) => {
              return <ShowsListing show={show} key={show.id} />;
            })}
          </section>
        </section>
      </Switch>
    );
  }
}

export default ShowsIndex;
