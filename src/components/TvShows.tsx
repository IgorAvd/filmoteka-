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
interface TvShow {
  id: number;
  title: string;
  poster_path: string;
}

export const TvShows = () => {
  const [data, setData] = useState<TvShow[]>([]); 
  const searchTvValue = useAppSelector(selectSearchTvValue);

  console.log("searchTvValue", searchTvValue);

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

  const handlePaginationClick = (page: number) => {
    getTvByPage(page).then((response) => {
      setData(response.data.results);
    });
  };

  return (
    <TvShowList>
      <Filter title={"Find serials by name"} onSubmit={getTvVideoBySearch} />
      {data?.map((tvShow) => (
        <TvShowItem key={tvShow.id} tvShow={tvShow} />
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
    </TvShowList>
  );
};
