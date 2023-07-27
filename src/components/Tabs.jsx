"use client"
import Link from 'next/link'
import React from 'react'
import {useSearchParams} from 'next/navigation'
const Tabs = () => {
const searchParams=useSearchParams()
const genre=searchParams.get('genre')
console.log(genre)
    const tabs=[

{
    name:'Most Popular',
    url:'popular'
},

{
    name:'Latest',
    url:'latest'
},

{
    name:'Upcoming Soon',
    url:'upcoming'
}

    ]
  return (
    <div className='p-5 m-3 dark:bg-gray-900 bg-gray-100 flex items-center justify-center gap-7'>

{
    tabs.map((tab,index)=>{
        return(
            <Link className={`cursor-pointer hover:opacity-75 transition:opacity ${tab.url ===genre ? "underline underline-ofset-8 text-amber-800":""}`} href={` /?genre=${tab.url}`}>{tab.name}</Link>
        )
    })
}

    </div>
  )
}

export default Tabs