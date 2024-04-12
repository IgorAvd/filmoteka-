import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getAllMovie } from "./services/api";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import TrendingDetails from "./components/TrendingDetails/TrendingDetails";
import { Movies } from "./components/Movies";

const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Review/Reviews"));

export const App = () => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   getAllMovie();
  //   // .then((response) => {
  //   //   setData(response.data.results);
  //   // })
  //   // .catch((error) => {
  //   //   console.error(error);
  //   // });
  // }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies/:movieId" element={<TrendingDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  );
};
