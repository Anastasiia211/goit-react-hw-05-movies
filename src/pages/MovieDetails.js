import { useEffect, useState, useRef } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { InfoAdd } from '../components/InfoAdd/InfoAdd';
import { LinkBack } from '../components/LinkBack/LinkBack';
import { MovieCard } from '../components/MovieCard/MovieCard';
import { fetchMovieById } from 'api';

export default function MovieDetails() {
  const location = useLocation();
  const params = useParams();
  const [movie, setMovie] = useState();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');


  useEffect(() => {
    if (!params.movieId) return;
    async function getMovie() {
      try {
        const fetchedMovie = await fetchMovieById(params.movieId);
        setMovie(fetchedMovie);
      } catch (error) {}
    }

    getMovie();
  }, [params.movieId]);

  return (
    <>
      <LinkBack to={backLinkLocationRef.current}>Back</LinkBack>
      {movie && (
        <>
          <MovieCard data={movie} />
          <InfoAdd data={movie} />
        </>
      )}

      <Outlet />
    </>
  );
}