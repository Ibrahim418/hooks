
import './App.css';
import React,{useState} from 'react';
import Movielist from './Movielist.js';
import { v4 as uuidv4 } from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navb from './Navb';
function App() {
  const [keyword, setKeyword] = useState("")

  const [movies, setMovie] = useState(
    [
      {id: uuidv4(), title:"Good Fellas",discription : "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",poster:'/good (2).jpg',rate:4},
      {id: uuidv4(), title:"john wick",discription : "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",poster:'/john1.jpg',rate:3},
      {id: uuidv4(), title:"shawshank redemption",discription : "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",poster:'/shawsh1.jpg',rate:5},
      {id: uuidv4(), title:"Star Wars",discription : "The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end.",poster:'/star (2).jpg',rate:2},

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

   console.log(movies)
   console.log(newRate)
  
    return (
      
      <div className="App">
      <Navb search={search} setRate={setRate} newRate={newRate} addmovie={addmovie}/>
      <Movielist movies={movies.filter( el => el.rate >= newRate && el.title.toUpperCase().includes(keyword.toUpperCase().trim()))}/> 
        
       
      </div>
  );
}

export default App;
