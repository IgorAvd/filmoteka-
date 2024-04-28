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
justify-content: end;
cursor: pointer;
`;

export const TrendingBoxText = styled.span`
display: flex;
justify-content: center;
  padding: 5px;
  border-radius: 10px;
  font-size: 45px;
  color: #000;
  text-shadow: 
    rgba(0, 255, 255, 0.7) 0px 1px 3px,
    rgba(3, 255, 255, 0.7) 0px -2px 4px,
    rgba(0, 255, 255, 0.7) 0px 4px 8px,
    rgba(0, 255, 255, 0.7) 1px 4px 16px;
    @media (max-width: 500px) {
   font-size: 38px;
  }
`;

export const TrendingBoxBtn = styled.button`
display: flex;
background-color: transparent;
border: none;
color: #000;
text-shadow: 
  rgba(0, 255, 255, 0.7) 0px 1px 3px,
  rgba(3, 255, 255, 0.7) 0px -2px 4px,
  rgba(0, 255, 255, 0.7) 0px 4px 8px,
  rgba(0, 255, 255, 0.7) 1px 4px 16px;
font-size: 30px;  
 transition: color 0.3s ease;
  &:hover {
  color: orangered;
  cursor: pointer;
    & > svg {
       transition: color 0.3s ease;
      color: orangered !important;        
     }
  }
`;

export const ScrollStyle = {
  right: "14px",
  bottom: "14px",
  boxShadow: 'rgba(0, 255, 255, 0.7) 0px 1px 3px 3px, rgba(3, 255, 255, 0.7) 0px -2px 4px 0px, rgba(0, 255, 255, 0.7) 0px 4px 8px 0px, rgba(0, 255, 255, 0.7) 1px 4px 16px 0px',
  backgroundColor: "transparent",
};

export const PaginationStyle = {
  padding: "0 0 40px",
  display: "flex",
  justifyContent: "center",
  "& .MuiPaginationItem-root": {
    color: "rgba(0, 255, 255, 0.7)",
    "@media(max-width: 500px)": {
      minWidth: "28px",
      height: "28px",
    }
  },
  "& .MuiPaginationItem-page.Mui-selected": {
    backgroundColor: "rgba(0, 255, 255, 0.7)",
    color: "#fff",
    "&: hover": {
      backgroundColor: "red"
    },
  },
}; 