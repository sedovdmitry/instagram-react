import React, { Component } from 'react';
import dotenv from 'dotenv';
import request from 'superagent';
import logo from './logo.svg';

dotenv.config();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Intagram</h1>
        </header>
      </div>
    );
  }
}

export default App;
