import { FC, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  TrendingItemContainer,
  TrendingItemTitleMovie,
  buttonStyles,
} from "../TrendingItem/TrendingItem.styled";
import { Button } from "@mui/material";
import { TvShowListItem } from "./TvShowItem.styled";
import { CustomModal } from "../Modal/Modal";

type tvShowItemProp = {
  tvShow: {
    poster_path?: string;
    name?: string;
    id: number;
    overview?: string;
  };
};

export const TvShowItem: FC<tvShowItemProp> = ({ tvShow }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const location = useLocation();
  return (
    <TvShowListItem key={tvShow.id}>
      <img
        onClick={handleOpen}
        src={
          tvShow.poster_path
            ? `https://image.tmdb.org/t/p/w200${tvShow.poster_path}`
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aL_HlffoXMrgiodMTTldQmRpCJIJ9T6jOLN9hmm_kQ&s"
        }
        alt={tvShow.name}
      />
      <CustomModal
        name={tvShow.name}
        poster={tvShow.poster_path}
        open={open}
        handleClose={handleClose}
        overview={tvShow.overview}
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
