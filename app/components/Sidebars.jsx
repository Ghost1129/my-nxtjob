import React from 'react'
import boardlogo from '../../public/assets/board.svg'
import archivelogo from '../../public/assets/archive.svg'
import grouplogo from '../../public/assets/group.svg'
import looplogo from '../../public/assets/loop.svg'
import reportogo from '../../public/assets/report.svg'
import suggestlogo from '../../public/assets/suggest.svg'
import Image from 'next/image'

const Sidebars = () => {
    const data =[
        {
            title:'Board',
            logo:boardlogo,
        },
        {
            title:'Networking',
            logo:grouplogo,
        },
        {
            title:'Archive Jobs',
            logo:archivelogo,
        },
        {
            title:'Loop Settings',
            logo:looplogo,
        },
        {
            title: 'Suggest a Feature',
            logo: suggestlogo,
        },
        {
            title: 'Report an Issue',
            logo: reportogo,
        }
    ]
  return (
    <aside className='w-[213px] h-max bg-white rounded-lg  mt-5 ml-8 '>
        <div className='flex flex-col gap-3 px-3 py-5'>
            {
                data.map((item,index) => (
                    <div key={index} className='flex items-center w-full gap-3 p-3 rounded-lg cursor-pointer min-w-max hover:text-white hover:bg-primary'>
                        <Image src={item.logo} className='fill-red-100 ' alt="Logo" />
                        <p className='text-sm font-medium '>{item.title}</p>
                    </div>
                ))
            }
        </div>
    </aside>
  )
}

export default Sidebars