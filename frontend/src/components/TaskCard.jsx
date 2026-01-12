import { statuses } from "../data/taskData"

const TaskCard = ({ task }) => {
    const { name, description, icon, status } = task
    console.log(status);
    const statusConfig = statuses[status];
    console.log(statusConfig);
    

    return (
        <div className="flex p-4 rounded-2xl items-start" style={{backgroundColor: statusConfig?.background || '#97A3B6'}}>
            <img src={icon} alt="Task Icon" className="w-12 h-12 mr-4 bg-white p-2 rounded-xl shrink-0" />
            <div className='flex flex-col flex-1 mr-4'>
                <h1 className='font-outfit font-semibold text-xl'>{name}</h1>
                <p className='font-outfit text-base font-light'>{description}</p>
            </div>
            {statusConfig && (
                <img src={statusConfig.icon} alt="Status Icon" className={`w-12 h-12 p-2 rounded-xl shrink-0`} style={{backgroundColor: statusConfig.color}} />
            )}
        </div>
    )
}

export default TaskCard
