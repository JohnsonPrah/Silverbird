import React from 'react'
import Image from 'next/image'
import logo from '../utils/logo.png'
import HeaderItem from './HeaderItem'
import {BadgeCheckIcon,CollectionIcon,HomeIcon,LightningBoltIcon,SearchIcon,UserIcon} from '@heroicons/react/outline'

function 
Header() {
  return (
    <header className='flex flex-col pt-3 h-auto sm:flex-row m-5 mt-0 justify-between items-center'>
        <h1 className='text-blue ml-12 mb-3 font-bold text-4xl cursor-pointer'>SilverBird</h1>
        <div className='flex pt-3 flex-grow justify-evenly max-w-2xl'>
            <HeaderItem title='Home' Icon={HomeIcon}/>
            <HeaderItem title='Trending' Icon={LightningBoltIcon}/>
            <HeaderItem title='Verified' Icon={BadgeCheckIcon}/>
            <HeaderItem title='C0llection' Icon={CollectionIcon}/>
            <HeaderItem title='Search' Icon={SearchIcon}/>
            <HeaderItem title='Account' Icon={UserIcon}/>
        </div>
    </header>
  )
}

export default 
Header