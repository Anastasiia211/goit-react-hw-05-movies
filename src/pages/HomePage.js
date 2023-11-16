import { useEffect, useState } from "react";
import { RotatingSquare } from 'react-loader-spinner';
import { MovieList } from './MovieList';
import { fetchMovies } from '..api/';

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getMovies() {
            try {
                setLoading(true);
                setError(false);
                const allMovies = await fetchMovies();
                setMovies(allMovies.results);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
    
        getMovies();
    }, []);

    return (
        <>
            <h1>Trending Now</h1>
            {loading && (
                <RotatingSquare
                    height="100"
                    width="100"
                    color="#4fa94d"
                    ariaLabel="rotating-square-loading"
                    strokeWidth="4"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            )}
            {error && <p>Error! Please reload this page!</p>}
            {movies ? (
                <MovieList items={movies} />
            ) : (
                <p>Error! Please reload this page!</p>
            )}
            
          
        </>
    );
}