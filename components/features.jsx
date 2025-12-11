import React from 'react'

export default function Features() {
  return (
    <div className='bg-[#1E1C1F] py-[80px] max-sm:py-[40px]'>
      <div className='max-w-7xl m-auto px-4'>
        <h2 className='font-semibold text-[56px] max-sm:text-[28px] leading-[107%] tracking-normal uppercase text-[#FFF] mb-[64px] text-center'>Наши особенности</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[40px]'>
          <div className='border border-[#FFF] p-[32px] rounded-lg'>
            <h3 className='text-[24px] font-semibold text-[#FFF] mb-[16px]'>Натуральные материалы</h3>
            <p className='text-[16px] text-[#FFF] leading-relaxed'>Мы используем только экологичные кокосовый и соевый воски премиального качества</p>
          </div>
          
          <div className='border border-[#FFF] p-[32px] rounded-lg'>
            <h3 className='text-[24px] font-semibold text-[#FFF] mb-[16px]'>Эфирные масла</h3>
            <p className='text-[16px] text-[#FFF] leading-relaxed'>Душистые аромакомпозиции органического происхождения для идеального аромата</p>
          </div>
          
          <div className='border border-[#FFF] p-[32px] rounded-lg'>
            <h3 className='text-[24px] font-semibold text-[#FFF] mb-[16px]'>Деревянные фитили</h3>
            <p className='text-[16px] text-[#FFF] leading-relaxed'>Качественные деревянные фитили обеспечивают правильное горение свечей</p>
          </div>
        </div>
      </div>
    </div>
  )
}
