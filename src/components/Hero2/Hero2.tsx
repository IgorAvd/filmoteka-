import { useEffect, useRef, useState } from "react";
import {
  HeroBtnStyle,
  HeroBtnText,
  HeroDescriptionBox,
  HeroDescriptionTextStyle,
  HeroMainTextBox,
  HeroMainTextStyle,
  HeroSpan,
  HeroTitle,
  HeroTrailerBox,
  StyledHeroSection,
} from "./Hero2.styled";
import { Box, Button } from "@mui/material";
import GroupImage from "../../images/Group.png";
import Clock from "../../images/Vector.svg";
import Star from "../../images/Star.svg";
import Circle from "../../images/Circle.svg";

export const Hero2 = () => {
  const [showTrailer, setShowTrailer] = useState(false);
  // const trailerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleCloseTrailer = (event: MouseEvent) => {
      if (event.target !== event.currentTarget) {
        setShowTrailer(false);
      }
    };

    const handleCloseEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowTrailer(false);
      }
    };

    document.addEventListener("mousedown", handleCloseTrailer);
    document.addEventListener("keydown", handleCloseEscKey);

    return () => {
      document.removeEventListener("mousedown", handleCloseTrailer);
      document.removeEventListener("keydown", handleCloseEscKey);
    };
  }, []);

  const handleShowTrailer = () => {
    setShowTrailer(!showTrailer);
  };

  return (
    // <StyledHeroSection ref={trailerRef}>
    <StyledHeroSection>
      {showTrailer ? (
        <HeroTrailerBox>
          <iframe
            title="YouTube Video"
            width="800"
            height="500"
            src="https://www.youtube.com/embed/32RAq6JzY-w?si=iSYgOno2yqYGMCig"
            allow="fullscreen"
          ></iframe>
        </HeroTrailerBox>
      ) : (
        <Box textAlign="center">
          <Button
            onClick={handleShowTrailer}
            type="button"
            variant="contained"
            sx={HeroBtnStyle}
          >
            <HeroBtnText>Watch trailer</HeroBtnText>
            <img
              src={Circle}
              width="25"
              height="25"
              alt="Circle"
              style={{ marginLeft: "30px" }}
            />
          </Button>
        </Box>
      )}
      <HeroTitle>Fast X</HeroTitle>
      <HeroDescriptionBox>
        <div>
          <HeroSpan>Action</HeroSpan>
          <HeroSpan>Adventure</HeroSpan>
          <HeroSpan>Crime</HeroSpan>
        </div>
        <div>
          <img
            src={GroupImage}
            width="30"
            height="30"
            alt=" calendar"
            style={{ marginLeft: "30px" }}
          />
          <HeroDescriptionTextStyle>2023</HeroDescriptionTextStyle>
          <img
            src={Clock}
            width="20"
            height="20"
            alt=" calendar"
            style={{ marginLeft: "30px" }}
          />
          <HeroDescriptionTextStyle>2:09:00</HeroDescriptionTextStyle>
          <img
            src={Star}
            width="20"
            height="20"
            alt=" calendar"
            style={{ marginLeft: "30px" }}
          />
          <HeroDescriptionTextStyle>5.8</HeroDescriptionTextStyle>
        </div>
      </HeroDescriptionBox>
      <HeroMainTextBox>
        <HeroMainTextStyle>
          Dom Toretto and his family are targeted by the vengeful son of drug
          kingpin Hernan Reyes.
        </HeroMainTextStyle>
      </HeroMainTextBox>
    </StyledHeroSection>
  );
};
