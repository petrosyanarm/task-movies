import { create } from "zustand";

export const useMoviesStore = create((set) => ({
  openMenu: false,
  setOpenMenu: (value) => set({ openMenu: value }),
}));
