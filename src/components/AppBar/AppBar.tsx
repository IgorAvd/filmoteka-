import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Navigation } from "../Navigation";
import { Filter } from "../Filter/Filter";

import { ToolBarStyles } from "./AppBar.styled";

export const AppBarComponent: React.FC = () => {
  return (
    // <Box sx={BoxStyles}>
    <AppBar position="fixed" sx={{ backgroundColor: "black", display: "flex" }}>
      <Toolbar sx={ToolBarStyles} style={{ height: "95px" }}>
        <Typography variant="h6" component="div">
          <Navigation />
        </Typography>
        <Filter />
      </Toolbar>
    </AppBar>
    // </Box>
  );
};
