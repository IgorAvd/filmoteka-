import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Navigation } from "../Navigation/Navigation";
import { ToolBarStyles } from "./AppBar.styled";

export const AppBarComponent: React.FC = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "black", display: "flex" }}>
      <Toolbar sx={ToolBarStyles} style={{ height: "95px" }}>
        <Typography variant="h6" component="div">
          <Navigation />
        </Typography>        
      </Toolbar>
    </AppBar>
  );
};
