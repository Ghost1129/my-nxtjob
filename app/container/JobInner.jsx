import React from 'react'
import * as Tabs from '@radix-ui/react-tabs';
import JobDescription from '../components/Job/JobDescription';
import {BsGrid} from 'react-icons/bs'
import {BiBuildingHouse} from 'react-icons/bi'
import {IoDocumentTextOutline} from 'react-icons/io5'
import {HiOutlineUserGroup} from 'react-icons/hi'
import Timeline from '../components/Job/Timeline';
import Company from '../components/Job/Company';
import Notes from '../components/Job/Notes';
import Teams from '../components/Job/Teams';


const JobInner = () => {
  return (
    <>
    <Tabs.Root defaultValue="1" className='flex gap-5'>
        <Tabs.List className='flex flex-col gap-[10px] p-[10px] max-h-[580px] border-r border-[#DCDCDC] min-w-[213px]'>
            <Tabs.Trigger value="1" className='flex items-center group p-[9px] text-xs font-normal text-[#9E9E9E] rounded-md cursor-pointer hover:font-semibold hover:bg-secondary'>
                <span className='flex items-center group-hover:text-primary group-hover:bg-secondary gap-[10px]'>
                    <BsGrid className='w-4 h-4' />
                    <span>Job Description</span>
                </span>
            </Tabs.Trigger>
            <Tabs.Trigger value="2" className='flex items-center group p-[9px] text-xs font-normal text-[#9E9E9E] rounded-md cursor-pointer hover:font-semibold hover:bg-secondary'>
                <span className='flex items-center group-hover:text-primary group-hover:bg-secondary gap-[10px]'>
                    <BiBuildingHouse className='w-4 h-4' />
                    <span>Company</span>
                </span>
            </Tabs.Trigger>
            <Tabs.Trigger value="3" className='flex items-center group p-[9px] text-xs font-normal text-[#9E9E9E] rounded-md cursor-pointer hover:font-semibold hover:bg-secondary'>
                <span className='flex items-center group-hover:text-primary group-hover:bg-secondary gap-[10px]'>
                    <IoDocumentTextOutline className='w-4 h-4' />
                    <span>Note</span>
                </span>
            </Tabs.Trigger>
            <Tabs.Trigger value="4" className='flex items-center group p-[9px] text-xs font-normal text-[#9E9E9E] rounded-md cursor-pointer hover:font-semibold hover:bg-secondary'>
                <span className='flex items-center group-hover:text-primary group-hover:bg-secondary gap-[10px]'>
                    <HiOutlineUserGroup className='w-4 h-4' />
                    <span>Team</span>
                </span>
            </Tabs.Trigger>
        </Tabs.List>
        <div className='relative z-10 w-full bg-secondary'>
            <JobDescription />
            <Company/>
            <Notes />
            <Teams />
        </div>
        <Timeline />

    </Tabs.Root>
    </>
  )
}

export default JobInner