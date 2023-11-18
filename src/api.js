import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTY1NDU5YjQyMDIyZWIxNmY1Y2ZhZThmYmEwNTZjNSIsInN1YiI6IjY1NTUzZGE5NjdiNjEzNDVjZjA1MWZlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._8RTzmcO78xExbWd32QNw6iyXkN3hqQndvomjFUjc2k'
  },
};


export const fetchMovies = async () => {
    const params = new URLSearchParams({
        language: 'en-US',
        time_window: 'week',
    });
    const response = await axios.get(`/trending/movie/week?${params}`, options);
    return response.data;
};

export const searchMovies = async query => {
  const params = new URLSearchParams({
    include_adult: false,
    language: 'en-US',
    page: 1,
    query: query,
  });
  const response = await axios.get(`/search/movie?${params}`, options);
  return response.data;
};

export const fetchMovieById = async movieId => {
  const params = new URLSearchParams({
    language: 'en-US',
    movie_id: movieId,
  });
  const response = await axios.get(`/movie/${movieId}?${params}`, options);
  return response.data;
};

export const fetchCredits = async movieId => {
  const params = new URLSearchParams({
    language: 'en-US',
    movie_id: movieId,
  });
  const response = await axios.get(
    `/movie/${movieId}/credits?${params}`,
    options
  );
  return response.data;
};

export const fetchReviews = async movieId => {
  const params = new URLSearchParams({
    language: 'en-US',
    movie_id: movieId,
    page: 1,
  });
  const response = await axios.get(
    `/movie/${movieId}/reviews?${params}`,
    options
  );
  return response.data;
};