import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export const api = axios.create({
  baseURL: `${BASE_URL}`,
  params: {
    apikey: `${API_KEY}`,
  },
  headers: { "Content-Type": "application/json" },
});

const fetchQuery = async (query) => {
  const res = await api.get(`${BASE_URL}?apikey&s=${query}`);
  const data = res.data.Search;
  return data || [];
};

export const searchMovies = (query) => fetchQuery(query);
export const homeMovies = () => fetchQuery("rocky");

export const getMovies = async (id) => {
  const res = await api.get(`${BASE_URL}?apikey&i=${id}`);
  const data = res.data;
  return data;
};
