import React from "react";

import Movies from "../components/Movies";

const Page = async ({ searchParams }) => {
  //console.log(searchParams.genre)

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=3e72e732d3c3233a39cdc2935d2ce856`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();
  //console.log(data)
  return (
    <div className="flex items-center justify-center flex-wrap gap-3 imgContainer">
      {data?.results?.map((result,index) => {
        return <Movies key={index} movie={result} />;
      })}
    </div>
  );
};

export default Page;
