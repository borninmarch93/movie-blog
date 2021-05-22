import axios from "axios";

export const fetchMovies = async () => {
    const moviesResponse = await axios.get('https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies');
    return moviesResponse.data;
}

export const fetchMovie = async (movieId) => {
    const moviesResponse = await axios.get(`https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies/${movieId}`);
    return moviesResponse.data;
}

export const fetchMovieComments = async (movieId) => {
    const moviesResponse = await axios.get(`https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies/${movieId}/comments`);
    return moviesResponse.data;
}

export const fetchMovieTrailer = async (imdbId) => {
    const trailerResponse = await axios.get(`https://imdb-api.com/en/API/Trailer/k_tn1xbc3d/${imdbId}`);
    return trailerResponse.data;
}