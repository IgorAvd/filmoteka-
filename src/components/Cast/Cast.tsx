import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../services/api";
import { CastDescription, CastList, CastListItem } from "./Cast.styled";

type MovieCredit = {
  id: number;
  profile_path: string | null;
  original_name: string;
  name: string;
  character: string;
};

const Cast = () => {
  const { movieId } = useParams();
  const [movieCredits, setMovieCredits] = useState<MovieCredit[] | null>(null);

  useEffect(() => {
    if (movieId) {
      getMovieCredits(movieId)
        .then((response) => {
          setMovieCredits(response.data.cast);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [movieId]);

  return (
    <>
      {movieCredits && (
        <CastList>
          {movieCredits.map((credit) => (
            <CastListItem>
              <img
                src={
                  credit.profile_path
                    ? `https://image.tmdb.org/t/p/w200${credit.profile_path}`
                    : ""
                }
                alt={credit.original_name}
              />
              <CastDescription>
                <p>{credit.name}</p>
                <p>Character: {credit.character}</p>
              </CastDescription>
            </CastListItem>
          ))}
        </CastList>
      )}
    </>
  );
};

export default Cast;
