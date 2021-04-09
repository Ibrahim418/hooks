import React from 'react'
import Moviecard from './Moviecard'


function Movielist({movies,handleClose,show,handleRemove}) {
    return (
        <div className="movie">
           { movies.map( el => <Moviecard  handleRemove={ handleRemove} movie={el}/>) } 
           
        </div>
    )
}

export default Movielist

