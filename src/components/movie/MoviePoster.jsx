import { useState } from "react";
import ErrorImage from "@/assets/images/error_image.svg"
import Button from "@/components/ui/Button";

function MoviePoster({currentMovie}){
    const [error,setError]=useState(false)
    return(
        <div className="flex flex-col gap-2">
                <div>
                    <span className="text-5xl">{currentMovie.Title}</span>
                </div>
                <div className="flex gap-2 text-neutral-500">
                    <span>{currentMovie.Year}</span>
                    <span>{currentMovie.Rated}</span>
                    <span>{currentMovie.Runtime}</span>
                </div>
                <div className="pr-4 pb-2">
                    <img className="rounded-lg max-h-100" alt={currentMovie.Title} onError={()=>setError(true)} src={error ? ErrorImage : currentMovie.Poster } />
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2">
                        {currentMovie?.Genre?.split(", ").map((g, i) => (
                            <Button variant={'fourth'} key={i}>{g}</Button>))}
                    </div>
                    <div className="w-[65%] py-1">
                        <p>{currentMovie.Plot}</p>
                    </div>
                    <div className="flex flex-col gap-0">
                        <div className="w-[65%] py-4 border-t border-b flex gap-3">
                            <span className="text-base">Director</span>
                            <span className="text-blue-400 text-base">{currentMovie.Director}</span>
                        </div>
                        <div className="w-[65%] py-4 border-b flex gap-3">
                            <span className="text-base">Writer</span>
                            <span className="text-blue-400 text-base">{currentMovie.Writer}</span>
                        </div>
                        <div className="w-[65%] py-4 flex gap-3">
                            <span className="text-base">Director</span>
                            <span className="text-blue-400 text-base">{currentMovie.Actors}</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default MoviePoster;