import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFormSubmit = event => {
    event.preventDefault();
    const searchedMovies = event.currentTarget.elements.searchMovieId.value;
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="searchMovieId" required />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Movies;
