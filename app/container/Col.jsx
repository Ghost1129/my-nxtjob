"use client"
import React from 'react'
import dynamic from 'next/dynamic'
const DndCards = dynamic(() => import('../components/DndCards'), { ssr: false })
import { Droppable } from 'react-beautiful-dnd'

const Col = ({column,tasks}) => {
  return (
    <div className='mt-5 p-5 overflow-y-scroll max-h-[90%]  bg-[#f3f1f1] rounded-md min-w-[320px]'>
        <div className='flex flex-col h-full'>
            <div className='flex justify-between mb-5'>
                <span className='text-lg font-semibold'>Saved</span>
                <span className='text-sm font-normal'>4 Jobs</span>
            </div>
            <Droppable droppableId={column.id}>
              {provided=>(
                <div ref={provided.innerRef} {...provided.droppableProps} className='flex flex-grow flex-col gap-[10px]'>
                {
                    tasks.map((task,index) => {
                        return <DndCards key={task.id} index={index} task={task} />
                    })
                }
                {provided.placeholder}
            </div>
              )}
            </Droppable>
        </div>
    </div>
  )
}

export default Col