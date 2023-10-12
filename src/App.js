// App.js
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'The Survivor',
      description: 'Drama historique',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKgYhnCIsxfQVrqYhPtTIwwj9vZY1N5gTc3Flmn3I&s',
      rating: 4,
    },
    {
      title: 'Athena',
      description: 'Drame/action',
      posterURL: 'https://imgr.cineserie.com/2023/05/2201086.jpg?imgeng=/f_jpg/cmpr_0/w_169/h_253/m_cropbox&ver=1',
      rating: 3,

    },
    // Add more movies as needed
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = (filters) => {
    const filtered = movies.filter((movie) => {
      return (
        movie.title.includes(filters.title) &&
        movie.rating >= parseFloat(filters.rating)
      );
    });
    setFilteredMovies(filtered);
  };

  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
  });

  const handleAddMovie = () => {
    setMovies([...movies, newMovie]);
    // Clear the form for the next movie
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: 0,
    });
  };

  return (
    <div className="app">
      <h1>Movie Library</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
      <div className="add-movie-form">
        <h2>Add a New Movie</h2>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: parseFloat(e.target.value) })}
        />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>
    </div>
  );
};

export default App;


