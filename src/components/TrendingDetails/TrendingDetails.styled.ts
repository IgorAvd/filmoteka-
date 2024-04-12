import styled from '@emotion/styled';


export const TrendingDetailsContainer = styled.div`
padding: 100px 140px; 
img{
width: 290px;
border-radius: 10px;
`;

export const TrendingDetailsWrapper = styled.div`
display:flex;
margin-bottom: 50px; 
`;

export const TrendingDetailsWrapperDescription = styled.div`
width: 800px;
margin-left: 60px;

span{
display: block;
margin-bottom: 10px;
text-align: justify;
line-height: 1.5;
font-size: 20px;
text-align: left;
color: #ffffff;
}

strong{
   font-weight: bold; 
   font-size: 23px;
}
`;

export const TrendingDetailsTitle = styled.h1`
 margin-bottom: 70px;
font-size: 42px;
  text-align: center;
  color: #ffffff;
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
