import { useEffect, useState } from "react";
import { getTv, getTvByPage } from "../services/api";
import { TvShowList } from "./TvShowsDetails/TvShowsDetails.styled";
import { TvShowItem } from "./TvShowItem/TvShowItem";
import { Filter } from "./Filter/Filter";
import ScrollToTop from "react-scroll-to-top";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { FiNavigation2 } from "react-icons/fi";
import {
  PaginationStyle,
  ScrollStyle, 
} from "./Trending/Trending.styled";
import { getTvVideoBySearch } from "../redux/SearchBox/operation";
import { useAppSelector } from "../hooks";
import { 
  selectSearchTvValue,
} from "../redux/SearchBox/SearchBoxSlice";

export interface TvShow {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  overview?: string;
  media_type?: string;
}

export const TvShows = () => {
  const [data, setData] = useState<TvShow[]>([]); 
  const searchTvValue = useAppSelector(selectSearchTvValue);
const [selectedFilms, setSelectedFilms] = useState<TvShow[]>(() => {
  const storedSelectedFilms = localStorage.getItem("selectedFilms");
  return storedSelectedFilms ? JSON.parse(storedSelectedFilms) : [];
}); 
  useEffect(() => {
    if (searchTvValue.length > 0) {
      setData(searchTvValue);
    } else {
      getTv()
        .then((response) => {
          setData(response.data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [searchTvValue]);

   useEffect(() => {
     const storedSelectedFilms = localStorage.getItem("selectedFilms");
     if (storedSelectedFilms) {
       setSelectedFilms(JSON.parse(storedSelectedFilms));
     }
   }, []);

   useEffect(() => {
     localStorage.setItem("selectedFilms", JSON.stringify(selectedFilms));
   }, [selectedFilms]);

  const handlePaginationClick = (page: number) => {
    getTvByPage(page).then((response) => {
      setData(response.data.results);
    });
  };

 const handleToggleFavorite = (tvShow: TvShow) => {
   setSelectedFilms((prevSelectedFilms) => {
     if (prevSelectedFilms.some((film) => film.id === tvShow.id)) {
       return prevSelectedFilms.filter((film) => film.id !== tvShow.id);
     } else {
       return [...prevSelectedFilms, tvShow];
     }
   });
 };
  return (
    <>
      <TvShowList>
        <Filter title={"Find serials by name"} onSubmit={getTvVideoBySearch} />
        {data?.map((tvShow) => (         
          <TvShowItem
            key={tvShow.id}
            tvShow={tvShow}
            onToggleFavorite={handleToggleFavorite}
            selectedFilms={selectedFilms}
          />
        ))}
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
      </TvShowList>
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
    </>
  );
};
