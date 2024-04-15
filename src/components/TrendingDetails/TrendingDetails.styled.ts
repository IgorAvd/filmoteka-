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
// margin: 0 auto 25px;
align-items: center;
justify-content: center;
`;


export const TrendingDetailsWrapper = styled.div`
display:flex;
margin-bottom: 50px; 
flex-direction: column;
`;

export const TrendingDetailsWrapperDescription = styled.div`
// width: 800px;
margin-top: 60px;

span{
display: block;
// margin-top: 30px;
// margin-bottom: 10px;
text-align: justify;
line-height: 1.5;
font-size: 22px;
// text-align: left;
color: #ffffff;
}

strong{
   font-weight: bold; 
   font-size: 23px;
}
`;

export const TrendingDetailsTitle = styled.h1`
// margin-left: 100px;
font-size: 42px;
text-align: center;
margin-left: 30px;
// margin: 0 auto;
color: red;
     @media  (max-width: 760px) {
// margin-left: 70px;
font-size: 36px;
  }
    @media  (max-width: 600px) {
// margin-left: 40px;
font-size: 33px;
  }
   @media  (max-width: 465px) {
// margin-left: 20px;
font-size: 28px;
  }
`;

export const TrendingDetailsBtnBox = styled.div`
 display: flex;
  width: 290px;
  justify-content: space-between;
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
