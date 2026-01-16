import React from 'react'
import { icons, statuses } from '../data/taskData'

const TaskDrawer = ({ onClose }) => {
  return (
    <aside className="fixed right-0 top-0 h-screen w-full md:w-[600px] md:max-w-[600px] flex flex-col p-6 gap-6 bg-white md:rounded-l-2xl">
      <header className="flex justify-between items-center">
        <h2 className="m-0 font-outfit font-medium text-lg">Task Details</h2>
        <button type="button" aria-label="Close" onClick={onClose} className="border border-gray-300 rounded-xl p-2 bg-transparent cursor-pointer">
          <img src="/close_ring_duotone-1.svg" alt="Close" />
        </button>
      </header>

      <main className="flex-1 overflow-y-auto">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="taskName" className="font-outfit font-normal text-[14px] text-gray-400">Task Name</label>
            <input type="text" id="taskName" name="taskName" placeholder="Enter Task Name" className="font-outfit p-2 border border-gray-300 rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="font-outfit font-normal text-[14px] text-gray-400">Description</label>
            <textarea id="description" name="description" placeholder="Enter Short Description" className="font-outfit p-2 border border-gray-300 rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none resize-none" rows="6"></textarea>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-outfit font-normal text-[14px] text-gray-400">Icon</label>
            <div role="group" aria-label="Icon selector" className="flex gap-3">
              {icons.map((icon, index) => (
                <button key={index} type="button" className="bg-gray-100 rounded-lg p-3 text-2xl">{icon}</button>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-outfit font-normal text-[14px] text-gray-400">Status</label>
            <div role="group" aria-label="Status selector" className="grid grid-cols-2 gap-3">
                <button type="button" className="flex items-center gap-2 border border-gray-300 rounded-lg p-2">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: statuses["In Progress"].color }}>
                    <img src={statuses["In Progress"].icon} alt="In Progress" className="w-6 h-6" />
                  </div>
                  <span className="font-outfit">In Progress</span>
                </button>
                <button type="button" className="flex items-center gap-2 border border-gray-300 rounded-lg p-2">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: statuses["Completed"].color }}>
                    <img src={statuses["Completed"].icon} alt="Completed" className="w-6 h-6" />
                  </div>
                  <span className="font-outfit">Completed</span>
                </button>
              <button type="button" className="flex items-center gap-2 border border-gray-300 rounded-lg p-2 col-span-1">
                <div className="p-2 rounded-lg" style={{ backgroundColor: statuses["Will Not Do"].color }}>
                  <img src={statuses["Will Not Do"].icon} alt="Will Not Do" className="w-6 h-6" />
                </div>
                <span className="font-outfit">Will Not Do</span>
              </button>
            </div>
          </div>
        </form>
      </main>

      <footer className="flex justify-end items-center gap-3">
        <button type="button" className='flex items-center gap-1 rounded-2xl px-4 py-3 font-outfit font-medium text-[14px] text-white bg-[#97A3B6]'>
          Delete
          <img src="/Trash.svg" alt="Delete" className="w-5 h-5" />
        </button>
        <button type="submit" form="taskForm" className='flex items-center gap-1 rounded-2xl px-4 py-3 font-outfit font-medium text-[14px] text-white bg-[#3662E3]'>
          Save
          <img src="/Done_round.svg" alt="Save" className="w-5 h-5" />
        </button>
      </footer>
    </aside>
  )
}

export default TaskDrawer
