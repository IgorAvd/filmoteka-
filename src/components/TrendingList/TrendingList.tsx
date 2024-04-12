import { FC } from "react";
import { TrendingUl } from "./TrendingList.styled";
import { TrendingItem } from "../TrendingItem/TrendingItem";
import { Movie } from "../Trending/Trending";

type TrendingListProp = {
  data: Movie[];
};

export const TrendingList: FC<TrendingListProp> = ({ data }) => {
  return (
    <>
      <TrendingUl>
        {data?.map((movie) => (
          <TrendingItem key={movie.id} movie={movie} />
        ))}
      </TrendingUl>
    </>
  );
};
