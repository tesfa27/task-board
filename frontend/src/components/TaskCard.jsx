import { statuses } from "../data/taskData"
import { useBoardStore } from "../store/boardStore"

const TaskCard = ({ task }) => {
    const { openDrawer } = useBoardStore()
    const { name, description, icon, status } = task
    const statusConfig = statuses[status];

    return (
        <div className="flex p-3 sm:p-4 rounded-2xl items-start cursor-pointer" style={{backgroundColor: statusConfig?.background || '#97A3B6'}} onClick={() => openDrawer(task)}>
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4 bg-white p-2 rounded-xl shrink-0" >
                <span className="text-lg sm:text-xl">{icon}</span>
            </div>
            <div className='flex flex-col flex-1 mr-3 sm:mr-4'>
                <h1 className='font-outfit font-semibold text-lg sm:text-xl'>{name}</h1>
                <p className='font-outfit text-sm sm:text-base font-light'>{description}</p>
            </div>
            {statusConfig && (
                <div className="p-1.5 sm:p-2 rounded-xl shrink-0" style={{backgroundColor: statusConfig.color}}>
                    <img src={statusConfig.icon} alt="Status Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
            )}
        </div>
    )
}

export default TaskCard
