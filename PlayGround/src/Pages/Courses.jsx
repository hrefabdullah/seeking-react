import React, { useContext } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context/CoursesContext'

const Courses = () => {

    const {obj} = useContext(DataContext)

    return (
        <div className='bg-black w-screen h-screen'>
            <nav className='flex sticky top-0 justify-between items-center h-[100px] bg-purple-700 w-full px-12 '>
                <h1 className='text-3xl text-white font-bold cursor-pointer'>React<span>Regain</span></h1>
                <div className='flex gap-2 text-white'>
                    <div className='cursor-pointer hover:underline'><Link to='/'>Home</Link></div>
                    <div className='cursor-pointer hover:underline'><Link to='/About'>About</Link></div>
                    <div className='cursor-pointer  hover:underline'><Link to='/Contact'>Contact</Link></div>
                    <div className='cursor-pointer underline  hover:underline'>Courses</div>
                </div>
            </nav>
            <div className="flex flex-col items-center w-full h-[600px] fixed top-[90px] mb-10 p-10">
                <h1 className='text-white text-2xl mb-4 font-semibold'>OUR COURSES</h1>
                
                    <div className='overflow-y-scroll w-[700px] scrollbar-hide h-[80vh]'>
                        {obj.map(function (e, idx) {
                            return <Card key={idx} cName={e.courseName} duration={e.duration} price={e.price} />
                        })}

                    </div>
                
            </div>
        </div>
    )
}

export default Courses