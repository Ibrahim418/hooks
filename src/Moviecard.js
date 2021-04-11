
import {Card,Button} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from 'react';
import {Link} from 'react-router-dom'

function Moviecard({movie}) {
  const [rating, setRating] = useState(1)
  const onStarClick=(nextValue, prevValue, name)=> {
     setRating( nextValue);
  } 
  
    return (
        <div  >
            
  <Card className="card" style={{ width: "50%", height:'100' ,fontSize: "18" }}>
  <Card.Img className="img" variant="top" src={movie.poster} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
 
    <Card.Text >
   {movie.description}
    </Card.Text>

    <Button variant="primary" >Play Movie</Button>
    <StarRatingComponent 
    name="rate1" 
    starCount={5}
    value={movie.rate}
    onStarClick={onStarClick}
  />
  <Link to ={`/Trailer/${movie.id}`}>description</Link>
 
  </Card.Body>
  

 
</Card>



</div>
    )
};

export default Moviecard

