import React, { Component } from 'react';
import dotenv from 'dotenv';
import request from 'superagent';
import logo from './logo.svg';

import Header from './components/Header';
import Tiles from './components/Tiles';

dotenv.config();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      user: [],
      isUserLoaded: false,
      isPhotosLoaded: false,
    }
  }

  componentWillMount() {
    this.fetchPhotos();
    this.fetchUser();
  }

  fetchUser() {
    const instagram_api_url_user = `https://api.instagram.com/v1/users/self/?access_token=${process.env.REACT_APP_INSTAGRAM_API}`;
    request
      .get(instagram_api_url_user)
      .then((res) => {
        this.setState({
          user: res.body.data,
          isUserLoaded: true
        })
      })
  }

  fetchPhotos() {
    const instagram_api_url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.REACT_APP_INSTAGRAM_API}&count=5`;
    console.log()
    request
      .get(instagram_api_url)
      .then((res) => {
        this.setState({
          photos: res.body.data,
          isPhotosLoaded: true
        })
      })
  }

  render() {
    const header = this.state.isUserLoaded && <Header data={this.state.user} />
    const tiles  = this.state.isPhotosLoaded && <Tiles data={this.state.photos} />
    return (
      <div id="wrapper">
        {header}
        <hr />
        <div id="main">
          <div className="inner">
            {tiles}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
