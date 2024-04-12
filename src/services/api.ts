import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd769032a337632862f7141a18876e46d';

export function getAllMovie() {
    return axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
}

export function getMovieDetails(id: string) {
    return axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
}

export function getMovieCredits(id: string) {
    return axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
}

export function getMovieReviews(id: string) {
    return axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
}

export function getTrailer(id: string) {
    return axios.get(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`);
}

// export function getMovieBySearch(name: string) {
//     return axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${name}`);
// }
