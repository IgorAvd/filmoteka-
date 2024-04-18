import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 8px 27px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  transition: color 0.3s ease;

  :hover {
    color: orangered;
  }
`;

export const BackLink = ({ to, children }: any) => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: "25px",
        textAlign: "left",
        color: "#ffffff",
      }}
    >
      <StyledLink to={to}>
        <GoArrowLeft size="40" style={{ marginRight: "20px" }} />
        {children}
      </StyledLink>
    </Typography>
  );
};
