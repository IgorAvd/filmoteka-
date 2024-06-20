import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getMovieCredits, getTvCredits } from "../../services/api";
import { CastDescription, CastList, CastListItem } from "./Cast.styled";
import { TrendingDetailsBtnStyle } from "../TrendingDetails/TrendingDetails.styled";
import { Button } from "@mui/material";

type MovieCredit = {
  id: number;
  profile_path: string | null;
  original_name: string;
  name: string;
  character: string;
};

const Cast = () => {
const [movieCredits, setMovieCredits] = useState<MovieCredit[] | null>(null);
const location = useLocation();
const mediaType = location.state?.media_type;
const initialMediaType = useRef<string | null>(
    mediaType || localStorage.getItem("initialMediaType")
  );
const [hideList, setHideList] = useState(false);  
const { movieId, selectedId, tvShowId } = useParams<{
    movieId?: string;
    selectedId?: string;
    tvShowId?: string;
  }>();

useEffect(() => {
    if (mediaType) {
      localStorage.setItem("initialMediaType", mediaType);
    }
  }, [mediaType]);  

const currentPath = selectedId
    ? `/selected/${selectedId}`
    : movieId
    ? `/movies/${movieId}`
    : `/tv-shows/${tvShowId}`;
const currentId = selectedId || movieId || tvShowId;

useEffect(() => {
  const fetchCredits = async (id: string) => {
    try {
        if (movieId) {
          const response = await getMovieCredits(id);
          setMovieCredits(response.data.cast || []);
        } else if (tvShowId) {
          const response = await getTvCredits(id);
          setMovieCredits(response.data.cast || []);
        } else if (
          selectedId &&
          (mediaType || initialMediaType.current) === "tv"
        ) {
          const response = await getTvCredits(id);
          setMovieCredits(response.data.cast || []);
        } else if (
          selectedId &&
          (mediaType || initialMediaType.current) === "movie"
        ) {
          const response = await getMovieCredits(id);
          setMovieCredits(response.data.cast || []);
        }
    } catch (error) {
        console.error(error);
      }
    };
    if (currentId) {
      fetchCredits(currentId);
    }
  }, [currentId, movieId, tvShowId, selectedId, mediaType]);

  return (
    <>
      {!hideList ? (
        <>
          <Button
            component={Link}
            to={currentPath}            
            onClick={() => setHideList(!hideList)}
            variant="contained"
            sx={TrendingDetailsBtnStyle}
          >
            Hide
          </Button>
          {movieCredits && (
            <CastList>
              {movieCredits.map((credit) => (
                <CastListItem key={credit.id}>
                  <img
                    src={
                      credit.profile_path
                        ? `https://image.tmdb.org/t/p/w200${credit.profile_path}`
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aL_HlffoXMrgiodMTTldQmRpCJIJ9T6jOLN9hmm_kQ&s"
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
      ) : null}
    </>
  );
};

export default Cast;
