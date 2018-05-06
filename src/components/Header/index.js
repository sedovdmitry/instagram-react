import React from 'react'
import './index.css'

const Header = ({data}) => {
    return (
        <header id="header">
          <div className="inner">
            <div>
              <span className="image left">
                <a href="https://www.instagram.com/saratovair/">
                    <img src={data.profile_picture} alt={data.full_name} />
                </a>
              </span>
              <h1 className="App-title">
                <a href="https://www.instagram.com/saratovair/">{data.full_name}</a>
              </h1>
              <p>
                Количество фото: {data.counts.media}
              </p>
            </div>
          </div>
        </header>
    )
}

export default Header;