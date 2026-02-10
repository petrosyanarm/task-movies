import { create } from "zustand";

export const useMoviesStore = create((set) => ({
  movies: [],
  setMovies: (movies) => set({ movies }),
  swiperMovies: [],
  setSwiperMovies: (movies) => set({ swiperMovies: movies }),
  searchPageMovies: [],
  setSearchPageMovies: (movies) => set({ searchPageMovies: movies }),
  currentMovie: {},
  setCurrentMovie: (movie) => set({ currentMovie: movie }),
  openMenu: false,
  setOpenMenu: (value) => set({ openMenu: value }),
}));
