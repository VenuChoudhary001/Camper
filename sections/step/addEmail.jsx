import React, { useContext } from 'react'
import Accordian from '../../components/accordian'
import Image from 'next/image'
import SEARCH_CONTEXT from '../../context/store'
import Link from 'next/link'
const AddEmail = () => {
    const {updateEmail}=useContext(SEARCH_CONTEXT);
  return (
    <>
    <Accordian title={"Add your email address"} step={3}>
        <main className="flex rounded items-center border-[1px] border-gray-300 px-3 border-gray-100">
            <Image 
            src='/icons/mail.svg'
            width={24}
            height={18}
            />
            <input onChange={(e)=>updateEmail(e.target.value)} type="email" className='bg-transparent w-full p-3 outline-none  ' placeholder='email address' />
        </main>
    </Accordian>
        <Link href="/review-scan"
        className="bg-lightGreen disabled:bg-gray-300 w-full rounded p-3 text-white flex justify-center items-center gap-2"
          >
            REVIEW SCAN
          </Link>
    </>
  )
}

export default AddEmail