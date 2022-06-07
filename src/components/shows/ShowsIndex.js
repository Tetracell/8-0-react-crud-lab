import React from "react";
import Error from "../common/Error";

// Helper functions
import { getAllShows } from "../../api/fetch";
import ShowLising from "./ShowsListing";

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
    return (
      <section className="shows-index-wrapper">
        <h2>All Shows</h2>
        <section className="shows-index">
          {this.state.shows.map((show) => {
            return <ShowLising show={show} key={show.id} />;
          })}
        </section>
      </section>
    );
  }
}

export default ShowsIndex;
