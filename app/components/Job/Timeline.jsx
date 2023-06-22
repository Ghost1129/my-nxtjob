import React from 'react'

const Timeline = () => {
  return (
    <div className='min-w-[193px] mr-[40px] rounded-sm h-fit bg-[#F9F8F8]'>
        <span className=' inline-block m-[20px] text-base font-bold'>Time Line</span>
        <div className=''>
    <ol class="relative text-gray-500 border-l-2 ml-3 border-dashed border-[#57A4F2]">                  
    <li class="mb-10 ml-6">            
        <span class="absolute flex items-center  justify-center w-4 h-4 bg-[#57A4F2] rounded-full -left-[9px] ">
        </span>
        <span class="text-[10px] inline-block text-[#9E9E9E] mb-[10px] ">Today, 1:12 PM</span>
        <span className='flex flex-col w-[127px] text-[#5A5A5A] bg-[#E4F2FF] p-[10px] '>
            <span className='text-xs font-bold'>Moved to Saved</span>
            <span className='text-[10px]'>You moved this job from Applied to saved</span>
        </span>
    </li>
    <li class="mb-10 ml-6">            
        <span class="absolute flex items-center  justify-center w-4 h-4 bg-[#57A4F2] rounded-full -left-[9px] ">
        </span>
        <span class="text-[10px] inline-block text-[#9E9E9E] mb-[10px] ">Yesterday, 1:12 PM</span>
        <span className='flex flex-col w-[127px] text-[#5A5A5A] bg-[#E4F2FF] p-[10px] '>
            <span className='text-xs font-bold'>Moved to Saved</span>
            <span className='text-[10px]'>You moved this job from Applied to saved</span>
        </span>
    </li>
    <li class=" mb-3 ml-6">            
        <span class="absolute flex items-center  justify-center w-4 h-4 bg-[#57A4F2] rounded-full -left-[9px] ">
        </span>
        <span class="text-[10px] inline-block text-[#9E9E9E] mb-[10px] ">Moved to Applied</span>
        <span className='flex flex-col w-[127px] text-[#5A5A5A] bg-[#E4F2FF] p-[10px] '>
            <span className='text-xs font-bold'>Moved to Saved</span>
            <span className='text-[10px]'>You moved this job from Applied to saved</span>
        </span>
    </li>
    
</ol>
        </div>
    </div>
  )
}

export default Timeline