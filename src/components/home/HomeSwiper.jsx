import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { useMoviesStore } from "@/store/useMoviesStore";
import { homeMovies } from "@/api/Api";

function HomeSwiper(){
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const { movies, setMovies } = useMoviesStore();
        const [loading, setLoading] = useState(null);
        const [error, setError] = useState(null)
        useEffect(() => {
            const getMovies = async () => {
                setLoading(true);
                try {
                    const data = await homeMovies("rocky");
                    setMovies(data);
                    setLoading(false);
                } catch (error) {
                    setError('No Movies found')
                }
            };
            getMovies();
        }, []);
    return(
        <div className="relative py-10">
            {loading && <p className="text-base text-white">...</p>}
            {error && <p className="text-base text-red-600">{error}</p>}
            <button ref={prevRef} className="absolute left-60 top-70 -translate-y-1/2 z-10 bg-yellow p-2 rounded-full shadow-lg hover:bg-yellow-600">
                <IoIosArrowBack size={24} />
            </button>
            <button ref={nextRef} className="absolute right-60 top-70 -translate-y-1/2 z-10  bg-yellow p-2 rounded-full shadow-lg hover:bg-yellow-600">
                <IoIosArrowForward size={24} />
            </button>
            <Swiper className="w-[70%] flex justify-center items-center"
                modules={[Navigation]}
                slidesPerView={1}
                navigation
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}>
                {movies.map((movie) => {
                    const highResPoster = movie.Poster?.replace("_SX300", "_SX800");
                    return (
                        <SwiperSlide className="flex justify-center items-center" key={movie.imdbID}>
                            <div className="flex flex-col gap-2 cursor-pointer">
                                <img
                                    src={highResPoster}
                                    alt={movie.Title}
                                    className="w-full rounded-lg h-120 object-cover"
                                />
                                <div className="flex flex-col w-[40%]">
                                    <span className="text-white font-semibold text-[30px]">{movie.Title}</span>
                                    <span className="text-gray-400 text-[20px]">{movie.Year}</span>
                                </div>
                            </div>
                        </SwiperSlide>)
                })}
            </Swiper>



        </div>
    )
}
export default HomeSwiper;