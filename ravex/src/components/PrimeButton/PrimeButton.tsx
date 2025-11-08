import React from 'react'


const PrimeButton = () => {
  return (
    <div className="w-40 h-10 relative bg-blue-800 rounded-xl">
    <div className="w-4 h-4 left-[20px] top-[12px] absolute inline-flex justify-start items-center">
        <div className="flex-1 h-4 relative overflow-hidden">
            <div className="w-3 h-3 left-[2px] top-[2px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-zinc-100" />
            <div className="w-1.5 h-1.5 left-[4.67px] top-[8.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-zinc-100" />
            <div className="w-1.5 h-[3.33px] left-[4.67px] top-[2px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-zinc-100" />
        </div>
    </div>
    <div className="left-[44px] top-[9.50px] absolute justify-start text-zinc-100 text-sm font-semibold font-['Inter'] leading-5">Primary Button</div>
</div>
  )
}

export default PrimeButton