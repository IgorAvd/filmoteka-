import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ImageContainer,
  StyledCheckbox,
  TrendingItemContainer,
  TrendingItemTitleMovie,
  TrendingListItem,
  buttonStyles,
} from "./TrendingItem.styled";
import { Button } from "@mui/material";
import { CustomModal } from "../Modal/Modal";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Favorite } from "@mui/icons-material";

type Movie = {
  id: number;
  poster_path: string;
  original_title?: string;
  title: string;
  release_date?: string;
  overview?: string;
  media_type: string;
};

type TrendingItemProp = {
  movie: Movie;
  selectedFilms: Movie[];
  onToggleFavorite: (movie: Movie) => void;
};

export const TrendingItem: FC<TrendingItemProp> = ({
  movie,
  selectedFilms,
  onToggleFavorite,
}) => {
  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  

  useEffect(() => {
    setIsChecked(selectedFilms.some((film) => film.id === movie.id));
  }, [selectedFilms, movie.id]);

  const handleCheckboxChange = () => {
    onToggleFavorite(movie);
  };

  return (
    <TrendingListItem key={movie.id}>     
      <ImageContainer>
        <img
          onClick={() => setOpen(!open)}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aL_HlffoXMrgiodMTTldQmRpCJIJ9T6jOLN9hmm_kQ&s"
          }
          alt={movie.original_title}
        />
        <StyledCheckbox
          checked={isChecked}
          onChange={handleCheckboxChange}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite style={{ color: "red" }} />}
        />
      </ImageContainer>
      <CustomModal
        release={movie.release_date}
        title={movie.title}
        poster={movie.poster_path}
        open={open}
        handleClose={() => setOpen(false)}
        overview={movie.overview}
      />
      <TrendingItemContainer>
        <TrendingItemTitleMovie>{movie.title}</TrendingItemTitleMovie>
        <Button
          component={Link}
          to={`/movies/${movie.id}`}
          variant="contained"
          sx={buttonStyles}
        >
          More
        </Button>        
      </TrendingItemContainer>
    </TrendingListItem>
  );
};
