import { useMoviesStore } from "@/store/useMoviesStore";
import { useNavigate } from "react-router-dom";


function SearchPage() {
    const navigate = useNavigate();
    const movies = useMoviesStore((state) => state.movies);
    return (
        <div className="px-3 py-8 flex gap-3 flex-col">
            <div>
                <span className="text-2xl text-white">Search</span>
            </div>
             {movies === 0 && (
            <div className="absolute top-full left-0 w-full bg-neutral-900 text-white p-3 rounded shadow z-50">
                No results
            </div>
        )}
            <div className="flex flex-col gap-5">
            {movies.map((item) => (
                <div className="w-[80%] flex border-b py-1 text-white" key={item.imdbID} onClick={() => navigate(`/movie/${item.imdbID}`)}>
                    <img className="w-25 h-25 object-contain cursor-pointer" src={item.Poster} />
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