import { FaStar } from "react-icons/fa";
import { GoStar } from "react-icons/go";
import Button from "@/components/ui/Button";
function MovieRatings({ currentMovie }) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex flex-col gap-1">
                <span className="text-neutral-500 text-[11px] sm:text-[12px] font-bold">
                    IMDb RATING
                </span>
                <Button variant="five" className="flex items-center gap-2 px-3 py-2">
                    <FaStar className="text-yellow text-[20px] sm:text-[24px]" />
                    <div className="flex flex-col leading-tight">
                        <span className="text-[16px] sm:text-[18px] font-semibold">
                            {currentMovie.imdbRating}
                            <span className="text-[12px] sm:text-[14px]">/10</span>
                        </span>
                        <span className="text-[11px] sm:text-[12px] text-neutral-400">
                            {currentMovie.imdbVotes}
                        </span>
                    </div>
                </Button>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-neutral-500 text-[11px] sm:text-[12px] font-bold">
                    YOUR RATING
                </span>
                <Button variant="five" className="flex items-center gap-2 px-3 py-2">
                    <GoStar className="text-blue-400 text-[20px] sm:text-[22px]" />
                    <span className="text-blue-400 text-[16px] sm:text-[18px] font-semibold">
                        Rate
                    </span>
                </Button>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-neutral-500 text-[11px] sm:text-[12px] font-bold">
                    POPULARITY
                </span>
                <Button variant="five" className="flex items-center gap-2 px-3 py-2">
                    <GoStar className="text-green-400 text-[20px] sm:text-[22px]" />
                    <span className="text-white text-[16px] sm:text-[18px] font-semibold">
                        829
                    </span>
                </Button>
            </div>
        </div>

    )
}
export default MovieRatings;