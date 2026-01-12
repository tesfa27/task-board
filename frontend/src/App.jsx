import Header from "./components/Header"
import TaskCard from "./components/TaskCard"


function App() {


  return (
    
      <div className="flex flex-col items-center min-h-screen bg-gray-100 py-4 md:py-8">
      <div className="flex flex-col w-full max-w-xl gap-4 px-4">
      <Header />
      <TaskCard task={{ name: "Task in progress", description: "Work on Challenge on devchallenges.io, learn Typescript", icon: "📋", status: "In Progress" }} />
      </div>
     </div>
  )
}

export default App
