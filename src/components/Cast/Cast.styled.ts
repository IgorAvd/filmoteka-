import styled from '@emotion/styled';


export const CastList = styled.ul`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 16px;
margin-top: 50px;
   @media (max-width: 950px) {    
grid-template-columns: repeat(2, 1fr);
  } 
   @media (max-width: 670px) {    
grid-template-columns: repeat(1, 1fr);
  }
`;

export const CastListItem = styled.li`
display: block;
text-align: center;
margin: 0 auto;
  img{
    height: 435px;
     @media (max-width: 670px) {    
width:320px;
  }
  }
`;

export const CastDescription = styled.div`
margin-top: 20px;
font-size: 32px;
text-align: center;
color: #ffffff;

p {
  width: 290px;
   @media (max-width: 670px) {    
width:320px;
  }
}

   @media (max-width: 950px) {    
font-size: 26px;
  }
`;