import React,{useState,useEffect} from 'react'
import ReactPlayer from 'react-player';
import "bootstrap/dist/css/bootstrap.min.css";
import {Card,Button} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';

function Trailer(props) {
  const [movie, setMovie] = useState(null)
  useEffect ( ()=>setMovie(props.movies.filter(el => el.id===props.match.params.id)[0]))
    return (
        <div className="desc">
                                   
 {movie && ( <Card className="card" style={{ width: "50%", height:'100' ,fontSize: "18" }}>
  <Card.Img className="img" variant="top" src={movie.poster} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
 
    <Card.Text >
   {movie.description}
    </Card.Text>

    <Button variant="primary" onClick={props.history.goBack}>Home</Button>
    <StarRatingComponent 
    name="rate1" 
    starCount={5}
    value={movie.rate}
 
  />
  <ReactPlayer url={movie.trailer} controls={true}/>
  </Card.Body>



 
</Card>)}

            
        </div>
    )
}

export default Trailer
