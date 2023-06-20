"use client"
import Image from 'next/image'
import logo from '../../public/assets/logo.svg'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Avatar from '@radix-ui/react-avatar';
import { CaretDownIcon,BellIcon } from '@radix-ui/react-icons';

const Navbar = () => {
  return (
    <nav className='w-full shadow-md py-[26px] px-[32px]'>
        <NavigationMenu.Root className='flex items-center justify-between '>
            <NavigationMenu.List className='flex items-center'>
                <Image src={logo} alt="Logo" />
                {['Resume Builder','Cover Letter','LinkedIn Review','Interview','Job Tracker & Networking'].map((item,index) => (
                    <NavigationMenu.Item key={index} className='ml-7'>
                    <NavigationMenu.Trigger className='flex items-center px-5 py-3 text-sm font-normal hover:bg-secondary hover:text-primary hover:border border-primary'>
                        {item} <CaretDownIcon className="w-4 h-3 " aria-hidden />
                    </NavigationMenu.Trigger>
                    </NavigationMenu.Item>
                ))}
            </NavigationMenu.List>
            <NavigationMenu.List className='flex items-center gap-6'>
                <BellIcon className="w-5 h-6 cursor-pointer" aria-hidden />
                <Avatar.Root className="flex items-center justify-center w-12 h-12 text-white rounded-full cursor-pointer bg-quinary">
                    <Avatar.Fallback className="">GS</Avatar.Fallback>
                </Avatar.Root>
            </NavigationMenu.List>
        </NavigationMenu.Root>

    </nav>
  )
}

export default Navbar