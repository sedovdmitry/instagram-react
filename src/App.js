import React, { Component } from 'react';
import dotenv from 'dotenv';
import request from 'superagent';
import logo from './logo.svg';

dotenv.config();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }

  componentWillMount() {
    this.fetchPhotos();
  }

  fetchPhotos() {
    const instagram_api_url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='+process.env.REACT_APP_INSTAGRAM_API;
    console.log()
    request
      .get(instagram_api_url)
      .then((res) => {
        this.setState({
          photos: res.body.data
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Instagram</h1>
        </header>
        <div>
          {console.log(this.state.photos)}
        </div>
      </div>
    );
  }
}

export default App;
