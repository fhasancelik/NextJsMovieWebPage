"use client"
import React,{useState} from 'react'
import {BiSearch} from 'react-icons/bi'
import MenuItem from './MenuItem'
import ThemeSwitch from './ThemeSwitch'
import { useRouter } from 'next/navigation'
function Header() {
    const router=useRouter()
const [searched,setSearched]=useState('')
const menus =[
    {
        name:'About',
        url:'/about'
    },

    {
        name:'Sign In',
        url:'/login'
    }
]

//console.log(searched)
 const searchFunc = (e) =>{
    if(e.key === 'Enter' && searched.length >=3){
router.push(`/search/${searched}`)
setSearched('')
    }
 }
  return (
    <div className='flex items-center gap-5 h-20 p-5'>

<div className='bg-amber-600 rounded-lg p-3 text-2xl font-bold'>Movie App</div>
<div className='flex flex-1 items-center gap-2 border p-3 rounded-lg'>
    <input value={searched} onKeyDown={searchFunc} onChange={e=>setSearched(e.target.value)} type="text" placeholder='Search Movie' className='outline-none flex-1 rounded-lg bg-transparent '/>
<BiSearch size={25}/>
</div>
<ThemeSwitch/>
{
    menus.map((menu,index)=>{
        return(
            <MenuItem item={menu} key={index}/>
        )
    })
}

    </div>
  )
}

export default Header