import { useEffect, useRef, useState } from "react";
import {
  HeroBtnStyle,
  HeroBtnText,
  HeroDescriptionBox,
  HeroDescriptionContainer,
  HeroDescriptionTextStyle,
  HeroDescriptionWrapper,
  HeroMainTextBox,
  HeroMainTextStyle,
  HeroSpan,
  HeroTitle,
  HeroTrailerBox,
  StyledHeroSection,
} from "./Hero.styled";
import { Box, Button } from "@mui/material";
import GroupImage from "../../images/Group.png";
import Clock from "../../images/Vector.svg";
import Star from "../../images/Star.svg";
import Circle from "../../images/Circle.svg";

export const Hero = () => {
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
            style={{ width: "100%", height: "100%" }}
            // width="800"
            // height="500"
            src="https://www.youtube.com/embed/a8Gx8wiNbs8"
            allow="fullscreen"
            allowFullScreen
          ></iframe>
        </HeroTrailerBox>
      ) : (
        <Box
        // sx={{
        //   position: "relative",
        //   top: "50%", // Положение по вертикали
        //   left: "50%", // Положение по горизонтали
        //   transform: "translate(-50%, -50%)", // Центрирование элемента точно по середине
        //   zIndex: "10",
        // }}
        >
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
      <HeroTitle>Avatar: The Way of Water</HeroTitle>
      <HeroDescriptionBox>
        <div>
          <HeroSpan>Action</HeroSpan>
          <HeroSpan>Adventure</HeroSpan>
          <HeroSpan>Science Fiction</HeroSpan>
        </div>
        <HeroDescriptionContainer>
          <HeroDescriptionWrapper>
            <img
              src={GroupImage}
              width="30"
              height="30"
              alt=" calendar"
              style={{ marginLeft: "30px" }}
            />
            <HeroDescriptionTextStyle>2022</HeroDescriptionTextStyle>
          </HeroDescriptionWrapper>
          <HeroDescriptionWrapper>
            <img
              src={Clock}
              width="20"
              height="20"
              alt=" calendar"
              style={{ marginLeft: "30px" }}
            />
            <HeroDescriptionTextStyle>3:12:00</HeroDescriptionTextStyle>
          </HeroDescriptionWrapper>
          <HeroDescriptionWrapper>
            <img
              src={Star}
              width="20"
              height="20"
              alt=" calendar"
              style={{ marginLeft: "30px" }}
            />
            <HeroDescriptionTextStyle>8.5</HeroDescriptionTextStyle>
          </HeroDescriptionWrapper>
        </HeroDescriptionContainer>
      </HeroDescriptionBox>
      <HeroMainTextBox>
        <HeroMainTextStyle>
          Set more than a decade after the events of the first film, learn the
          story of the Sully family (Jake, Neytiri, and their kids), the trouble
          that follows them, the lengths they go to keep each other safe, the
          battles they fight to stay alive, and the tragedies they endure.
        </HeroMainTextStyle>
      </HeroMainTextBox>
    </StyledHeroSection>
  );
};
