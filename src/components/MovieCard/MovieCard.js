import { nanoid } from 'nanoid';
import { Card } from './MovieCard.styled';


export const MovieCard = ({ data }) => {
    const imgDefault =
        'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

    const year = data.release_date.split('-');
  
    return (
        <Card>
            <img
                src={
                    data.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                        : imgDefault
                }
                alt={data.title}
                width={350}
            />
            <div className="info-card">
                <h1>
                    {data.title} ({year[0]})
                </h1>
                <p>
                    <i>{data.tagline}</i>
                </p>
                <p>{data.overview}</p>
                <div>
                    <p className="info-title">
                        <strong>Genres:</strong>
                    </p>
                    <ul>
                        {data.genres.map(item => (
                            <li key={nanoid()}>
                                <p>{item.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="info-title">
                        <strong>Languages:</strong>
                    </p>
                    <ul>
                        {data.spoken_languages.map(item => (
                            <li key={nanoid()}>
                                <p>{item.english_name}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="info-title">
                        <strong>Production countries:</strong>
                    </p>
                    <ul>
                        {data.production_countries.map(item => (
                            <li key={nanoid()}>
                                <p>{item.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Card>
    );
};