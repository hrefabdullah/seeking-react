import React, { useState } from 'react'


const Login = ({setA,close}) => {

    const [username, setUsername] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(username)
        setA(username)
        setUsername('')
        close()
    }
    return (
        <div>
            <section className='flex justify-center items-center'>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }} className='flex flex-col justify-center items-center rounded-md w-[300px] h-[300px] '>
                    <button onClick={close} className='absolute rounded right-0 top-0 active:scale-90 font-mono text-xl hover:bg-white hover:text-purple-700 w-8 h-8'>x</button>
                    <h1 className='text-3xl font-bold mb-5'>Welcome</h1>
                    <input value={username} onChange={(e) => {
                        setUsername(e.target.value)
                    }} className='text-black rounded-md px-3 text-sm h-7 w-[200px] mb-2' type="text" placeholder='Enter Name' />
                    <button className='m-2 px-2 p-0.5 text-sm bg-white text-purple-700 rounded active:scale-90' type='submit'>Continue</button>
                </form>
            </section>
        </div>
    )
}

export default Login