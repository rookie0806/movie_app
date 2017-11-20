import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';



function Movie({title,poster,genres,synopsis}){
    return (
        <div className="Movie">
            <div className="Movie_Colums">
            <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie_Colums">
                <h1>{title}</h1>
                <div className="Movie_Genre">
                    {genres.map((genre,index) => <MovieGenre genre ={genre} key={index} />)}
                </div>
                <p className="Movie_Synopsis">
                    {synopsis}
                </p>
            </div>
            
        </div>
    )
}


function MoviePoster({poster,alt}){
    return (
        <img src={poster} alt = {alt} title = {alt} className="Movie_Poster"/>
    )
}
function MovieGenre({genre}){
    return (
        <span className="Movie_Genre">{genre} </span>
    )  
}
MoviePoster.PropTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}
Movie.PropTypes = {
    title: PropTypes.string,
    poster: PropTypes.string,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}
MovieGenre.PropTypes = {
    genre: PropTypes.string.isRequired
}
export default Movie 