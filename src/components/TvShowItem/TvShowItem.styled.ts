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
     box-shadow: 0px 1px 2px 0px rgba(0,255,255,0.7),
             1px 2px 4px 0px rgba(0,255,255,0.7),
             2px 4px 8px 0px rgba(0,255,255,0.7),
             2px 4px 16px 0px rgba(0,255,255,0.7);
     
   }
}
`;