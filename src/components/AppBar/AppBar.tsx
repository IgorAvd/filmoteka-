import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Navigation } from "../Navigation/Navigation";
import { ToolbarBox, ToolBarStyles } from "./AppBar.styled";

export const AppBarComponent: React.FC = () => {
  return (  
    <AppBar position="fixed" sx={{ backgroundColor: "black", display: "flex" }}>
      <ToolbarBox sx={ToolBarStyles}>
        <Typography variant="h6" component="div">
          <Navigation />
        </Typography>
      </ToolbarBox>
    </AppBar>
  );
};
