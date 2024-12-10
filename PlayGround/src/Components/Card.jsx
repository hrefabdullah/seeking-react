import React from 'react'

function Card(props) {
    return (
        <div className='h-max w-[50vh] p-4 px-10 flex justify-between items-center gap-8 m-5 rounded bg-purple-700'>
            <span className='flex flex-col text-sm items-start'>
                <h1 className='text-l font-bold'>{props.cName}</h1>
                <div className='flex gap-2 text-xs'>
                    <h1>{props.duration}</h1>
                    <h1 className='text-yellow-300 font-semibold'>{props.price}</h1>
                </div>
            </span>
            <button className='bg-white bg-opacity-20 px-3 text-md pb-0.5 rounded-xl hover:bg-opacity-100 hover:text-purple-700 active:scale-0.5'>Buy</button>
        </div>
    )
}

export default Card;