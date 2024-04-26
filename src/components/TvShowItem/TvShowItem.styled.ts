import styled from '@emotion/styled';

export const TvShowListItem = styled.li`
display: flex;
flex-direction: column;
text-align: center;
margin: 0 auto;  
cursor: pointer;
img {
  height:375px; 
  &:hover,
   &:focus {   
     border-radius: 10px;
     box-shadow: rgba(0, 255, 255, 0.7) 0px 1px 3px 3px, rgba(3, 255, 255, 0.7) 0px -2px 4px 0px, rgba(0, 255, 255, 0.7) 0px 4px 8px 0px, rgba(0, 255, 255, 0.7) 1px 4px 16px 0px;
}
`;