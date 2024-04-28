import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd769032a337632862f7141a18876e46d';

export function getAllMovie() {
    return axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
}

export function getAllMovieByPage(page: number) {
    return axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`);
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

export function getTv() {
    return axios.get(`${BASE_URL}/trending/tv/day?api_key=${API_KEY}`);
}

export function getTvByPage(page: number) {
    return axios.get(`${BASE_URL}/trending/tv/day?api_key=${API_KEY}&page=${page}`);
}

export function getTvById(seriesId: string) {
    return axios.get(`${BASE_URL}/tv/${seriesId}?api_key=${API_KEY}`);
}

export function getTvVideoById(seriesId: string) {
    return axios.get(`${BASE_URL}/tv/${seriesId}/videos?api_key=${API_KEY}`);
}



