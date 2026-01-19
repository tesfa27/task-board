import { useState } from 'react'
import { useBoardStore } from '../store/boardStore'

const Header = () => {
  const { currentBoard, updateBoard } = useBoardStore()
  const [isEditing, setIsEditing] = useState(false)
  const [editName, setEditName] = useState('')

  const handleEditClick = () => {
    setEditName(currentBoard?.name || '')
    setIsEditing(true)
  }

  const handleSave = () => {
    if (editName.trim()) {
      updateBoard({ name: editName.trim() })
    }
    setIsEditing(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSave()
    if (e.key === 'Escape') setIsEditing(false)
  }

  return (
    <div className='flex items-start'>
      <img src="/Logo.svg" alt="Logo" className="mr-2 sm:mr-3 self-start w-8 h-8 sm:w-10 sm:h-10" />
      <div className='flex flex-col justify-center items-start flex-1'>
        {isEditing ? (
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyPress}
            className='font-outfit text-2xl sm:text-3xl md:text-[2.5rem] font-normal bg-transparent border-b-2 border-blue-500 outline-none w-full'
            autoFocus
          />
        ) : (
          <h1 className='font-outfit text-2xl sm:text-3xl md:text-[2.5rem] font-normal flex items-center cursor-pointer' onClick={handleEditClick}>
            {currentBoard?.name || 'My Task Board'}
          </h1>
        )}
        <p className='font-outfit text-sm sm:text-base font-light mt-1 sm:mt-2'>{currentBoard?.description || 'Tasks to keep organized'}</p>
      </div>
      <img src="/Edit_duotone.svg" alt="Edit" className="ml-2 sm:ml-3 self-start cursor-pointer w-5 h-5 sm:w-6 sm:h-6" onClick={handleEditClick} />
    </div>
  )
}

export default Header
