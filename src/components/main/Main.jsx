import React, { useEffect, useState } from "react";
import Moviecard from "../card/Moviecard";
import "./Main.css";

//api key  9fd5c5b6
const Main = () => {
  const [searchTitle, setsearchTitle] = useState([]);
  const [movie, setmovie] = useState([]);
 
  const Api_url = "https://omdbapi.com?apikey=9fd5c5b6";

  const moviesearch = async (title) => {
    let Response = await fetch(`${Api_url}&s=${title}`);
    const data = await Response.json();
    setmovie(data.Search);
    
  };

  useEffect(() => {
    moviesearch('bollywood');
  }, []);

  let handleClick=()=>{
    moviesearch(searchTitle);
  }
  return (
    <div>
      <section className="search">
        <input
          type="text"
          placeholder="Search Movies"
          value={searchTitle}
          onChange={(e) => {
            setsearchTitle(e.target.value);
          }}
        />
        <img 
        src="./search.svg" 
        alt="search" 
        onClick={handleClick}
        />
      </section>

      {movie?.length > 0 ? (
        <div className="cardContainer">
          {movie.map((allmovie) => (
            <Moviecard movies={allmovie} />
          ))}
        </div>
      ) : (
        <div className="not_found">
          <h2>no movie found</h2>
        </div>
      )}
    </div>
  );
};

export default Main;
