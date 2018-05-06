import React from 'react'
import './index.css'

const Tile = ({image, description, created_time}) => {
    console.log(image, description, created_time)
    return (
        
              <article className="">
                <span className="image">
                  <img src={image} alt="content" />
                </span>
                <a href="#">
                  <h2>123</h2>
                  <div className="content">
                      <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                  </div>
                </a>
              </article>
    )
}

export default Tile;