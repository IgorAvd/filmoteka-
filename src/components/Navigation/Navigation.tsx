import { Typography } from "@mui/material";
import { LinkStyle, NavigationBox } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <nav>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <NavigationBox >
          <LinkStyle to="/">Movies</LinkStyle>
          <LinkStyle to="/tv-shows">Serials</LinkStyle>
          <LinkStyle to="/selected">Selected </LinkStyle>
        </NavigationBox>
      </Typography>
    </nav>
  );
};
