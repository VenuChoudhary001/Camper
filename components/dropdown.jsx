import React from 'react'
import Tags from './tags'
const Dropdown = () => {
  return (
    <>
    <div className='w-full absolute top-[60px] left-0 rounded-lg text-dark_gray bg-white shadow-lg  text-base py- overflow-auto max-h-[180px] flex flex-col '>
        <div className='px-4 py-3 hover:bg-gray-100 flex gap-2 items-center'>Dohney State Beach <Tags id={"CA"}/> </div>
        <div className='px-4 py-3 hover:bg-gray-100 flex gap-2 items-center'>Doolittle Campground <Tags id={"WA"}/></div>
        <div className='px-4 py-3 hover:bg-gray-100 flex gap-2 items-center'>Dove Campground and Park <Tags id={"NY"}/>    </div>
        <div className='px-4 py-3 hover:bg-gray-100 flex gap-2 items-center'>Dove Campground and Park <Tags id={"NY"}/>    </div>
        <div className='px-4 py-3 hover:bg-gray-100 flex gap-2 items-center'>Dove Campground and Park <Tags id={"NY"}/>    </div>
        <div className='px-4 py-3 hover:bg-gray-100 flex gap-2 items-center'>Dove Campground and Park <Tags id={"NY"}/>    </div>
       
    </div>
    </>
  )
}

export default Dropdown