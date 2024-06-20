import { FC, useEffect, useState } from "react";
import { TrendingUl } from "./TrendingList.styled";
import { TrendingItem } from "../TrendingItem/TrendingItem";
import { Movie } from "../Trending/Trending";


type TrendingListProp = {
  data: Movie[];  
};

export const TrendingList: FC<TrendingListProp> = ({ data }) => {
 
const [selectedFilms, setSelectedFilms] = useState<Movie[]>(() => {    
    const storedSelectedFilms = localStorage.getItem("selectedFilms");
    return storedSelectedFilms ? JSON.parse(storedSelectedFilms) : [];
});
  
  useEffect(() => {
    const storedSelectedFilms = localStorage.getItem("selectedFilms");
    if (storedSelectedFilms) {
      setSelectedFilms(JSON.parse(storedSelectedFilms));      
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedFilms", JSON.stringify(selectedFilms));
  }, [selectedFilms]);

  const handleToggleFavorite = (movie: Movie) => {
    setSelectedFilms((prevSelectedFilms) => {     
      if (prevSelectedFilms.some((film) => film.id === movie.id)) {
        return prevSelectedFilms.filter((film) => film.id !== movie.id);
      } else {
        return [...prevSelectedFilms, movie];
      }
    });
  };

  return (
    <TrendingUl>
      {data.map((movie) => (
        <TrendingItem
          key={movie.id}
          movie={movie}
          selectedFilms={selectedFilms}
          onToggleFavorite={handleToggleFavorite}
        />
      ))}
    </TrendingUl>
  );
};
