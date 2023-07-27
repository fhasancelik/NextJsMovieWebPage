import Image from "next/image";
import React from "react";

const getMovie = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=3e72e732d3c3233a39cdc2935d2ce856`
  );
  return response.json();
};

const Page = async ({ params }) => {
  const id = params?.id;
  const movieDetail = await getMovie(params.id);
  console.log(movieDetail);
  //console.log('id',params?.id)
  return (
    <div className="relative p-7 min-h-screen">
      <Image
        style={{ objectFit: "cover" }}
        fill
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
      />

      <div className="absolute">
        <div className="text-4xl font-bold my-3">{movieDetail?.title}</div>
        <div className="w-1/2">{movieDetail?.overview}</div>
        <div className="my-3">
          {movieDetail?.release_date}-{movieDetail?.vote_avarage}
        </div>
        <div className="border w-24 p-3 rounded-md text-center text-lg cursor-pointer hover:bg-white hover:text-black">Trail</div>
      </div>
    </div>
  );
};

export default Page;
