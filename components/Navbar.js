import React from 'react'
import requests from '../utils/requests'
import { useRouter } from 'next/router';

function Navbar() {
    const Router = useRouter();

  return (
      <nav className='relative'>
        <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
            {Object.entries(requests).map(([key,{title,url}])=>(
                <h2 key={key} className='cursor-pointer transition-all duration-900 hover:scale-105 
                            hover:text-red-600 
                            active:text-red-900 last:pr-24'
                            onClick={()=> Router.push(`/?genre=${key}`)}
                            >
                                {title}
                </h2>
            ))}
            <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-112'/>
        </div>
    </nav>
  )
}

export default Navbar;