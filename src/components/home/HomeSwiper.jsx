import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { homeMovies } from "@/api/Api";
import Swipe from '@/components/home/Swipe';
import Loader from '@/components/ui/Loader';
import { useQuery } from '@tanstack/react-query';

function HomeSwiper() {
    const { data: movies = [], isLoading, isError, error } = useQuery({
        queryKey: ["homeMovies", "rocky"],
        queryFn: () => homeMovies('rocky'),
    })
    if (isLoading) return <Loader />
    if (isError) return <p className="text-base text-red-600">{error.message}</p>
    return (
        <div className="relative py-10">
            <Swipe movies={movies} />
        </div>
    )
}
export default HomeSwiper;