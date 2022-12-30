import Image from 'next/image'
import React, { useContext } from 'react'
import SEARCH_CONTEXT from '../context/store'

const AddBtn = ({camp}) => {
  
  const {addCampgrounds}=useContext(SEARCH_CONTEXT);
  
  return (
    <>
    <div onClick={()=>addCampgrounds(camp)} className='bg-pink rounded-full cursor-pointer  text-brown min-w-max  items-center text-xs flex gap-2 px-2 cursor-pointer py-1 '>
        <Image 
        src={'/icons/plus-circle.svg'}
        width={20}
        height={20}
        />
        {camp.name}
    </div>
    </>
  )
}

export default AddBtn