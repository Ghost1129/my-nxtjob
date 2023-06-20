"use client"
import Image from 'next/image'
import React from 'react'
import Menuicon from '../../public/assets/dndcard/menu.svg'
import Logo from '../../public/assets/dndcard/logo.svg'
import HouseIcon from '../../public/assets/dndcard/house.svg'
import ClipIcon from '../../public/assets/dndcard/clip.svg'
import Docicon from '../../public/assets/dndcard/doc.svg'
import Messageicon from '../../public/assets/dndcard/message.svg'
import { Draggable } from 'react-beautiful-dnd'
import * as Dialog from '@radix-ui/react-dialog';
import JobContainer from '../container/JobContainer'

const DndCards = ({index,task}) => {
  return (
    <Dialog.Root>
        <Dialog.Trigger>
    <Draggable draggableId={task.id} index={index}>
        {provided=>(
            <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}  className='bg-white rounded-md '>
            <div className='p-[10px] flex flex-col gap-[10px]'>
                <div className='flex gap-[10px] items-center'>
                    <span className='text-xs font-bold text-quinary'>Saved By Loop</span>
                    <span className='text-[10px] font-normal text-senary'>Expired in 2 days</span>
                    <Image className='ml-auto justify-self-end' alt='menu' src={Menuicon} />
                </div>
                <div className='flex gap-[10px] items-center'>
                    <Image alt='logo' src={Logo} width={24} height={24} />
                    <div className='font-normal' >
                        <span className='text-sm'>UI/UX Designer</span>
                        <span className='flex items-center gap-[10px]'>
                            <Image alt='house' src={HouseIcon} />
                            <span className='text-xs text-[#AFAFAF]'>Ajmera Infotech Inc.</span>
                        </span>
                    </div>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <span className='flex items-center gap-2 px-3 py-2 bg-green-100 rounded-md'>
                        <Image alt='clip' src={ClipIcon} />
                        <span className='text-xs'>75%</span>
                    </span>
                    <span className='p-[10px] border border-dashed rounded-full border-[#9E9E9E]'>
                        <Image alt='doc' src={Docicon} />
                    </span>
                    <span className='p-[10px] border border-dashed rounded-full border-[#9E9E9E]'>
                        <Image alt='message' src={Messageicon} />
                    </span>
                </div>
    
            </div>
        </div>
        
        )}

    </Draggable>
    </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />
                <JobContainer />
            </Dialog.Portal>
        
    </Dialog.Root>
  )
}

export default DndCards