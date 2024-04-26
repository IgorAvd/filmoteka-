import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { PiArrowFatLeft } from "react-icons/pi";

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 8px 27px;
  color: #000;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  transition: color 0.3s ease;

  :hover {
    color: orangered;
    & > svg {
      transition: color 0.3s ease;
      color: orangered !important;
    }
  }
`;

export const BackLink = ({ to, children }: any) => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: "25px",
      }}
    >
      <StyledLink to={to}>
        <PiArrowFatLeft
          size="40"
          style={{ marginRight: "10px", color: "rgba(0, 255, 255, 0.7)" }}
        />
        {children}
      </StyledLink>
    </Typography>
  );
};
