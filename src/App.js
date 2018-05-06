import React, { Component } from 'react';
import dotenv from 'dotenv';
import request from 'superagent';

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
      max_id: '',
    }
    // Привязка необходима, чтобы сделать this доступным в коллбэке
    this.fetchPhotos = this.fetchPhotos.bind(this);
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
    const instagram_api_url = this.state.max_id 
     ? `https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.REACT_APP_INSTAGRAM_API}&count=5&max_id=${this.state.max_id}`
     : `https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.REACT_APP_INSTAGRAM_API}&count=5`;
    request
      .get(instagram_api_url)
      .then((res) => {
        console.log(res.body.pagination.next_max_id);
        this.setState({
          photos: [...this.state.photos, ...res.body.data],
          isPhotosLoaded: true,
          max_id: res.body.pagination.next_max_id,
        })
        console.log(this.state.max_id);
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
          <div className="row" style={{marginTop:"3em"}}>
            <ul className="actions">
              <li>
                <a href="#" onClick={() => this.fetchPhotos() } className="button special icon fa-download">Загрузить ещё</a>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  
}



export default App;
