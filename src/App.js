import React, { Component } from 'react';
import logo from './images/reel.png';
import './App.css';
import './style/flatly.min.css';
import './main';
import 'sorttable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" href="app.js">Movie Search</h1>
        </header>

          <div id="searchArea">

          <div id='jumbotron' className="container">
              <div className="jumbotron">
                  <h3 className="text-center">Search for movies in IMDb</h3>
                  <form id="searchForm">
                      <input type="text" className="form-control" id="searchString" placeholder="Type in Your Search ..." />
                      <br></br>
                      <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
              </div>
          </div>

          <div className="container">

              <table id="table" className="table table-hover sortable" cellSpacing="0" width="100%">
                  <thead className="table-primary">
                  <tr>
                      <td>Title</td>
                      <td>Year</td>
                      <td>Type</td>
                      <td></td>
                  </tr>
                  </thead>
                  <tbody id="movies" className="table-hover">
                  </tbody>
              </table>
          </div>
          </div>
          <div id="movieInfo"></div>

      </div>
    );
  }
}


export default App;
