import { useEffect, useState } from "react";
import { getAllMovie, getAllMovieByPage } from "../../services/api";
import { TrendingList } from "../TrendingList/TrendingList";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useAppSelector } from "../../hooks";
import { selectSearchBoxValue } from "../../redux/SearchBox/SearchBoxSlice";
import {
  PaginationStyle,
  ScrollStyle,
  TrendingBox,
  TrendingBoxBtn,
  TrendingBoxText,
  TrendingContainer,
} from "./Trending.styled";
import ScrollToTop from "react-scroll-to-top";
import { FiNavigation2 } from "react-icons/fi";
import { BiDownvote } from "react-icons/bi";

export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  media_type: string;
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

  const handlePaginationClick = (page: number) => {
    getAllMovieByPage(page).then((response) => {
      setData(response.data.results);
    });   
  };

  return (
    <TrendingContainer>
      <TrendingBoxText>
        <span>Trending today</span>
      </TrendingBoxText>
      <TrendingBox>
        <TrendingBoxBtn onClick={handleViewAllClick} type="button">
          View all
          <BiDownvote
            size="35"
            style={{ marginLeft: "12px", color: "rgba(0, 255, 255, 0.7)" }}
          />
        </TrendingBoxBtn>
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
      <ScrollToTop
        style={ScrollStyle}
        component={
          <FiNavigation2
            style={{
              height: "20px",
              width: "20px",
              color: "aqua",
            }}
          />
        }
        smooth
      />
      <Stack spacing={2}>
        <Pagination
          onChange={(event: React.ChangeEvent<unknown>, page: number) =>
            handlePaginationClick(page)
          }
          sx={PaginationStyle}
          color={"primary"}
          count={10}
          shape="rounded"
        />
      </Stack>
    </TrendingContainer>
  );
};

