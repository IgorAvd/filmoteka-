import { FC, useState } from "react";
import { Link } from "react-router-dom";
import {
  TrendingItemContainer,
  TrendingItemTitleMovie,
  TrendingListItem,
  buttonStyles,
} from "./TrendingItem.styled";
import { Button } from "@mui/material";
import { CustomModal } from "../Modal/Modal";

type TrendingItemProp = {
  movie: {
    id: number;
    poster_path: string;
    original_title?: string;
    title: string;
    release_date?: string;
    overview?: string;
  };
};

export const TrendingItem: FC<TrendingItemProp> = ({ movie }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <TrendingListItem key={movie.id}>
      <img
        onClick={handleOpen}
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aL_HlffoXMrgiodMTTldQmRpCJIJ9T6jOLN9hmm_kQ&s"
        }
        alt={movie.original_title}
      />
      <CustomModal
        release={movie.release_date}
        title={movie.title}
        poster={movie.poster_path}
        open={open}
        handleClose={handleClose}
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
