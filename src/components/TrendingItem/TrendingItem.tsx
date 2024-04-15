import { FC } from "react";
import { Link } from "react-router-dom";
import {
  TrendingItemContainer,
  TrendingItemTitleMovie,
  TrendingLi,
  buttonStyles,
} from "./TrendingItem.styled";
import { Button } from "@mui/material";

type TrendingItemProp = {
  movie: {
    id: number;
    poster_path: string;
    original_title?: string;
    title: string;
  };
};

export const TrendingItem: FC<TrendingItemProp> = ({ movie }) => {
  return (
    <TrendingLi key={movie.id}>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aL_HlffoXMrgiodMTTldQmRpCJIJ9T6jOLN9hmm_kQ&s"
        }
        alt={movie.original_title}
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
    </TrendingLi>
  );
};
