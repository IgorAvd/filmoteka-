import { Typography } from "@mui/material";
import { Hero } from "../components/Hero/Hero";
import { Trending } from "../components/Trending/Trending";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <main>
      {/* <Hero /> */}
      <Slider />
      <Trending />
    </main>
  );
};

export default HomePage;
