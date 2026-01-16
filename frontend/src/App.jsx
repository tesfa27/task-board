import { useState } from "react"
import Header from "./components/Header"
import TaskCard from "./components/TaskCard"
import TaskDrawer from "./components/TaskDrawer"
import { tasks } from "./data/mockData"

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <main>
      <div className="flex flex-col items-center min-h-screen bg-gray-50 py-4 md:py-8">
      <div className="flex flex-col w-full max-w-xl gap-4 px-4">
      <Header />
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}

      <div className="flex p-4 rounded-2xl items-start bg-[#F5E8D5] cursor-pointer" onClick={() => setIsDrawerOpen(true)}>
            <div className="flex items-center justify-center w-12 h-12 mr-4 bg-[#E9A23B] p-2 rounded-xl shrink-0" >
                <img src='/Add_round_duotone.svg' alt='Add' />
            </div>
            <div className='flex flex-col flex-1 mr-4'>
                <h1 className='font-outfit font-semibold text-base'>Add new task</h1>
            </div>
        </div>

      </div>
     </div>
     
     {isDrawerOpen && <TaskDrawer onClose={() => setIsDrawerOpen(false)} />}
    </main>
  )
}

export default App
