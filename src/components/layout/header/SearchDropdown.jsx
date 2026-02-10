import { searchMovies } from "@/api/Api";
import { useMoviesStore } from "@/store/useMoviesStore";
import { SEARCH_TYPES } from "@/utils/constants/Languages";
import { useDebounce } from "@/utils/hooks/Debounce";
import { useState, useEffect, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { RiArrowDownSFill } from "react-icons/ri";
import ErrorImage from "@/assets/images/error_image.svg"
import Button from "@/components/ui/Button";
import { useOutsideClick } from "@/utils/hooks/useOutsideClick";
import Skeleton from "@/components/ui/Skeleton";
import { twMerge } from 'tailwind-merge';

function SearchDropdown() {
  const { movies, setMovies } = useMoviesStore();
  const [openTypes, setOpenTypes] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selected, setSelected] = useState(SEARCH_TYPES[0]);
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  const debouncedQuery = useDebounce(query, 500);
  const navigate = useNavigate();
  const ref = useRef(null);
  useOutsideClick(ref, () => { setOpenDropdown(false); setOpenTypes(false) });

  useEffect(() => {
    if (!debouncedQuery) {
      setMovies([]);
      return;
    }
    const fetchMovies = async () => {
      setLoading(true);
      try {
        setError(null)
        const data = await searchMovies(debouncedQuery);
        setMovies(data || []);
        setLoading(false);
        setOpenDropdown(true);
      } catch (error) {
        setError('Failed to load movies.')
      }
    };
    fetchMovies();
  }, [debouncedQuery]);

  const handleSearch = async () => {
    setLoading(true);
    try {
      navigate(`/find?q=${debouncedQuery}`)
      setOpenDropdown(false)
      setLoading(false);
    } catch (error) {
      setError('Failed to load movies.')
    }
  }

  return (
    <div className="flex w-full relative rounded-[5px] bg-white">
      <div className="flex w-full relative rounded-l-[5px]">
        <div className="px-2 py-1 hidden h-full hover:bg-gray-200 rounded-l-[5px] md:flex items-center gap-2">
          <Button onClick={() => setOpenTypes((prev) => !prev)} className="w-full flex gap-1 items-center focus:outline-none">
            <span className="flex text-[14px] items-center text-black gap-2">
              {selected.title} <RiArrowDownSFill className="text-[20px]" /></span>
          </Button>
          {openTypes && (
            <ul ref={ref} className="absolute left-0 top-10 w-50 bg-neutral-900 flex flex-col gap-3 rounded shadow z-999">
              {SEARCH_TYPES.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.id} onClick={() => { setSelected(item); setOpenTypes(false) }}
                    className={twMerge(selected.id === item.id ? "text-yellow" : "text-white", "px-3 py-2 cursor-pointer hover:bg-gray-700 flex items-center gap-3")}>
                    <Icon className="text-[22px]" />{item.title}
                  </li>)
              })}
            </ul>)}
        </div>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} onFocus={() => setOpenDropdown(true)} className={`flex-1 w-[10%] px-3 py-1 focus:outline-none focus:rounded-[5px] focus:ring-2 focus:ring-yellow`} />
        {openDropdown && (
          <div ref={ref} className="absolute overflow-y-auto max-h-150 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-600 dark:[&::-webkit-scrollbar-track]:bg-neutral-700  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 top-11 left-0 w-full bg-neutral-900 text-white rounded shadow z-50">
            {loading && <Skeleton />}
            {error && <p className="text-base text-red-600">{error}</p>}
            {movies.length === 0 ? <p className="py-2 px-5">Your search is too general — try adding more letters.</p> : movies.map((movie) => (
              <div key={movie.imdbID} onClick={() => {
                navigate(`/movie/${movie.imdbID}`);
                setOpenDropdown(false);
                setQuery("");
              }}
                className="px-2 py-3 border-b hover:bg-neutral-800 cursor-pointer flex gap-2">
                <img src={movie.Poster} onError={(e) => {
                  e.currentTarget.src = ErrorImage
                }} alt={movie.Title} className="w-10 h-14 object-cover rounded" />
                <div>
                  <p className="text-base font-semibold">{movie.Title}</p>
                  <p className="text-sm text-gray-400">
                    {movie.Year} {movie.Type}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex absolute right-0 top-0.5 items-center px-2 py-1 justify-center">
          <Button onClick={handleSearch}>
            <IoIosSearch className="w-8 h-5" />
          </Button>
        </div>
      </div>
      {error && <p className="text-base text-red-600">{error}</p>}
    </div>
  );
}

export default SearchDropdown