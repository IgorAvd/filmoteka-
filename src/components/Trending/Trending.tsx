import { useEffect, useState } from "react";
import { getAllMovie } from "../../services/api";
import { TrendingList } from "../TrendingList/TrendingList";
import { Box, Button, Typography } from "@mui/material";
import { useAppSelector } from "../../hooks";
import { selectSearchBoxValue } from "../../redux/SearchBox/SearchBoxSlice";
import { GoArrowRight } from "react-icons/go";
import {
  TrendingBox,
  TrendingBoxBtn,
  TrendingBoxText,
  TrendingContainer,
} from "./Trending.styled";

export type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

export const Trending = () => {
  const [data, setData] = useState<Movie[]>([]);
  const [showAllMovies, setShowAllMovies] = useState(false);
  const searchBoxValue = useAppSelector(selectSearchBoxValue);

  useEffect(() => {
    getAllMovie()
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleViewAllClick = () => {
    setShowAllMovies(!showAllMovies);
  };

  return (
    <TrendingContainer>
      <TrendingBox>
        <TrendingBoxText>Trending today</TrendingBoxText>
        <Button onClick={handleViewAllClick} type="button" sx={TrendingBoxBtn}>
          View all
          <GoArrowRight size="40" style={{ marginLeft: "20px" }} />
        </Button>
      </TrendingBox>
      <TrendingList
        data={
          searchBoxValue.length > 0
            ? showAllMovies
              ? searchBoxValue
              : searchBoxValue.slice(0, 4)
            : showAllMovies
            ? data
            : data.slice(0, 4)
        }
      />
    </TrendingContainer>
  );
};
