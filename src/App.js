import React, { Component } from 'react';
import logo from './Face-grin.svg';
import './App.css';
import MovieSearch from './MovieSearch';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>VERY VERY SPECIAL MOVIE FINDER</h3>
        
        </div>
        <br />
        <MovieSearch />
      </div>
    );
  }
}

export default App;
