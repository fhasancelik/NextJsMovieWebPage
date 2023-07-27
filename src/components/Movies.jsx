"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
function Movies({ movie }) {
 // console.log(movie);
 
 const router = useRouter();
 
 return (
    <div onClick={()=> router.push(`/movie/${movie?.id}`)} className="min-w-[470px] relative  imgContainer cursor-pointer">
      <Image
      style={{objectFit:'cover'}}
        width={470}
        height={300}
        src={`https://image.tmdb.org/t/p/original/${
          movie?.backdrop_path || movie?.poster_path
        }`}
      />

      <div className="absolute bottom-0 p-3 w-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
        <div className="text-2xl font-bold">{movie?.title}</div>
        <div>
          {movie?.release_date}-{movie?.vote_avarage}
        </div>
      </div>
    </div>
  );
}

export default Movies;
