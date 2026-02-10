import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export const api = axios.create({
  baseURL: `${BASE_URL}`,
  headers: { "Content-Type": "application/json" },
});

export const searchMovies = async (query) => {
  const res = await api.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
  const data = res.data.Search;
  return data;
};

export const getMovies = async (id) => {
  const res = await api.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
  const data = res.data;
  return data;
};

export const homeMovies = async (query = "star") => {
  const res = await api.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
  const data = res.data.Search;
  return data;
};
