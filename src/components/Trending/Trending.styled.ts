import styled from '@emotion/styled';


export const TrendingContainer = styled.div`
height: 100vh;
padding: 40px 40px;
 @media (max-width: 1210px) {    
   padding: 40px 15px;
  }
@media (max-width: 750px) {
   padding: 40px 20px;
  }
`;

export const TrendingBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`;

export const TrendingBoxText = styled.span` 
font-size: 25px;
text-align: lelt;
color: #ffffff;
  `;

export const TrendingBoxBtn = {
  fontSize: "25px",
  color: "#ffffff",
  textTransform: "capitalize",
  "&:hover": {
    color: "orangered",
  },
  '@media (max-width: 550px)': {
    lineHeight: "1.15",
    padding: "0"

  }
};
