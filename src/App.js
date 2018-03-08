import React, { Component } from 'react';
import logo from './images/reel.png';
import './App.css';
import './Style/flatly.min.css';
import './main';
import ReactDOM from 'react-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" href="app.js">Movie Search</h1>
        </header>

          <div>

          <div className="container">
              <div className="jumbotron">
                  <h3 className="text-center">Enter Key Word for the Movie you want to search</h3>
                  <form id="searchForm">
                      <input type="text" className="form-control" id="searchText" placeholder="Search Movies..." />
                  </form>
              </div>
          </div>

          <div className="container">
              <div id="movies" className="row"></div>
          </div>
              <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
              <script src="main.js"></script>
          </div>
      </div>
    );
  }
}

ReactDOM.render(<main />, document.getElementById('root'));

export default App;
