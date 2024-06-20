import { FC, useState } from "react";
import { Button } from "@mui/material";
import { CustomModal } from "../Modal/Modal";
import { buttonStyles, TrendingItemContainer, TrendingItemTitleMovie, TrendingListItem } from "../TrendingItem/TrendingItem.styled";
import { Link, useLocation } from "react-router-dom";

type Movie = {
  id: number;
  poster_path: string;
  original_title?: string;
  title: string;
  release_date?: string;
  overview?: string;
  media_type: string;
};

type SelectedMoviesItemProp = {
  selected: Movie;
};

export const SelectedMoviesItem: FC<SelectedMoviesItemProp> = ({ selected }) => {
  const [open, setOpen] = useState(false);
const location = useLocation();
  return (
    <TrendingListItem key={selected.id}>
      <img
        onClick={() => setOpen(!open)}
        src={
          selected.poster_path
            ? `https://image.tmdb.org/t/p/w200${selected.poster_path}`
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aL_HlffoXMrgiodMTTldQmRpCJIJ9T6jOLN9hmm_kQ&s"
        }
        alt={selected.original_title}
      />
      <CustomModal
        release={selected.release_date}
        title={selected.title}
        poster={selected.poster_path}
        open={open}
        handleClose={() => setOpen(false)}
        overview={selected.overview}
      />
      <TrendingItemContainer>
        <TrendingItemTitleMovie>{selected.title}</TrendingItemTitleMovie>
        <Button
          component={Link}
          to={`/selected/${selected.id}`}
          state={{ from: location, media_type: selected.media_type }}
          variant="contained"
          sx={buttonStyles}
        >
          More
        </Button>
      </TrendingItemContainer>
    </TrendingListItem>
  );
};
