import React, { useContext } from 'react'
import SEARCH_CONTEXT from '../context/store'
import Tags from './tags'
const Dropdown = ({list,setSearch,setAvailOptions}) => {
  const {addCampgrounds,initialState}=useContext(SEARCH_CONTEXT);
  const handleClick=(item)=>{
    addCampgrounds(item);
    setSearch(item.name)
    setAvailOptions([]);
  }
  return (
    <>
    <div className='w-full bg-white z-[9999] absolute top-[60px] left-0 rounded-lg text-dark_gray bg-white shadow-2xl  text-base py- overflow-auto max-h-[180px] flex flex-col '>
       {list.map((item)=>
        <div key={item._id} onClick={()=>handleClick(item)} className='cursor-pointer px-4 py-3 hover:bg-gray-100 flex gap-2 items-center'>{item.name} <Tags id={item.city_symbol}/> </div>
       )}
    </div>
    </>
  )
}

export default Dropdown