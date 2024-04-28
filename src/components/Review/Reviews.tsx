import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/api";
import { ReviewBox } from "./Reviews.styled";

interface Review {
  id: number;
  author: string;
  content: string;
}

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState<Review[] | null>(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      getMovieReviews(movieId)
        .then((response) => {
          setMovieReviews(response.data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [movieId]);
  return (
    <div>
      <ul>
        {movieReviews?.length
          ? movieReviews?.map((review) => (
              <li key={review.id}>
                <ReviewBox>
                  <h2>Author: {review.author}</h2>
                  <p>{review.content}</p>
                </ReviewBox>
              </li>
            ))
          : ""}
        {!movieReviews?.length && movieReviews !== null && (
          <ReviewBox>We don't have any reviews for this movie.</ReviewBox>
        )}
      </ul>
    </div>
  );
};
export default Reviews;
