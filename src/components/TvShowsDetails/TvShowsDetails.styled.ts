import styled from '@emotion/styled';

export const TvShowBox = styled.div`
padding: 0 25px 25px; 
margin-top: 82px;
img{
width: 290px;
border-radius: 10px;}
@media  (max-width: 750px) {
margin-top: 95px;
  }
`;

export const TvShowImgTitleBox = styled.div`
display:flex;
align-items: center;
justify-content: center;
`;

export const TvShowTitle = styled.h1`
font-size: 42px;
text-align: center;
color: red;
     @media  (max-width: 760px) {
font-size: 36px;
  }
    @media  (max-width: 600px) {
font-size: 33px;
  }
   @media  (max-width: 465px) {
font-size: 28px;
  }
`;

export const TvShowBtnStyle = {
  backgroundColor: "red",
  height: "40px",
  width: "90px",
  lineHeight: "40px",
  fontWeight: "600",
  fontSize: "12px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  borderRadius: "12px",
  "&:hover": {
    backgroundColor: "#ffffff",
    color: "red",
  }
}

export const TvShowBtnTitleContainer = styled.div`
display:flex;
flex-direction: column;
margin-left: 50px;
gap: 30px;
@media  (max-width: 550px) {
 margin-left: 30px;
  }
  @media  (max-width: 400px) {
 margin-left: 20px;
  }
`;

export const TrailerBox = styled.div`
display: flex;
margin: 60px auto 0;
 width: 700px; 
  height: 550px; 
@media  (max-width: 850px) {
  width: 100%; 
    height: 100%;
  }
`;

export const TvShowOverview = styled.span`
display: block;
margin-top: 60px;
margin-bottom: 50px;
text-align: justify;
line-height: 1.5;
font-size: 22px;
color: #ffffff;


strong{
   font-weight: bold; 
   font-size: 23px;
   color: red;
}

@media  (max-width: 500px) {
font-size: 18px;
line-height: 1.2;
  }
`;

export const TvShowList = styled.ul`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 16px;
padding-top:190px;
padding-bottom:50px;

img {  
  border-radius:10px;   
  width: 250px;
  } 
   @media (max-width: 1210px) {    
    img {  
  border-radius:10px;   
  width: 230px;
  }
   @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
    img {  
  border-radius:10px;   
  width: 300px;
  }
  } 
   @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
    img {  
  border-radius:10px;   
   width: 280px;
  }
  } 
  @media (max-width: 450px) {
    padding-top:280px;
  }
  }
`;