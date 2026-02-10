import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from "react";
import { useMoviesStore } from "@/store/useMoviesStore";
import { homeMovies } from "@/api/Api";
import Swipe from '@/components/home/Swipe';
import Loader from '@/components/ui/Loader';

function HomeSwiper() {
    const { setSwiperMovies } = useMoviesStore();
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null)
    useEffect(() => {
        const getMovies = async () => {
            setLoading(true);
            try {
                const data = await homeMovies("rocky");
                setSwiperMovies(data);
                setLoading(false);
            } catch (error) {
                setError('No Movies found')
            }
        };
        getMovies();
    }, []);
    return (
        <div className="relative py-10">
            {loading && <Loader />}
            {error && <p className="text-base text-red-600">{error}</p>}
            <Swipe />
        </div>
    )
}
export default HomeSwiper;