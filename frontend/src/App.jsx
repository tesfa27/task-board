import { useEffect } from "react"
import Header from "./components/Header"
import TaskCard from "./components/TaskCard"
import TaskDrawer from "./components/TaskDrawer"
import LoadingSpinner from "./components/LoadingSpinner"
import { useBoardStore } from "./store/boardStore"

function App() {
  const { 
    tasks, 
    isDrawerOpen, 
    isLoading, 
    initializeBoard, 
    openDrawer, 
    closeDrawer 
  } = useBoardStore()

  useEffect(() => {
    const path = window.location.pathname
    const boardIdMatch = path.match(/\/board\/([a-zA-Z0-9]+)/)
    const boardId = boardIdMatch ? boardIdMatch[1] : null
    
    initializeBoard(boardId)
  }, [])

  if (isLoading) return <LoadingSpinner />

  return (
    <main>
      <div className="flex flex-col items-center min-h-screen bg-gray-50 py-4 md:py-8">
        <div className="flex flex-col w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl gap-4 px-4">
          <Header />
          {tasks.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}

          <div className="flex p-4 rounded-2xl items-start bg-[#F5E8D5] cursor-pointer" onClick={() => openDrawer()}>
            <div className="flex items-center justify-center w-12 h-12 mr-4 bg-[#E9A23B] p-2 rounded-xl shrink-0" >
              <img src='/Add_round_duotone.svg' alt='Add' />
            </div>
            <div className='flex flex-col flex-1 mr-4'>
              <h1 className='font-outfit font-semibold text-base'>Add new task</h1>
            </div>
          </div>
        </div>
      </div>
     
      {isDrawerOpen && <TaskDrawer onClose={closeDrawer} />}
    </main>
  )
}

export default App
