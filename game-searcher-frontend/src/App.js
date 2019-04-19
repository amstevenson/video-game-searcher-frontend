import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import GameSearch from './containers/GameSearch/GameSearch';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <GameSearch />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
