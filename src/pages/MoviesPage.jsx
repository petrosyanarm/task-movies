import { useParams } from "react-router-dom";
import { getMovies } from "@/api/Api";
import MoviePoster from "@/components/movie/MoviePoster";
import MovieRatings from "@/components/movie/MovieRatings";
import Loader from "@/components/ui/Loader";
import { useQuery } from "@tanstack/react-query";

function MoviesPage() {
    const { id } = useParams();
    const { data: movie, isLoading, isError, error, } = useQuery({
        queryKey: ['movie', id],
        queryFn: () => getMovies(id),
        enabled: !!id,
    })
    if (isLoading) return <Loader />
    if (isError) return <p>{error}</p>
    return (
        <div className="px-6 py-6 text-white flex gap-2 lg:gap-0">
            <MoviePoster movie={movie} />
            <MovieRatings movie={movie} />
        </div>
    )
}
export default MoviesPage;