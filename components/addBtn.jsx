import Image from 'next/image'
import React from 'react'

const AddBtn = ({id,placeholder}) => {
  return (
    <>
    <div className='bg-pink rounded-full  text-brown min-w-max  items-center text-xs flex gap-2 px-2 cursor-pointer py-1 '>
        <Image 
        src={'/icons/plus-circle.svg'}
        width={20}
        height={20}
        />
        {placeholder}
    </div>
    </>
  )
}

export default AddBtn