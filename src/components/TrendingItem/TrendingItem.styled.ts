import styled from '@emotion/styled';
import { Checkbox } from '@mui/material';

export const TrendingListItem = styled.li`
display: block;
text-align: center;
margin: 0 auto;  
img {
  height:375px; 
  &:hover,
 &:focus {  
  cursor: pointer; 
  border-radius: 10px;
  box-shadow: rgba(0, 255, 255, 0.7) 0px 1px 3px 3px, rgba(3, 255, 255, 0.7) 0px -2px 4px 0px, rgba(0, 255, 255, 0.7) 0px 4px 8px 0px, rgba(0, 255, 255, 0.7) 1px 4px 16px 0px;
}

}
`;

export const TrendingItemContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 250px;
 margin-top: 20px;   
 @media (max-width: 1210px) {    
   width: 230px;
  }  
   @media (max-width: 1080px) {    
width: 300px;
  }  
   @media (max-width: 750px) {    
width: 280px;
  } 
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

export const ImageContainer = styled.div`
  position: relative;
  width: fit-content;
  margin-bottom: 16px;
`;

export const StyledCheckbox = styled(Checkbox)`
  position: absolute;
  bottom: 8px;
  right: 8px;
  color: red;
`;
