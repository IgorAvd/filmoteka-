import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getMovieReviews, getTvReviews } from "../../services/api";
import { ReviewBox } from "./Reviews.styled";
import { Button } from "@mui/material";
import { TrendingDetailsBtnStyle } from "../TrendingDetails/TrendingDetails.styled";

interface Review {
  id: number;
  author: string;
  content: string;
}

const Reviews = () => {
const [movieReviews, setMovieReviews] = useState<Review[] | null>(null);  
const { movieId, selectedId, tvShowId } = useParams<{
    movieId?: string;
    selectedId?: string;
    tvShowId?: string;
  }>();
const location = useLocation();
const mediaType = location.state?.media_type;
const initialMediaType = useRef<string | null>(
    mediaType || localStorage.getItem("initialMediaType")
  );
const [hideList, setHideList] = useState(false); 
const currentPath = selectedId
    ? `/selected/${selectedId}`
    : movieId
    ? `/movies/${movieId}`
      : `/tv-shows/${tvShowId}`;
  
const currentId = selectedId || movieId || tvShowId; 
  
  useEffect(() => {
    if (mediaType) {
      localStorage.setItem("initialMediaType", mediaType);
    }
  }, [mediaType]); 
   
  useEffect(() => {
  const fetchCredits = async (id: string) => {
      try {
        if (movieId) {
          const response = await getMovieReviews(id);
            setMovieReviews(response.data.results || []);
        } else if (tvShowId) {
          const response = await getTvReviews(id);
            setMovieReviews(response.data.results || []);
        } else if (
          selectedId &&
          (mediaType || initialMediaType.current) === "tv"
        ) {
          const response = await getTvReviews(id);
          setMovieReviews(response.data.results || []);
        } else if (
          selectedId &&
          (mediaType || initialMediaType.current) === "movie"
        ) {
        const response = await getMovieReviews(id);
        setMovieReviews(response.data.results || []);
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
    <div>
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
          <ul>
            {movieReviews?.length ? (
              movieReviews.map((review) => (
                <li key={review.id}>
                  <ReviewBox>
                    <h2>Author: {review.author}</h2>
                    <p>{review.content}</p>
                  </ReviewBox>
                </li>
              ))
            ) : (
              <ReviewBox>We don't have any reviews for this movie.</ReviewBox>
            )}
          </ul>
        </>
      ) : null}
    </div>
  );
};
export default Reviews;
