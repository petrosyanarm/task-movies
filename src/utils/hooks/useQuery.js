import { getMovies, searchMovies } from "@/api/Api";
import { useQuery } from "@tanstack/react-query";

export const useMovie = (id) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovies(id),
    enabled: !!id,
  });
};

export const useSearchMovies = (query) => {
  return useQuery({
    queryKey: ["search", query],
    queryFn: () => searchMovies(query),
    enabled: query.length >= 3,
  });
};
