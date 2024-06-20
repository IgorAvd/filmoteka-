import { useState } from 'react'
import { Movie } from '../../components/Trending/Trending';
import { SelectedMoviesItem } from '../../components/SelectedMoviesItem/SelectedMoviesItem';
import { SelectedMoviesList } from '../../components/SelectedMoviesItem/SelectedMoviesItem.styled';
import { PageTitle } from './SelectedMovies.styled';

const SelectedMovies = () => {
  const [selectedFilms, _] = useState<Movie[]>(() => {
    const storedSelectedFilms = localStorage.getItem("selectedFilms");
    return storedSelectedFilms ? JSON.parse(storedSelectedFilms) : [];
  });

  return (
    <div style={{marginTop: "130px", textAlign: "center"}}>
      {selectedFilms.length === 0 ? (
        <PageTitle>There are no selected films yet</PageTitle>
      ) : (
        <SelectedMoviesList>
          {selectedFilms.map((movie) => (
            <SelectedMoviesItem key={movie.id} selected={movie} />
          ))}
        </SelectedMoviesList>
      )}
    </div>
  );
}

export default SelectedMovies