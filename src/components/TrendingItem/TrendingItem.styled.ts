import styled from '@emotion/styled';


export const TrendingLi = styled.li`
display: block;
text-align: center;
margin: 0 auto;  
img {
  height:375px; 
}
`;

export const TrendingItemContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 250px;
 margin-top: 20px;     
`;

export const TrendingItemTitleMovie = styled.h2`
font-size: 15px;
text-align: left;
color: #ffffff;  
`;

export const buttonStyles = {
  marginLeft: "8px",
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
  },
};