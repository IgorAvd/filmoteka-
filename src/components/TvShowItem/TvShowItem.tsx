import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  TrendingItemContainer,
  TrendingItemTitleMovie,
  TrendingListItem,
  buttonStyles,
} from "../TrendingItem/TrendingItem.styled";
import { Button } from "@mui/material";
import { TvShowListItem } from "./TvShowItem.styled";

type tvShowItemProp = {
  tvShow: {
    poster_path?: string;
    title?: string;
    name?: string;
    id: number;
  };
};

export const TvShowItem: FC<tvShowItemProp> = ({ tvShow }) => {
  const location = useLocation();
  return (
    <TvShowListItem key={tvShow.id}>
      <img
        src={
          tvShow.poster_path
            ? `https://image.tmdb.org/t/p/w200${tvShow.poster_path}`
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aL_HlffoXMrgiodMTTldQmRpCJIJ9T6jOLN9hmm_kQ&s"
        }
        alt={tvShow.title}
      />
      <TrendingItemContainer>
        <TrendingItemTitleMovie>{tvShow.name}</TrendingItemTitleMovie>
        <Button
          component={Link}
          to={{
            pathname: `/tv-shows/${tvShow.id}`,
          }}
          state={{ from: location }}
          variant="contained"
          sx={buttonStyles}
        >
          More
        </Button>
      </TrendingItemContainer>
    </TvShowListItem>
  );
};
