import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { LinkStyle } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <nav>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <div style={{ display: "flex", gap: "16px" }}>
          <LinkStyle to="/">Movies</LinkStyle>
          <LinkStyle to="/tv-shows">Serials</LinkStyle>
        </div>
      </Typography>
    </nav>
  );
};
