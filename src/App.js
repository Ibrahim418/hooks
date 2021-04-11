
import './App.css';
import React,{useState} from 'react';
import Movielist from './Movielist.js';
import { v4 as uuidv4 } from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom' ;
import Navb from './Navb';
import Trailer from './Trailer';
function App() {
  const [keyword, setKeyword] = useState("")

  const [movies, setMovie] = useState(
    [
      {id: uuidv4(), title:"Good Fellas",description : "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",poster:'/good (2).jpg',rate:4,trailer:'https://www.youtube.com/watch?v=qo5jJpHtI1Y'},
      {id: uuidv4(), title:"john wick",description : "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",poster:'/john1.jpg',rate:3,trailer:"https://www.youtube.com/watch?v=2AUmvWm5ZDQ"},
      {id: uuidv4(), title:"shawshank redemption",description : "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",poster:'/shawsh1.jpg',rate:5,trailer:"https://www.youtube.com/watch?v=6hB3S9bIaco"},
      {id: uuidv4(), title:"Star Wars",description : "The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end.",poster:'/star (2).jpg',rate:2,trailer:"https://www.youtube.com/watch?v=8Qn_spdM5Zg"},

    ]);

    const addmovie=(newmovie)=>{
      setMovie([...movies,newmovie])
    }
   

    const search=(text)=>{
    setKeyword(text)
    }

    const [newRate, setNewRate] = useState(1)

    const setRate = (rate)=>{
      setNewRate(rate)

    }
    // const handleRemove=(id)=>{
    //   const newList =movie.filter((el)=>el.id!==id);
    //   setMovie(newList)
    // }

   console.log(newRate)
  
    return (
      <Router>
      <div className="App">
      <Navb search={search} setRate={setRate} newRate={newRate} addmovie={addmovie}/>
      
     
      <Movielist movies={movies.filter( el => el.rate >= newRate && el.title.toUpperCase().includes(keyword.toUpperCase().trim()))}/> 
     
      <Route path='/Trailer/:id' render={(props)=><Trailer {...props} movies={movies}/>}>
     
      </Route>
   
       
      </div>
      </Router>
  );
}

export default App;
