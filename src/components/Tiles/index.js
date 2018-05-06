import React from 'react'
import './index.css'
import Tile from '../Tile'

const Tiles = ({data}) => {
    return (
        <section className="tiles">
          {data.map(({caption, images, id, comments, likes, tags}) => 
            (
              <Tile 
                key={id}
                image={images.standard_resolution.url}
                description={caption.text}
                created_time={caption.created_time}
                comments={comments.count}
                likes={likes.count}
                tags={tags}
              />
            )
          )}
        </section>
    )
}

export default Tiles;