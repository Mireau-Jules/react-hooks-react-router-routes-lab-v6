import Home from "./pages/Home.jsx";
import Directors from "./pages/Directors.jsx";
import Actors from "./pages/Actors.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Movie from "./pages/Movie.jsx";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/movie/:id",
    element: <Movie />,
    errorElement: <ErrorPage />
  },
  {
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorPage />
  },
  {
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorPage />
  }
];

export default routes;
