import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";


// const Movie = () => {
//     <div className='movie'>
//         this is movie
//     </div>
// }
function Movie({title, overview, poster_path, vote_average, release_date}) {
    return(
        <>
        <div className="movie">
            <img src={poster_path ? (IMG_API + poster_path) : 
            'https://static.vecteezy.com/system/resources/thumbnails/001/214/284/small_2x/movie-time-poster-with-cinema-elements-and-banner.jpg'} alt={title} />
            <div className='movie-box'>
                <div className="movie-info">
                    <h3>{title}</h3>
                    <span className='vote'>{vote_average}</span>
                </div>
                <div className="movie-over">
                    <h2>Overview:</h2>
                    <p>{overview}</p>
                </div>
                <div className="rel-date">
                    <h3>{release_date}</h3>
                </div>

            </div>
        </div>
        </>
    )
}

export default Movie;