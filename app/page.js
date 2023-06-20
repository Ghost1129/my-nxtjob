import Image from 'next/image'
import Navbar from './components/Navbar'
import Sidebars from './components/Sidebars'
import Filtertab from './components/Filtertab'
import ColumnContainer from './container/ColumnContainer'

export default function Home() {
  return (
    <div className='h-screen overflow-y-hidden'>
      <Navbar />
      <div className='flex h-full'>
      <Sidebars />
      <div className='w-full h-full px-5 overflow-x-hidden '>
      <Filtertab />
      <ColumnContainer />
      </div>
      </div>
      
      
    </div>
  )
}
