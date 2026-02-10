import { useState } from "react";
import ErrorImage from "@/assets/images/error_image.svg"
import Button from "@/components/ui/Button";

function MoviePoster({ currentMovie }) {
    return (
        <div className="flex flex-col gap-4 w-full">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                {currentMovie.Title}
            </h1>
            <div className="flex flex-wrap gap-3 text-neutral-400 text-sm sm:text-base">
                <span>{currentMovie.Year}</span>
                <span>{currentMovie.Rated}</span>
                <span>{currentMovie.Runtime}</span>
            </div>
            <div className="w-full max-w-45 sm:max-w-[320px]">
                <img
                    className="rounded-lg w-full max-h-100 object-cover"
                    alt={currentMovie.Title}
                    src={currentMovie.Poster} onError={(e) => {
                        e.currentTarget.src = ErrorImage
                    }}
                />
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                    {currentMovie?.Genre?.split(", ").map((g, i) => (
                        <Button key={i} variant="fourth">{g}</Button>))}
                </div>
                <p className="text-sm sm:text-base leading-relaxed max-w-3xl">
                    {currentMovie.Plot}
                </p>
                <div className="flex flex-col gap-3 max-w-3xl">
                    <div className="py-3 border-t border-neutral-700 flex flex-col sm:flex-row gap-1 sm:gap-4">
                        <span className="text-neutral-400 w-24">Director</span>
                        <span className="text-blue-400">{currentMovie.Director}</span>
                    </div>
                    <div className="py-3 border-t border-neutral-700 flex flex-col sm:flex-row gap-1 sm:gap-4">
                        <span className="text-neutral-400 w-24">Writer</span>
                        <span className="text-blue-400">{currentMovie.Writer}</span>
                    </div>
                    <div className="py-3 border-t border-neutral-700 flex flex-col sm:flex-row gap-1 sm:gap-4">
                        <span className="text-neutral-400 w-24">Actors</span>
                        <span className="text-blue-400">{currentMovie.Actors}</span>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default MoviePoster;