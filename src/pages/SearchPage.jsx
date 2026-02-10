import { searchMovies } from "@/api/Api";
import { useMoviesStore } from "@/store/useMoviesStore";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ErrorImage from "@/assets/images/error_image.svg"
import Loader from "@/components/ui/Loader";

function SearchPage() {
    const navigate = useNavigate();
    const { searchPageMovies, setSearchPageMovies } = useMoviesStore();
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const query = searchParams.get('q')
    useEffect(() => {
        setLoading(true)
        const fetchMovies = async () => {
            const data = await searchMovies(query)
            setSearchPageMovies(data || [])
            setLoading(false)
        }
        fetchMovies()
    }, [query])
    if (!query) return <div className="px-3 pt-8 pb-80">
        <div className="flex flex-col gap-6 text-white">
            <span className="text-5xl">Search IMDb</span>
            <p className="text-2xl">Search IMDb by typing a word or phrase in the search box at the top of this page.</p>
        </div>
    </div>
    return (
        <div className="px-3 py-8 flex gap-5 flex-col">
            {loading && <Loader />}
            <div>
                <span className="text-3xl text-white">Search "{query}"</span>
            </div>
            <div className="flex flex-col gap-5">
                {searchPageMovies.map((item) => (
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