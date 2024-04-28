import styled from '@emotion/styled';
import heroImage from '../../images/02-fx-dm-mobile-banner-1080x745-pl-f01-031323-64108e7aa3468-1.jpg';

export const StyledHeroSection = styled.section`
display: flex;
flex-direction: column;
justify-content: end;
align-items: center;
height: calc(100vh - 21px);
padding: 0 25px 15px;
background-image: url(${heroImage});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`;

export const HeroSpan = styled.span`
  display: inline-flex;
  align-items: center;
  border-radius: 20px;
  padding: 10px;
  background-color: #FFFFFF;
  margin-right: 10px;
  line-height: 1; 
  font-weight: 600;

   @media  (max-width: 500px) {
font-size: 17px;
  }
`;

export const HeroTrailerBox = styled.div`
position: relative;
top: 138px;
display: flex;
align-items: center;
justify-content: center; 
 width: 800px; 
  height: 500px; 
@media  (max-width: 850px) {
  width: 100%; 
    height: 100%;
  }
`;

export const HeroBtnText = styled.span`
font-weight: bold;
font-size: 18px;
margin-right: 10px;
`;

export const HeroBtnStyle = {
  display: "inline-flex",
  width: "270px",
  height: "60px",
  backgroundColor: "#FF0000",
  color: "#FFFFFF",
  textAlign: "center",
  justifyContent: "center",

  "&:hover": {
    backgroundColor: "#ffffff",
    color: "red",
    "& img": {
      filter: "invert(1) brightness(100%)",
    },
  },
};

export const HeroTitle = styled.h1`
 text-align: left;
  font-size: 40px;
  color: #FFFFFF;
  margin-top: 70px;
  color: red;
  @media  (max-width: 550px) {
   font-size: 35px;
  }
     @media  (max-width: 480px) {
font-size: 28px;
  }
`;

export const HeroDescriptionWrapper = styled.div`
  display: flex;
  align-items: center;  
`;

export const HeroDescriptionContainer = styled.div`
  display: flex;
  margin-top: 15px;
   align-items: center; 
`;

export const HeroDescriptionBox = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  width: 770px;
  font-size: 20px;
  color: #000000;
  margin: 30px 0 20px;
  font-family: Roboto, sans-serif;
  
   @media  (max-width: 800px) {
  flex-direction: column;
  }
`;

export const HeroDescriptionTextStyle = styled.span`
 font-size: 25px;
 color: #FFFFFF;
 margin-left: 10px;
   @media  (max-width: 500px) {
font-size: 17px;
  }
`;

export const HeroMainTextBox = styled.div`
font-family: Roboto, sans-serif;
display: block;
text-align: justify;
`;

export const HeroMainTextStyle = styled.div`
font-size: 20px;
color: #FFFFFF;
 margin-left: 10px;
 line-height: 24px;

  @media  (max-width: 500px) {
  font-size: 16px;
  margin-left: 0;
  }
`;

