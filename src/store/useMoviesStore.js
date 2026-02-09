import { create } from "zustand";

export const useMoviesStore = create((set) => ({
  movies: [],
  setMovies: (movies) => set({ movies }),
  currentMovie: {},
  setCurrentMovie: (movie) => set({ currentMovie: movie }),
}));
