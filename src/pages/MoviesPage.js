import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { MovieList } from '../components/MovieList/MovieList';
import { SearchMovie } from '../components/SearchMovie/SearchMovie';
import { searchMovies } from 'api';
import toast, { Toaster } from 'react-hot-toast';
import { RotatingSquare } from 'react-loader-spinner';

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [, setQuery] = useState('');

    const [searchParams, setSearchParams] = useSearchParams();
    const title = searchParams.get('title');

    useEffect(() => {
        if (!title || title === '') {
            return;
        }
        async function getMovies() {
            try {
                setLoading(true);
                setError(false);
                const allMovies = await searchMovies(title);
                setMovies(allMovies.results);
                if (allMovies.results < 1) {
                    toast.error('There are no entries. Try again');
                }
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        getMovies();
    }, [title]);

    const handlerSubmit = evt => {
        if (title !== evt.search.trim()) {
            setMovies([]);
        }
        setQuery(evt.search.trim());
        setSearchParams({ title: evt.search.trim() });
    };

    const handlerChange = evt => {
        setSearchParams({ title: evt.target.value.trim() });
    };

    return (
        <>
            <h1>All movies</h1>
            <SearchMovie onSubmit={handlerSubmit} handleChange={handlerChange} />
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
            {movies.length > 0 && <MovieList items={movies} />}
            <Toaster position="top-right" />
        </>
    );
    }