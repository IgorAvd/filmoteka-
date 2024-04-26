import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkStyle = styled(NavLink)`
font-size: 28px;
  color: #000;
  text-shadow: 
    rgba(0, 255, 255, 0.7) 0px 1px 3px,
    rgba(3, 255, 255, 0.7) 0px -2px 4px,
    rgba(0, 255, 255, 0.7) 0px 4px 8px,
    rgba(0, 255, 255, 0.7) 1px 4px 16px;
    
  @media (max-width: 500px) {
    font-size: 38px;
    text-decoration: none;
  }
`;