"use strict";

import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  constructor() {
    super();
    this.state = { movies: [] };
  }

  componentWillMount() {
    const apiKey = "&apikey=1ddd3fff";
    const encodedKey = encodeURI(apiKey);

    axios
      .get("http://www.omdbapi.com/?s=" + searchString + encodedKey)
      .then((response) => {
        this.setState({
          movies: response,
        });
      });
  }

  render() {
    var items = _.map(this.state.movies, (movie) => {
      if (_.includes(movie.Title, "Star Wars")) {
        return movie.Title;
      }
    });

    items = _.compact(items);

    items = _.map(items, (item) => {
      return <li>{item}</li>;
    });

    return (
      <div>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default Home;
