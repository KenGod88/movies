import React from "react";


const LikeList = ({ likedMovies, scrollToMovie }) => {

    return (
        <nav id="likeList">
            <header>You like</header>
            {likedMovies.map((movie) => (
                <div className="movie">
                    <a className="link" onClick={() => scrollToMovie(movie.id)}>
                        <img className="image" src={movie.imageUrl} />
                    </a>
                </div>
            ))}
        </nav>


    )
};

export default LikeList;