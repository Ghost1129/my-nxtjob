import React from 'react'
import * as Tabs from '@radix-ui/react-tabs';
import {HiPencil} from 'react-icons/hi'
import QuillEditor from '../QuillEditor';
import dynamic from 'next/dynamic';


const JobDescription = () => {
  return (
    <Tabs.Content value="1" className='flex flex-col  -z-10 h-[460px] gap-5 p-5 data-[state=active]:z-20'>
                <div className='flex justify-between'>
                    <span className='text-lg font-bold'>Description</span>
                    <HiPencil className='w-5 h-5 ml-2 cursor-pointer text-primary' />
                </div>
                <div className='w-full h-full p-5 mb-1 overflow-x-visible overflow-y-scroll bg-white rounded-md'>
                    <QuillEditor />
                </div>
            
        </Tabs.Content>
  )
}

export default JobDescription