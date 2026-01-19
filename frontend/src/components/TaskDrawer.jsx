import { useState, useEffect } from 'react'
import { useBoardStore } from '../store/boardStore'
import { icons, statuses } from '../data/taskData'

const TaskDrawer = ({ onClose }) => {

  const { selectedTask, addTask, updateTask, deleteTask } = useBoardStore()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    icon: '',
    status: null
  })

  const defaultFormData = { name: '', description: '', icon: '', status: null }

  useEffect(() => {
    setFormData(selectedTask ? { ...defaultFormData, ...selectedTask } : defaultFormData)
  }, [selectedTask])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (selectedTask) {
        await updateTask(selectedTask._id, formData)
      } else {
        await addTask(formData)
      }
      onClose()
    } catch (error) {
      console.error('Error saving task:', error)
    }
  }

  const handleDelete = async () => {
    if (selectedTask) {
      await deleteTask(selectedTask._id)
    }
  }

  return (
    <aside className="fixed right-0 top-0 h-screen w-full md:w-[600px] md:max-w-[600px] flex flex-col p-6 gap-6 bg-white md:rounded-l-2xl">
      <header className="flex justify-between items-center">
        <h2 className="m-0 font-outfit font-medium text-lg">Task Details</h2>
        <button type="button" aria-label="Close" onClick={onClose} className="border border-gray-300 rounded-xl p-2 bg-transparent cursor-pointer">
          <img src="/close_ring_duotone-1.svg" alt="Close" />
        </button>
      </header>

      <main className="flex-1 overflow-y-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="taskName" className="font-outfit font-normal text-[14px] text-gray-400">Task Name</label>
            <input type="text" value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} id="taskName" name="taskName" placeholder="Enter Task Name" className="font-outfit p-2 border border-gray-300 rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="font-outfit font-normal text-[14px] text-gray-400">Description</label>
            <textarea id="description" name="description" placeholder="Enter Short Description" className="font-outfit p-2 border border-gray-300 rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none resize-none" rows="6"
            value={formData.description}  onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-outfit font-normal text-[14px] text-gray-400">Icon</label>
            <div role="group" aria-label="Icon selector" className="flex gap-3">
              {icons.map((icon, index) => (
                <button key={index} type="button" 
                  onClick={() => setFormData({ ...formData, icon })}
                  className={` rounded-lg p-3 text-2xl ${formData.icon === icon ? 'bg-[#F5D565]' : 'bg-gray-100'}`}>{icon}</button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-outfit font-normal text-[14px] text-gray-400">Status</label>
            <div role="group" aria-label="Status selector" className="grid grid-cols-2 gap-3">
              {Object.entries(statuses).map(([statusKey, statusConfig]) => (
                <button key={statusKey} type="button" 
                  onClick={() => setFormData({ ...formData, status: statusKey })}
                  className={`flex items-center gap-2 rounded-lg p-2 ${
                    formData.status === statusKey ? 'border-2 border-blue-500' : 'border border-gray-300'
                  }`}>
                  <div className="p-2 rounded-lg" style={{ backgroundColor: statusConfig.color }}>
                    <img src={statusConfig.icon} alt={statusKey} className="w-6 h-6" />
                  </div>
                  <span className="font-outfit">{statusKey}</span>
                </button>
              ))}
            </div>
          </div>
        </form>
      </main>

      <footer className="flex justify-end items-center gap-3">
        <button onClick={handleDelete} type="button" className='flex items-center gap-1 rounded-2xl px-4 py-3 font-outfit font-medium text-[14px] text-white bg-[#97A3B6]'>
          Delete
          <img src="/Trash.svg" alt="Delete" className="w-5 h-5" />
        </button>
        <button type="submit" onClick={handleSubmit} className='flex items-center gap-1 rounded-2xl px-4 py-3 font-outfit font-medium text-[14px] text-white bg-[#3662E3]'>
          Save
          <img src="/Done_round.svg" alt="Save" className="w-5 h-5" />
        </button>
      </footer>
    </aside>
  )
}

export default TaskDrawer
