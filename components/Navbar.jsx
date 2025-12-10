'use client'
import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Modal from './Modal';
export default function Navbar() {
   const [open, setOpen] = useState(false);
  return (
    <div className='bg-[#1E1C1F] pt-[24px]'>
        <div className='max-w-7xl m-auto flex justify-between  items-center max-sm:ml-4 max-sm:mr-4'>
<div className='text-[#FFF]'>
    <IoMdMenu size={56} onClick={() => setOpen(true)} className='max-sm:size-[40px]'/>
</div>
<div className='flex gap-4 text-[#FFF]'>
<MdOutlineShoppingCart size={40} className='max-sm:size-[28px]'/>
<FaRegHeart size={40}  className='max-sm:size-[28px]'/>

</div>
      
        </div>
        <Modal  open={open} onClose={() => setOpen(false)}/>
    </div>
  )
}
