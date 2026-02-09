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

function SearchDropdown() {
  const { movies, setMovies } = useMoviesStore();
  const [openTypes, setOpenTypes] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selected, setSelected] = useState(SEARCH_TYPES[0]);
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('');
  const [error,setError]=useState(false);
  const debouncedQuery = useDebounce(query, 500);
  const navigate = useNavigate();
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpenTypes(false);
        setOpenDropdown(false)
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (!debouncedQuery) {
      setMovies([]);
      // setOpenDropdown(false);
      return;
    }
    const fetchMovies = async () => {
      setLoading(true);
      const data = await searchMovies(debouncedQuery);
      setMovies(data || []);
      setLoading(false);
      setOpenDropdown(true);
      console.log(data)
      console.log(debouncedQuery)
    };
    fetchMovies();
  }, [debouncedQuery, setMovies]);

  const handleSearch = async () => {
    const res = await searchMovies(query)
    setMovies(res)
    navigate('/find')
    console.log(res)
    setOpenDropdown(false)
  }
  return (
    <div className="flex relative rounded-[5px] bg-white">
      <div className="flex relative border rounded-l-[5px]  w-full">
        <div ref={ref} className="px-2 py-1 absolute h-full hover:bg-gray-200 rounded-l-[5px] flex items-center gap-2">
          <Button onClick={() => setOpenTypes((prev) => !prev)} className="w-full flex gap-1 items-center focus:outline-none">
            <span className="flex text-[14px] items-center text-black gap-2">
              {selected.title} <RiArrowDownSFill className="text-[20px]" /></span>
          </Button>
          {openTypes && (
            <ul className="absolute left-0 top-10 w-50 bg-neutral-900 flex flex-col gap-3 rounded shadow z-10">
              {SEARCH_TYPES.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.id} onClick={() => { setSelected(item); setOpenTypes(false) }}
                    className={`px-3 py-2 cursor-pointer ${selected.id === item.id ? "text-yellow" : "text-white"} hover:bg-gray-700 flex items-center gap-3`}>
                    <Icon className="text-[22px]" />{item.title}
                  </li>)
              })}
            </ul>)}
        </div>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="flex-1 px-3 py-1 pl-40 focus:outline-none focus:ring-2 focus:ring-yellow" />
        {openDropdown && movies.length > 0 && (
          <div ref={ref} className="absolute top-full left-0 w-full bg-neutral-900 text-white rounded shadow z-50">
            {movies.map((movie) => (
              <div key={movie.imdbID} onClick={() => {
                navigate(`/movie/${movie.imdbID}`);
                setOpenDropdown(false);
                setQuery("");
              }}
                className="px-2 py-3 border-b hover:bg-neutral-800 cursor-pointer flex gap-2">
                <img onError={()=>setError(true)}  src={error ? ErrorImage : movie.Poster}  alt={movie.Title} className="w-10 h-14 object-cover rounded" />
                <div>
                  <p className="text-base font-semibold">{movie.Title}</p>
                  <p className="text-sm text-gray-400">
                    {movie.Year} {movie.Type}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {openDropdown && movies.length === 0 && (
          <div className="absolute top-full left-0 w-full bg-neutral-900 text-white p-3 rounded shadow z-50">
            No results
          </div>
        )}
        <div className="flex absolute right-0 top-0.5 items-center px-2 py-1 justify-center">
          <Button onClick={handleSearch}>
            <IoIosSearch className="w-8 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SearchDropdown