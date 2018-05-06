import React from 'react'
import './index.css'
import Tile from '../Tile/index.js';

const Tiles = ({data}) => {
    console.log(data)
    return (

        <section className="tiles">
          {data.map(({caption, images, id}) => 
            (
              <Tile 
                key={id}
                image={images.standard_resolution.url}
                description={caption.text}
                created_time={caption.created_time}
              />
            )
          )}
        </section>
    )
}

export default Tiles;