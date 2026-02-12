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
import { useSearchMovies } from "@/utils/hooks/useQuery";

function SearchDropdown() {
  const [openTypes, setOpenTypes] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selected, setSelected] = useState(SEARCH_TYPES[0]);
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);
  const navigate = useNavigate();
  const ref = useRef(null);
  useOutsideClick(ref, () => { setOpenDropdown(false); setOpenTypes(false) });

  const { data: movies = [], isLoading } = useSearchMovies(debouncedQuery)

  useEffect(() => {
    if (debouncedQuery) {
      setOpenDropdown(true)
    } else {
      setOpenDropdown(false)
    }
  }, [debouncedQuery])

  const handleSearch = async () => {
    navigate(`/find?q=${debouncedQuery}`)
    setOpenDropdown(false)
  }

  return (
    <div className="flex w-full sm:relative rounded-[5px] bg-white">
      <div className="flex w-full sm:relative  rounded-l-[5px]">
        <div ref={ref} onClick={() => setOpenTypes(!openTypes)} className="px-2 py-1 relative cursor-pointer border-r border-r-gray-400 hidden h-full hover:bg-gray-200 rounded-l-[5px] md:flex items-center gap-2">
          <Button className="w-full flex gap-1 items-center ">
            <span className="flex text-sm items-center text-black gap-1">
              {selected.title} <RiArrowDownSFill className={twMerge("transition-transform text-xl", openTypes ? "rotate-180" : "")} /></span>
          </Button>
          {openTypes &&
            <ul className="absolute pt-1 pb-2 left-0 top-10 w-50 bg-neutral-900 flex flex-col gap-3 rounded shadow z-999">
              {SEARCH_TYPES.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.id} onClick={() => { setSelected(item); setOpenTypes(!openTypes) }}
                    className={twMerge(selected.id === item.id ? "text-yellow" : "text-white", "px-3 py-2 cursor-pointer hover:bg-gray-700 flex items-center gap-3")}>
                    <Icon className="text-[22px]" />{item.title}
                  </li>)
              })}
            </ul>}
        </div>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSearch()} onFocus={() => setOpenDropdown(true)} className={`flex-1 w-[10%] px-3 py-1 focus:outline-none focus:rounded-[5px] focus:ring-2 focus:ring-yellow`} />
        {openDropdown && (
          <div ref={ref} className="absolute  overflow-y-auto max-h-150 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-600 dark:[&::-webkit-scrollbar-track]:bg-neutral-700  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 top-15.5 sm:top-11 left-0 w-full bg-neutral-900 text-white rounded shadow z-50">
            {isLoading && <Skeleton />}
            {!isLoading && movies.length === 0 ? <p className="py-2 px-5">Your search is too general — try adding more letters.</p> : movies.map((movie) => (
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
        <div className="flex absolute right-16 top-4 sm:right-0 sm:top-0.5 items-center px-2 py-1 justify-center">
          <Button onClick={handleSearch}>
            <IoIosSearch className="w-8 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SearchDropdown