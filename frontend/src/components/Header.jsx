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
    <div className='flex'>
      <img src="/Logo.svg" alt="Logo" className="mr-2 self-start" />
      <div className='flex flex-col justify-center items-start'>
        {isEditing ? (
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyPress}
            className='font-outfit text-[2.5rem] font-normal bg-transparent border-b-2 border-blue-500 outline-none'
            autoFocus
          />
        ) : (
          <h1 className='font-outfit text-[2.5rem] font-normal flex items-center cursor-pointer' onClick={handleEditClick}>
            {currentBoard?.name || 'My Task Board'}
          </h1>
        )}
        <p className='font-outfit text-base font-light mt-2'>{currentBoard?.description || 'Tasks to keep organized'}</p>
      </div>
      <img src="/Edit_duotone.svg" alt="Edit" className="ml-2 self-start cursor-pointer" onClick={handleEditClick} />
    </div>
  )
}

export default Header
