import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovies } from "@/api/Api";
import { useMoviesStore } from "@/store/useMoviesStore";
import MoviePoster from "@/components/movie/MoviePoster";
import MovieRatings from "@/components/movie/MovieRatings";
import Loader from "@/components/ui/Loader";

function MoviesPage() {
    const { id } = useParams();
    const { currentMovie, setCurrentMovie } = useMoviesStore();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getMovie = async () => {
            setLoading(true);
            try {
                setError(null);
                const data = await getMovies(id);
                setCurrentMovie(data);
                setLoading(false);
            } catch (error) {
                setError('Failed to load movie.')
            }
        };
        getMovie();
    }, [id]);

    return (
        <div className="px-6 py-6 text-white flex gap-2 lg:gap-0">
            {loading && <Loader />}
            {error && <p className="text-base text-red-600">{error}</p>}
            <MoviePoster currentMovie={currentMovie} />
            <MovieRatings currentMovie={currentMovie} />
        </div>
    )
}
export default MoviesPage;