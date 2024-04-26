import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails, getTrailer } from "../../services/api";
import { BackLink } from "../BackLink";
import {
  TrendingDetailsBtnBox,
  TrendingDetailsBtnStyle,
  TrendingDetailsContainer,
  TrendingDetailsTitle,
  TrendingDetailsWrapper,
  TrendingDetailsWrapperDescription,
  TrendingImgTitleBox,
  TrailerBox,
} from "./TrendingDetails.styled";
import { Button } from "@mui/material";
import ScrollToTop from "react-scroll-to-top";
import {
  ScrollStyle,
  TrendingBox,
  TrendingBoxBtn,
} from "../Trending/Trending.styled";
import { FiNavigation2 } from "react-icons/fi";

type MovieDetails = {
  release_date?: string;
  poster_path?: string;
  original_title?: string;
  vote_average?: number;
  overview?: string;
  genres?: { name: string }[];
};

const TrendingDetails = () => {
  const [trendingDetails, setTrendingDetails] = useState<MovieDetails>({});
  const [videoKey, setVideoKey] = useState<string | null>(null);
  const { movieId } = useParams<{ movieId: string }>();
  const releaseDate = trendingDetails.release_date;
  const releaseYear = releaseDate
    ? new Date(releaseDate)?.getFullYear()
    : undefined;

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/");

  useEffect(() => {
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setVideoKey(null);
      }
    };

    const handleOutsideClick = (event: MouseEvent) => {
      if (event.target !== event.currentTarget) {
        setVideoKey(null);
      }
    };

    document.addEventListener("keydown", handleEscapeKeyPress);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (movieId) {
      getMovieDetails(movieId)
        .then((response) => {
          setTrendingDetails(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [movieId]);

  const handleButtonClick = async () => {
    try {
      if (movieId) {
        const response = await getTrailer(movieId);
        const results = response.data.results;

        if (results.length > 0) {
          const key = results[0].key;
          setVideoKey(key);
        } else {
          console.warn("No trailers found for this movie.");
        }
      }
    } catch (error) {
      console.error("Error fetching movie trailer:", error);
    }
  };
  return (
    <TrendingDetailsContainer>
      <TrendingBoxBtn>
        <BackLink to={backLinkLocationRef.current}>Go back</BackLink>
      </TrendingBoxBtn>
      <TrendingDetailsWrapper>
        <TrendingImgTitleBox>
          <img
            src={
              trendingDetails.poster_path
                ? `https://image.tmdb.org/t/p/w200${trendingDetails.poster_path}`
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aL_HlffoXMrgiodMTTldQmRpCJIJ9T6jOLN9hmm_kQ&s"
            }
            alt={trendingDetails.original_title}
          />
          <TrendingDetailsTitle>
            {trendingDetails.original_title} ({releaseYear})
          </TrendingDetailsTitle>
        </TrendingImgTitleBox>
        <TrendingDetailsWrapperDescription>
          <span>
            <strong>Overview:</strong> {trendingDetails.overview}
          </span>
          <br />
          <span>
            <strong>User score:</strong>{" "}
            {Math.round(trendingDetails.vote_average! * 10)}%
          </span>
          <br />
          <span>
            <strong>Genres:</strong>{" "}
            {trendingDetails.genres
              ?.map((genre: { name: string }) => genre.name)
              .join(" ")}
          </span>
        </TrendingDetailsWrapperDescription>
      </TrendingDetailsWrapper>
      <TrendingDetailsBtnBox>
        <Button
          component={Link}
          to={`/movies/${movieId}/cast`}
          variant="contained"
          sx={TrendingDetailsBtnStyle}
        >
          Cast
        </Button>
        <Button
          component={Link}
          to={`/movies/${movieId}/reviews`}
          variant="contained"
          sx={TrendingDetailsBtnStyle}
        >
          Reviews
        </Button>
        <Button
          onClick={handleButtonClick}
          variant="contained"
          sx={TrendingDetailsBtnStyle}
        >
          Trailer
        </Button>
      </TrendingDetailsBtnBox>

      {videoKey && (
        <TrailerBox>
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}`}
            title="Movie Trailer"
            allowFullScreen
            style={{ width: "100%", height: "100%" }}
          ></iframe>
        </TrailerBox>
      )}

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
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
    </TrendingDetailsContainer>
  );
};

export default TrendingDetails;
