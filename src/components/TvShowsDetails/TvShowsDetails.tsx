import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { BackLink } from "../BackLink";
import { getTvById, getTvVideoById } from "../../services/api";
import { Button } from "@mui/material";
import {
  TrailerBox,
  TvShowBox,
  TvShowBtnStyle,
  TvShowBtnTitleContainer,
  TvShowImgTitleBox,
  TvShowOverview,
  TvShowTitle,
} from "./TvShowsDetails.styled";
import ScrollToTop from "react-scroll-to-top";
import { ScrollStyle, TrendingBoxBtn } from "../Trending/Trending.styled";
import { FiNavigation2 } from "react-icons/fi";
import { TrendingDetailsBtnBox, TrendingDetailsBtnStyle } from "../TrendingDetails/TrendingDetails.styled";

type MovieDetails = {
  name?: string;
  poster_path?: string;
  overview?: string;
};

export const TvShowsDetails = () => {
  const [TvShowDetails, setTvShowDetails] = useState<MovieDetails>({});
  const [videoKey, setVideoKey] = useState<string | null>(null);
  const { tvShowId } = useParams<{ tvShowId: string }>();
  const location = useLocation();   
  const backLinkLocationRef = useRef(location.state?.from ?? "/");  
  
  useEffect(() => {
    if (tvShowId) {
      getTvById(tvShowId)
        .then((response) => {          
          setTvShowDetails(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [tvShowId]);

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

  const handleButtonClick = async () => {
    try {
      if (tvShowId) {
        const response = await getTvVideoById(tvShowId);
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
    <>
      <TvShowBox>
        <TrendingBoxBtn>
          <BackLink to={backLinkLocationRef.current}>Go back</BackLink>
        </TrendingBoxBtn>
        <TvShowImgTitleBox>
          <img
            src={
              TvShowDetails.poster_path
                ? `https://image.tmdb.org/t/p/w200${TvShowDetails.poster_path}`
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aL_HlffoXMrgiodMTTldQmRpCJIJ9T6jOLN9hmm_kQ&s"
            }
            alt={TvShowDetails.name}
          />
          <TvShowBtnTitleContainer>
            <TvShowTitle>{TvShowDetails.name}</TvShowTitle>
            <Button
              onClick={handleButtonClick}
              variant="contained"
              sx={TvShowBtnStyle}
            >
              Trailer
            </Button>
          </TvShowBtnTitleContainer>
        </TvShowImgTitleBox>
        <TvShowOverview>
          <strong>Overview: </strong>
          {TvShowDetails.overview}
        </TvShowOverview>
        <TrendingDetailsBtnBox>
          <Button
            component={Link}
            to={`/tv-shows/${tvShowId}/cast`}
            variant="contained"
            sx={TrendingDetailsBtnStyle}
          >
            Cast
          </Button>
          <Button
            component={Link}
            to={`/tv-shows/${tvShowId}/reviews`}
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
        <Suspense fallback={<div>Loading...</div>}>
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
      </TvShowBox>
    </>
  );
};
