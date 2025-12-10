import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='bg-[#1E1C1F] pt-[64px] max-sm:pt-[36px] pb-[80px]'>
        <div className='max-w-7xl m-auto flex gap-[96px] max-sm:flex-col max-sm:mr-4 max-sm:ml-4 '>
<div className='w-[702px] max-sm:w-[350px]'>
    <h2 className='font-semibold text-[56px] leading-[107%] tracking-normal max-sm:text-[28px] uppercase mt-[84px] text-[#FFF]'>Aроматическая  продукция  Malmaran</h2>
    <p className='text-[24px] mt-[32px] max-sm:text-[16px] text-[#FFF]'>Здесь вы найдёте ароматнейшие  натуральные свечи, которые наполнят  ваш дом теплом и уютом</p>
    <button className='text-[28px] mt-[48px] border py-4 text-[#FFF] px-11'>Выбрать свечу</button>
</div>
<div>
    <Image src={'/hero.png'} width={434} height={548} alt='hero'/>
</div>
        </div>
    </div>
  )
}
