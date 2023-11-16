
import { Layout } from './Layout/';
import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';


const HomePage = lazy(() => import('pages/HomePage'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieCredits = lazy(() => import('./MovieCredits/'));
const MovieReviews = lazy(() => import('./MovieReviews/'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="movies" element={<MoviesPage />} />
      <Route path='movies/:movieId' element={<MovieDetails />}>
      <Route path='cast' element={<MovieCredits />}></Route>
        <Route path='reviews' element={<MovieReviews />}></Route> 
      </Route>  
      <Route path='*' element={<Navigate to='/' />} />
      </Route>
 </Routes>
  );
};