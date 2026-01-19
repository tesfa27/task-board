import { statuses } from "../data/taskData"
import { useBoardStore } from "../store/boardStore"

const TaskCard = ({ task }) => {
    const { openDrawer } = useBoardStore()
    const { name, description, icon, status } = task
    const statusConfig = statuses[status];

    return (
        <div className="flex p-4 rounded-2xl items-start cursor-pointer" style={{backgroundColor: statusConfig?.background || '#97A3B6'}} onClick={() => openDrawer(task)}>
            <div className="flex items-center justify-center w-12 h-12 mr-4 bg-white p-2 rounded-xl shrink-0" >
                {icon}
            </div>
            <div className='flex flex-col flex-1 mr-4'>
                <h1 className='font-outfit font-semibold text-xl'>{name}</h1>
                <p className='font-outfit text-base font-light'>{description}</p>
            </div>
            {statusConfig && (
                <img src={statusConfig.icon} alt="Status Icon" className={` p-2 rounded-xl shrink-0`} style={{backgroundColor: statusConfig.color}} />
            )}
        </div>
    )
}

export default TaskCard
