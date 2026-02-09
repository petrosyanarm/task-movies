import { FaStar } from "react-icons/fa";
import { GoStar } from "react-icons/go";
import Button from "@/components/ui/Button";
function MovieRatings({ currentMovie }) {
    return (
        <div className="flex gap-2 ">
            <div className="px-2 flex flex-col gap-1">
                <span className="text-neutral-500 text-[12px] font-bold">IMDb RATING</span>
                <Button variant={'five'}>
                    <FaStar className="text-yellow text-[24px]" />
                    <div className="flex flex-col">
                        <div className="flex">
                            <span className="text-[18px]">{currentMovie.imdbRating}
                                <span className="text-[14px]">/10</span></span>
                        </div>
                        <div>
                            <span className="text-[12px]">{currentMovie.imdbVotes}</span>
                        </div>
                    </div>
                </Button>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-neutral-500 text-[12px] font-bold">YOUR RATING</span>
                <Button variant={'five'} className={'py-2'}>
                    <GoStar className="text-blue-400 text-[22px]" />
                    <span className="text-blue-400 text-[21px]">Rate</span>
                </Button>
            </div>
            <div className="px-4 flex flex-col gap-1">
                <span className="text-neutral-500 text-[12px] font-bold">POPULARITY</span>
                <Button variant={'five'} className="py-2">
                    <GoStar className="text-green-400 text-[22px]" />
                    <span className="text-white text-[21px]">829</span>
                </Button>
            </div>
        </div>
    )
}
export default MovieRatings;