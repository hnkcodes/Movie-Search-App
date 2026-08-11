import MoviePage from "./pages/MoviePage";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";

import HomePage from "./pages/HomePage";
import BookMarkPage from "./pages/BookMarkPage";
import MovieItemPage from "./pages/MovieItemPage";
import ErrorPage from "./pages/ErrorPage";
import { loader as movieLoader } from "./pages/MovieItemPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "movie",
        element: <MoviePage />,
      },
      {
        path: "movie/:movieId",
        element: <MovieItemPage />,
        loader: movieLoader,
      },
      {
        path: "bookmark",
        element: <BookMarkPage />,
      },
    ],
  },
]);

function App() {
  return <></>;
}

export default App;
