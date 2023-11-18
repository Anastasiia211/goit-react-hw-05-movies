import { Link, useLocation } from "react-router-dom";


export const MovieItem = ({ movie }) => {
    const location = useLocation;
    const imgDefault =
        'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

    const year = movie.release.data.split('-');

    return (
        <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <img
                width={320}
                src={
                    movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : imgDefault
                }
                alt={movie.title}
            />
            <div className="">
                <h3>
                    {movie.title} ({year[0]})
                </h3>
            </div>
        </Link>
    );
};