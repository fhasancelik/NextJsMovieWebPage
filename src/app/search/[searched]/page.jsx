import React from 'react'
import Movies from '../../../components/Movies';
const Page = async({params}) => {
    const searched=params.searched;
    //console.log(searched,"sear")

    const response=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=3e72e732d3c3233a39cdc2935d2ce856&query=${searched}&language=en-US&include_adult=false`)
  const data=await response.json()

  console.log(data?.results)
    return (
   <div>

    {!data?.results ?  <div>Aranılan Öğe bulunamadı</div>:
    
    
  <div className='flex items-center flex-wrap gap-2'>
          {data?.results?.map((result,index) => {
            return <Movies key={index} movie={result} />;
          })}
    
  </div>
    
    }
   </div>
  )
}

export default Page