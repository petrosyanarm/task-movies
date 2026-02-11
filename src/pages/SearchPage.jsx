import { searchMovies } from "@/api/Api";
import { useNavigate, useSearchParams } from "react-router-dom";
import ErrorImage from "@/assets/images/error_image.svg"
import Loader from "@/components/ui/Loader";
import { useQuery } from "@tanstack/react-query";

function SearchPage() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('q')
    const { data: movies, isLoading, isError, error } = useQuery({
        queryKey: ['search', query],
        queryFn: () => searchMovies(query),
        enabled: !!query
    })
    if (isLoading) return <Loader />
    if (isError) return <p>Error loading movies</p>;
    if (!movies?.length) return <div className="px-3 pt-8 pb-80">
        <div className="flex flex-col gap-6 text-white">
            <span className="text-5xl">Search IMDb</span>
            <p className="text-2xl">Search IMDb by typing a word or phrase in the search box at the top of this page.</p>
        </div></div>
    return (
        <div className="px-3 py-8 flex gap-5 flex-col">
            <div>
                <span className="text-3xl text-white">Search "{query}"</span>
            </div>
            <div className="flex flex-col gap-5">
                {movies.map((item) => (
                    <div className="w-[80%] flex border-b py-2 gap-3 text-white" key={item.imdbID} onClick={() => navigate(`/movie/${item.imdbID}`)}>
                        <img src={item.Poster} onError={(e) => {
                            e.currentTarget.src = ErrorImage
                        }} className="h-25 object-contain cursor-pointer" />
                        <div className="flex flex-col">
                            <span className="font-bold cursor-pointer">{item.Title}</span>
                            <span>{item.Year}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SearchPage;