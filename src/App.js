import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component{
  //Render : ComponentWillMount -> render() -> componentDidMount()
  //Update : ComponentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate -> render() -> componentDidMount()
  
  state = {}
  
  componentDidMount(){
    this._getMovies();
  }
 _getMovies =   async() => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }
  _callApi = () => {
    return fetch('https://yts.ag/api/v2/list_movies.json?sort_by=like_count')
    .then(response => response.json())
    .then(json =>  json.data.movies)
    .catch(err => console.log(err))
  }
  _renderMovies = () => {
    const movies = this.state.movies.map((movie) =>{
      console.log(movie)
      return <Movie title={movie.title_english} 
      poster={movie.medium_cover_image} 
      key={movie.id} 
      genres={movie.genres}
      synopsis={movie.synopsis}
      />
    })
    return movies
  }
  render() {
    return (
      <div className="App">
      {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
