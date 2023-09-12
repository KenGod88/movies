import React from "react";
import movies from "./moviesdb"; // Import your movies array
import { useState } from "react";
import LikeList from "./LikeList";


const MovieList = () => {

    const [likedMovies, setLikedMovies] = useState([]);

    const handleLikeClick = (e, movie) => {

        e.preventDefault();
        movie.liked = !movie.liked;


        if (movie.liked) {
            setLikedMovies([...likedMovies, movie]);

        } else {
            setLikedMovies(likedMovies.filter((likedMovie) => likedMovie.id !== movie.id));
        }
    };


    const scrollToMovie = (id) => {
        const movieElement = document.getElementById(id);

        if (movieElement) {
            movieElement.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <div>
            <nav id="likeList">
                <header>You like</header>
                <LikeList likedMovies={likedMovies} scrollToMovie={scrollToMovie} />
            </nav>
            <section id="movieList">
                <header>Currently playing</header>
                {movies.map((movie) => (

                    <section id={movie.id} className="movie" key={movie.id}>
                        <img className="image" src={movie.imageUrl} />
                        <header><span className="title">{movie.title}</span><a className="likeUnlike" href="" onClick={(e) => handleLikeClick(e, movie)}>{movie.liked ? "unlike" : "like"}</a></header>
                        <div className="description">{movie.description}</div>

                    </section>
                ))}

            </section>
        </div>



    );
};

export default MovieList;


