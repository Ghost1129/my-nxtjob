"use client"
import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon} from '@radix-ui/react-icons';
import JobIcon from '../../public/assets/jobcontainer/jobs.svg'
import Image from 'next/image';

const JobContainer = () => {
  return (
    <Dialog.Content className=' fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline-none max-w-[1200px] bg-white' >
        <Dialog.Close>
            <Cross2Icon className='absolute w-5 h-5 cursor-pointer top-5 right-5' />
        </Dialog.Close>
        <div>
            {/* <Image className='text-red-200' src={JobIcon} alt='job' /> */}
        </div>
    </Dialog.Content>
  )
}

export default JobContainer