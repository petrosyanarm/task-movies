import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovies } from "@/api/Api";
import { useMoviesStore } from "@/store/useMoviesStore";
import MoviePoster from "@/components/movie/MoviePoster";
import MovieRatings from "@/components/movie/MovieRatings";

function currentMoviePage() {
    const { id } = useParams();
    const { currentMovie, setCurrentMovie } = useMoviesStore();
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const getMovie = async () => {
            setLoading(true)
            const data = await getMovies(id);
            setCurrentMovie(data);
            setLoading(false);
        };
        getMovie();
    }, [id]);

    if (!currentMovie) {
        return <p className="text-white p-6">...</p>;
    }

    if (loading) return <p className="text-white p-6">Loading...</p>;
    return (
        <div className="px-6 py-6 text-white flex">
            <MoviePoster currentMovie={currentMovie}/>
            <MovieRatings currentMovie={currentMovie}/>
        </div>
    )
}
export default currentMoviePage;