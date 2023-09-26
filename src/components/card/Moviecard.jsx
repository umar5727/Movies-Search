import React from 'react'
import './Moviecard.css'
const Moviecard = ({movies}) => {
  return (
    <div className='card'>
            <img src={movies.Poster} alt={movies.Title} />
            <h4 className='cardyear'>{movies.Year}</h4>
            <div className="cardtitle">
                <h4>{movies.Type}</h4>
                <p>{movies.Title}</p>
            </div>
    </div>
  )
}

export default Moviecard