import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import { Navigation } from "./components/Navigation/Navigation";
import Loader from "react-loader-spinner";

const HomePage = lazy(() => import('./pages/Home/HomePage' /* webpackChunkName: 'Home Page'*/));
const MoviesPage = lazy(() => import('./pages/Movies/MoviesPage' /* webpackChunkName: 'Movies Page'*/));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetails/MovieDetailsPage' /* webpackChunkName: 'Movie Details Page'*/))

export default function App() {

  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route>
            <p>Page not found</p>
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
