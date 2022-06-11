import React from "react";
import Error from "../common/Error";
import Show from "./Show.js";
import { destroyShow } from "../../api/fetch";

// Helper functions
import { getAllShows } from "../../api/fetch";
import { Switch, Route, withRouter } from "react-router-dom";
import ShowsListing from "./ShowsListing";

class ShowsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      loadingError: false,
    };
  }

  handleDelete(e) {
    const id = e.target.value;
    console.log("I have been pressed");
    try {
      destroyShow(id).then(() => {
        const index = this.state.filter.findIndex(
          (show) => show.id === id
        );
        const updatedShows = [...this.state.shows];
        updatedShows.splice(index, 1);
        this.setState({ shows: updatedShows, });
        this.props.history.push("/shows");
      });
    } catch (err) {
      console.log(err);
    }
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
    if (this.state.loadingError) {
      <Error />;
    }
    return (
      <Switch>
        <Route path="/shows/:id">
          <Show shows={this.state.shows} handleDelete={this.handleDelete}/>
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

export default withRouter(ShowsIndex);
