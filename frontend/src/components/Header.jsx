import React from 'react'

const Header = () => {
    return (
        <div className='flex'>
            <img src="/Logo.svg" alt="Logo" className="mr-2 self-start" />
            <div className='flex flex-col justify-center items-start'>
                <h1 className='font-outfit text-[2.5rem] font-normal flex items-center'>
                    My Task Board
                </h1>
                <p className='font-outfit text-base font-light mt-2'>Tasks to keep organized</p>
            </div>
            <img src="/Edit_duotone.svg" alt="Edit" className="ml-2 self-start" />
        </div>
    )
}

export default Header
