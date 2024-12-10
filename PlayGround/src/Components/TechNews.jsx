import React from 'react'

function TechNews(props){
    return(
        <div className='flex justify-between items-center w-[55vw] h-screen bg-white text-purple-700 p-5 m-2 rounded font-semibold mb-4'>
            <h1 className='w-[40vw]'>{props.title} </h1>
            <a className='bg-purple-700 text-white px-3 h-6 pt-1 text-xs bg-opacity-40 hover:bg-opacity-100 rounded-3xl' href={props.url}>Read</a>
        </div>
    )
}

export default TechNews;