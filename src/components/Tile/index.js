import React from 'react'
import './index.css'
import {format} from 'date-fns'

const Tile = ({image, description, created_time, comments, likes, tags, link}) => {
    const tagsEl = tags.length ? (
      <li className="icon fa-tags"> {tags.join(", ")}</li>
    ) : ('');
    const date = format(new Date().setTime(created_time*1000), 'DD.MM.YYYY');

    return (
      <article>
        <span className="image">
          <img src={image} alt={description} />
        </span>
        <a href={link} target="_blank">
          <h2>{description}</h2>
          <div className="content">
              <p>{description}</p>
          </div>
        </a>
        <ul className="icons">
          <li className="icon style2 fa-heart"> {likes}</li>
          <li className="icon style2 fa-comment"> {comments}</li>
          <li className="icon style2">{date}</li>
          {tagsEl}
        </ul>
      </article>
    )
}

export default Tile;