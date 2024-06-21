import { useState } from 'react'
import { Movie } from '../../components/Trending/Trending';
import { SelectedMoviesItem } from '../../components/SelectedMoviesItem/SelectedMoviesItem';
import { SelectedMoviesList } from '../../components/SelectedMoviesItem/SelectedMoviesItem.styled';
import { PageTitle, SelectedMoviesBox } from './SelectedMovies.styled';

const SelectedMovies = () => {
  const [selectedFilms, _] = useState<Movie[]>(() => {
    const storedSelectedFilms = localStorage.getItem("selectedFilms");
    return storedSelectedFilms ? JSON.parse(storedSelectedFilms) : [];
  });

  return (
    <SelectedMoviesBox>
      {selectedFilms.length === 0 ? (
        <PageTitle>There are no selected films yet</PageTitle>
      ) : (
        <SelectedMoviesList>
          {selectedFilms.map((movie) => (
            <SelectedMoviesItem key={movie.id} selected={movie} />
          ))}
        </SelectedMoviesList>
      )}
    </SelectedMoviesBox>
  );
}

export default SelectedMovies