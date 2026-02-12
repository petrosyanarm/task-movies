import { FaStar } from "react-icons/fa";
import { GoStar } from "react-icons/go";
import Button from "@/components/ui/Button";
function MovieRatings({ movie }) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex flex-col gap-1">
                <span className="text-neutral-500 text-[11px] sm:text-xs font-bold">
                    IMDb RATING
                </span>
                <Button variant="five" className="flex items-center gap-2 px-3 py-2">
                    <FaStar className="text-yellow text-xl sm:text-2xl" />
                    <div className="flex flex-col leading-tight">
                        <span className="text-base sm:text-lg font-semibold">
                            {movie.imdbRating}
                            <span className="text-xs sm:text-sm">/10</span>
                        </span>
                        <span className="text-[11px] sm:text-xs text-neutral-400">
                            {movie.imdbVotes}
                        </span>
                    </div>
                </Button>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-neutral-500 text-[11px] sm:text-xs font-bold">
                    YOUR RATING
                </span>
                <Button variant="five" className="flex items-center gap-2 px-3 py-2">
                    <GoStar className="text-blue-400 text-xl sm:text-[22px]" />
                    <span className="text-blue-400 text-base sm:text-lg font-semibold">
                        Rate
                    </span>
                </Button>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-neutral-500 text-[11px] sm:text-xs font-bold">
                    POPULARITY
                </span>
                <Button variant="five" className="flex items-center gap-2 px-3 py-2">
                    <GoStar className="text-green-400 text-xl sm:text-[22px]" />
                    <span className="text-white text-base sm:text-lg font-semibold">
                        829
                    </span>
                </Button>
            </div>
        </div>

    )
}
export default MovieRatings;