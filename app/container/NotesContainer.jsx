import React from 'react'
import NoteCard from '../components/Job/NoteCard'
import { IoDocumentTextOutline } from 'react-icons/io5'

const NotesContainer = ({addNote,setAddNote}) => {
    
    const data = []
    const [notes, setNotes] = React.useState(data)

  return (
    <div className='w-full h-full '>
        <span className=' inline-block text-sm font-semibold mb-[10px]'>Add Note</span>
        <div className='w-full max-h-[340px] gap-[10px] flex flex-col overflow-y-scroll'>
            {
                notes.length === 0 && !addNote ? <div className='flex flex-col items-center'>
                <IoDocumentTextOutline className='w-[160px] h-[200px] text-[#C9BCE3]' />
                <span className='text-2xl font-semibold text-[#5A5A5A]'>No notes yet</span>
                <span className='text-sm text-[#5A5A5A]'>{`You can tap the "Create New Notes" Button to start taking notes!`}</span>
            </div> : null
            }
            {
                addNote ? <AddNote setNotes={setNotes} setAddNote={setAddNote} /> : null
            }
            {
                notes.map((note)=>(
                    <NoteCard key={note.id} note={note} />
                ))
            }
            
            

        </div>
    </div>
  )
}

export default NotesContainer



const AddNote = ({setNotes,setAddNote}) => {
    const [note, setNote] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setNotes((prev)=>[].concat({id:prev.length+1,title:note,time:'now'},prev))
        setNote('')
        setAddNote(false)

    }

    return (
        <div className='rounded-md shadow-sm'>
        <textarea name="" className='w-full min-h-[100px] p-4 resize-none bg-white outline-none' disabled={false}
        onChange={(e)=>setNote(e.target.value)}
        >
        </textarea>
        <div className='flex justify-end text-sm mt-[10px]'> 
                    <button className='text-[#57A4F2] py-[6px] px-8 outline-none border-none' 
                    onClick={()=>setAddNote(false)}
                    >Cancel</button> 
                    <button className='bg-[#57A4F2] py-[6px] ml-[10px] px-8 rounded-md text-white'
                    onClick={(e)=>handleSubmit(e)}
                    >Save</button> 
                    </div>
    </div>
    )
}