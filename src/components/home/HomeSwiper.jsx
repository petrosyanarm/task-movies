import Loader from '@/components/ui/Loader';
import { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "@/components/ui/Icons";
import { useSearchMovies } from '@/utils/hooks/useQuery';
import Swipe from '@/components/home/Swipe';
import { useNavigate } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Button from '@/components/ui/Button';
import { MdVideoLibrary } from '@/components/ui/Icons'

function HomeSwiper() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const navigate = useNavigate();
    const { data: movies = [], isLoading, isError, error } = useSearchMovies('rocky')
    if (isLoading) return <Loader />
    if (isError) return <p className="text-base text-red-600">{error.message}</p>
    return (
        <div className="relative py-20">
            <Swipe
                className="w-[70%] flex justify-center items-center" prevRef={prevRef} nextRef={nextRef}
                modules={[Navigation]}
                slidesPerView
                navigation >
                <button ref={prevRef} className="absolute left-0 top-70 -translate-y-1/2 z-10 border rounded-lg text-white h-14 border-white p-2 bg-neutral-500 cursor-pointer shadow-lg hover:text-yellow">
                    <IoIosArrowBack size={28} />
                </button>
                <button ref={nextRef} className="absolute right-0 top-70 -translate-y-1/2 z-10 border rounded-lg text-white h-14 border-white p-2 bg-neutral-500 cursor-pointer shadow-lg hover:text-yellow">
                    <IoIosArrowForward size={28} />
                </button>
                {movies.map((movie) => {
                    const highResPoster = movie.Poster?.replace("_SX300", "_SX800");
                    return (
                        <SwiperSlide className="flex justify-center items-center" key={movie.imdbID}>
                            <div onClick={() => navigate(`/movie/${movie.imdbID}`)} className="flex relative group flex-col gap-2 cursor-pointer">
                                <img src={highResPoster} alt={movie.Title} className="w-full rounded-lg h-150 object-cover" />
                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute flex flex-col bottom-0 left-0 right-0 p-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <span className="text-white font-semibold text-lg">{movie.Title}</span>
                                    <span className="text-gray-400 text-sm">{movie.Year}</span>
                                    <Button className="mt-3 w-full flex justify-center gap-4 items-center bg-yellow-400 text-white font-semibold text-lg py-2 rounded-md hover:bg-yellow-300 transition">
                                        <MdVideoLibrary /> Watch trailer
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>)
                })}
            </Swipe>
        </div>
    )
}
export default HomeSwiper;