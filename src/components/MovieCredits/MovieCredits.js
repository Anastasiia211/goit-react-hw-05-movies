import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RotatingSquare } from 'react-loader-spinner';
import { fetchCredits } from 'api';
import { CreditsCard, Error } from './MovieCredits.styled';

const MovieCredits = () => {
      const [loading, setLoading] = useState(false);
  const params = useParams();
  const [credits, setCredits] = useState([]);
  const imgDefault =
        'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    
    useEffect(() => {
        if (!params.movieId) return;
        async function getCredits() {
            try {
                setLoading(true);
                const fetchedCredits = await fetchCredits(params.movieId);
                setCredits(fetchedCredits.cast);
            } catch (error) {
            } finally {
                setLoading(false);
            }
        }
            getCredits();
    }, [params.movieId]);
    
    return (
        <>
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
             {credits.length > 0 ? (
        <CreditsCard>
          {credits.map(item => (
            <li key={item.id}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                    : imgDefault
                }
                alt={item.name}
                width={213}
              />

              <p>{item.name}</p>
              <p>
                <i>{item.character}</i>
              </p>
            </li>
          ))}
        </CreditsCard>
      ) : (
        <Error>
          <p>Cast not available</p>
        </Error>
      )}
    </>
  );
};

export default MovieCredits;
