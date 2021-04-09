
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form ,Navbar , Nav , Button , FormControl ,Modal} from 'react-bootstrap';
import React , {useState} from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { v4 as uuidv4 } from "uuid";

function Navb({movie,search,setRate,newRate,addmovie}) {
  const [show, setShow] = useState(false);
  
  const [NewMovie, setNewMovie] = useState({
    id: uuidv4(),
    title:"",
    discription:"",
    poster:"https://i.egycdn.com/pic/RHNhSUNlY21ZcG12Y21MTmJFY21ibHZjbW1tR2tORQ.jpg",
    rate:1
  });
  const [rating, setRating] = useState(1);
  const onStarClick =(nextValue,preValue, name)=>{
    setRate(nextValue)
  }

  const handleClose = () =>{
    setShow(false);
    addmovie(NewMovie)
    setNewMovie(
       {title:"",
    discription:"",
    poster:"",
    rate:1,
  })
  } 

  const handleShow = () => setShow(true);

  const handleChange=(e)=>{
    setNewMovie({
      ...NewMovie,[e.target.name]:e.target.value
    })
  }


    return (
        <div>
                    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Movie List</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      
      
      
      <Button variant="primary" onClick={handleShow}>
        ADD
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body><div>
              <div>
                <label className="input" style={{marginRight: 10}}>Title : </label>
                <input type="text" name="title" onChange={handleChange} />
              </div>
              <div>
                <label className="input" style={{marginRight: 10}}>Descript. :</label>
                <input type="text" name="description"  onChange={handleChange}/>
              </div>
              <div>
                <label className="input" style={{marginRight: 10}}>Poster :</label>
                <input type="text" name="posterUrl"  onChange={handleChange} />
              </div>
              <div>
                <label className="input" style={{marginRight: 10}}>Rate : </label>
                <input type="text" name="rate"  onChange={handleChange} />
              </div>
            </div>
            </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleClose}>
            Save Changes

          </Button>
        </Modal.Footer>
      </Modal>
    
    </Nav>
    <StarRatingComponent
          name="rate1" 
          starCount={5}
          value={newRate}
          onStarClick={onStarClick}
        />
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e)=> search(e.target.value)}/>
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
        </div>
    )
}

export default Navb
