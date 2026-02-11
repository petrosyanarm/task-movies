import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { IoIosArrowBack, IoIosArrowForward } from "@/components/ui/Icons";
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';

function Swipe({ movies }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const navigate = useNavigate();
    return (
        <div>
            <button ref={prevRef} className="absolute left-22 sm:left-32 md:left-38 lg:left-60 top-80 -translate-y-1/2 z-10 bg-yellow p-2 rounded-full cursor-pointer shadow-lg hover:bg-yellow-600">
                <IoIosArrowBack size={24} />
            </button>
            <button ref={nextRef} className="absolute right-22 sm:right-32 md:right-38 lg:right-60 top-80 -translate-y-1/2 z-10  bg-yellow p-2 rounded-full cursor-pointer shadow-lg hover:bg-yellow-600">
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
                            <div onClick={() => navigate(`/movie/${movie.imdbID}`)} className="flex flex-col gap-2 cursor-pointer">
                                <img
                                    src={highResPoster}
                                    alt={movie.Title}
                                    className="w-full rounded-lg h-150 object-cover" />
                                <div className="flex flex-col w-[40%]">
                                    <span className="text-white font-semibold text-[20px] lg:text-[30px]">{movie.Title}</span>
                                    <span className="text-gray-400 text-[14px] lg:text-[20px]">{movie.Year}</span>
                                </div>
                            </div>
                        </SwiperSlide>)
                })}
            </Swiper>
        </div>

    )
}
export default Swipe;