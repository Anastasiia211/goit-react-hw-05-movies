import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTY1NDU5YjQyMDIyZWIxNmY1Y2ZhZThmYmEwNTZjNSIsInN1YiI6IjY1NTUzZGE5NjdiNjEzNDVjZjA1MWZlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._8RTzmcO78xExbWd32QNw6iyXkN3hqQndvomjFUjc2k'
  }
};


export const fetchMovies = async () => {
    const params = new URLSearchParams({
        language: 'en-US',
        time_window: 'week',
    });
    const response = await axios.get(`/trending/movie/week?${params}`, options);
    return response.data;
};