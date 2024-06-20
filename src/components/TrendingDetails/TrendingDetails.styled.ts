import styled from '@emotion/styled';

export const TrendingDetailsContainer = styled.div`
padding: 0 25px 25px; 
margin-top: 100px;
img{
width: 290px;
border-radius: 10px;
`;

export const TrendingImgTitleBox = styled.div`
display:flex;
align-items: center;
justify-content: center;
`;

export const TrendingDetailsWrapper = styled.div`
display:flex;
margin-bottom: 50px; 
flex-direction: column;
`;

export const TrendingDetailsWrapperDescription = styled.div`
margin-top: 60px;
span{
display: block;
text-align: justify;
line-height: 1.5;
font-size: 22px;
color: #ffffff;
}

strong{
   font-weight: bold; 
   font-size: 23px;
   color: red;
}
`;

export const TrendingDetailsTitle = styled.h1`
font-size: 42px;
text-align: center;
 margin-left: 10px;
color: red;
     @media  (max-width: 760px) {
font-size: 33px;
  }
    @media  (max-width: 600px) {
font-size: 29px;
  }
   @media  (max-width: 465px) {
font-size: 22px;
  }
`;

export const TrendingDetailsBtnBox = styled.div`
 display: flex;
  width: 290px;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const TrendingDetailsBtnStyle = {
  backgroundColor: "red",
  height: "40px",
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

export const TrendingDetailsVideoBox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "40px",
}
export const TrailerBox = styled.div`
display: flex;
margin: 60px auto 0;
 width: 800px; 
  height: 600px; 
@media  (max-width: 850px) {
  width: 100%; 
    height: 100%;
  }
`;