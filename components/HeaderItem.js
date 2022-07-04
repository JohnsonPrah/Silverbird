import React from 'react'

function HeaderItem({title,Icon}) {
  return (
    <div className='group items-center cursor-pointer w-12 sm:w-20 hover:text-gray-700'>
        <Icon className='h-8 mb-1'/>
        <p className='tracking-widest opacity-0 group-hover:opacity-100'>{title}</p>
    </div>
  )
}

export default HeaderItem