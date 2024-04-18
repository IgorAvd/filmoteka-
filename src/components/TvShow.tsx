import { useEffect, useState } from "react";
import { getTv } from "../services/api";
import { TvShowList } from "./TvShowsDetails/TvShowsDetails.styled";
import { TvShowItem } from "./TvShowItem/TvShowItem";
import { Filter } from "./Filter/Filter";

interface TvShow {
  id: number;
  title: string;
  poster_path: string;
}
export const TvShows = () => {
  const [data, setData] = useState<TvShow[]>([]);
  useEffect(() => {
    getTv()
      .then((response) => {
        console.log("response", response);
        setData(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <TvShowList>
      <Filter title={"Find serials by name"} />
      {data.map((tvShow) => (
        <TvShowItem key={tvShow.id} tvShow={tvShow} />
      ))}
    </TvShowList>
  );
};
