import { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  TrendingItemContainer,
  TrendingItemTitleMovie,
  buttonStyles,
} from "../TrendingItem/TrendingItem.styled";
import { Button } from "@mui/material";
import { ImageContainer, StyledCheckbox, TvShowListItem } from "./TvShowItem.styled";
import { CustomModal } from "../Modal/Modal";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { TvShow } from "../TvShows";

type tvShowItemProp = {
  tvShow: TvShow;
  onToggleFavorite: (movie: TvShow) => void;
  selectedFilms: TvShow[];
};

export const TvShowItem: FC<tvShowItemProp> = ({
  tvShow,
  onToggleFavorite,
  selectedFilms,
}) => {
  console.log('tvShow', tvShow)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(selectedFilms.some((film) => film.id === tvShow.id));
  }, [selectedFilms, tvShow.id]);

  const handleCheckboxChange = () => {
    onToggleFavorite(tvShow);
  };

  return (
    <TvShowListItem key={tvShow.id}>
      <ImageContainer>
        <img
          onClick={handleOpen}
          src={
            tvShow.poster_path
              ? `https://image.tmdb.org/t/p/w200${tvShow.poster_path}`
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aL_HlffoXMrgiodMTTldQmRpCJIJ9T6jOLN9hmm_kQ&s"
          }
          alt={tvShow.name}
        />
        <StyledCheckbox
          checked={isChecked}
          onChange={handleCheckboxChange}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite style={{ color: "red" }} />}
        />
      </ImageContainer>
      <CustomModal
        name={tvShow.name || tvShow.title}
        poster={tvShow.poster_path}
        open={open}
        handleClose={handleClose}
        overview={tvShow.overview || ""}
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
