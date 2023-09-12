import React from 'react';

import './App.css';
import movies from './components/moviesdb';
import MovieList from './components/MovieList';
import LikeList from './components/LikeList';


function App() {
  return (
    <div className="content">

      <MovieList />

    </div>
  );
}

export default App;
