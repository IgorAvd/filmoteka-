import { Trending } from "../components/Trending/Trending";
import Slider from "../components/Slider";
import { Filter } from "../components/Filter/Filter";

const HomePage = () => {
  return (
    <main>
      <Slider />
      {/* <Filter /> */}
      <Trending />
    </main>
  );
};

export default HomePage;
