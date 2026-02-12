import { Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Swipe({ slidesPerView = 1, className = "", prevRef, nextRef, children }) {
    return (
        <Swiper className={className}
            modules={[Navigation]}
            slidesPerView={slidesPerView}
            navigation
            onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
            }}>
            {children}
        </Swiper>
    )
}
export default Swipe;