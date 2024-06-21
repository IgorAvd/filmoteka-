import styled from '@emotion/styled';
import { Toolbar } from '@mui/material';

export const ToolbarBox = styled(Toolbar)`
height: 95px;
 @media (max-width: 450px) {
      height: 190px; 
    },
`;

export const ToolBarStyles = {
    "@media (max-width: 750px)": {
        display: 'block',
        paddingTop: '10px',
    },
}



