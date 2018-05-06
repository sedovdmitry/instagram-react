import React from 'react'
import './index.css'

const Header = ({data}) => {
    return (
        <header id="header">
          <div className="inner">
            <div>
              <span className="image left">
                <img src={data.profile_picture} alt={data.full_name} />
              </span>
              <h1 className="App-title">{data.full_name}</h1>
              <p>
                Количество фото: {data.counts.media}
              </p>
            </div>
          </div>
        </header>
    )
}

export default Header;