// import { query } from "express";
import React,{useState} from "react";

export default function SearchMovies(){
    const [query, setQuery] = useState("lion king");

    // create a useState for movies

    const [movies, setMovies] = useState([]);
    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("I am here!");
        // const query = "Jurassic Park";
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`; 
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
            console.log(movies);
            // console.log(data.results);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <>
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Jurassic Park" value={query} onChange= {e=>{
                    // e.preventDefault();
                    setQuery(e.target.value);
                }}/>
            <button className="button" type="submit">Search</button>
        </form>

        <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        <img className="card--image"
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title + ' poster'}
                            />

                            <div className="info">
                            <article>{movie.overview}</article>
                         <span>Release date: {movie.release_date}</span>
                            </div>
                    </div>
                ))}
            </div>       
        </>
    )
}