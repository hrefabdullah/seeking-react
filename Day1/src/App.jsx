import React, { useState } from 'react';

function App() {

  var nameArr = ['Haider', 'Abdullah', 'Danish', 'Faizan', 'Azhar', 'Yahya', 'Izhan', 'Ibrahim', 'Haris']
  console.log(nameArr.length)
  const [i, SetI] = useState(0)
  const [a, SetA] = useState(nameArr[i])
  const [username,setUsername] = useState('')
  const submitHandler = (e) =>{
    e.preventDefault()
    console.log(username)
    setUsername('')

  }


  return (
    <div className=' bg-black text-white'>
      <body className='flex justify-center items-center'>
        <nav className='flex fixed top-0 justify-between w-full my-3 px-12 items-center '>
          <h1 className='text-3xl font-bold cursor-pointer'>{a}<span className='text-purple-700'>Inc</span></h1>
          <div className='flex gap-2 text-white'>
            <div className='cursor-pointer hover:font-semibold'>Home</div>
            <div className='cursor-pointer hover:font-semibold'>About</div>
            <div className='cursor-pointer hover:font-semibold'>Menu</div>
          </div>
        </nav>
        <body className='flex flex-col justify-center items-center h-screen w-screen'>
          <h1 className='text-4xl flex gap-2 font-semibold my-3 '>Hello <p className='text-purple-700 font-bold'>{a}</p></h1>
          <p>Welcome to your first <b className='text-purple-700'>ReactRegain</b> project</p>
          <button className='my-3 rounded-lg bg-purple-700 px-2 py-1 text-sm font-semibold active:bg-purple-900' >Explore more</button>
        </body>
        <section className='w-3/6 bg-purple-700 h-screen flex justify-center items-center'>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }} className='flex flex-col justify-center items-center border rounded-md w-100 h-50 p-10' action="">
            <h1 className='text-3xl font-bold my-5'>Change User</h1>
            <input value={username} onChange={(e)=>{
              setUsername(e.target.value)
            }} className='text-black my-3 rounded-md px-3 text-md h-8' type="text"placeholder='Enter username' />
            <button className='rounded-sm my-2 px-1.5 text-md active:bg-white active:text-purple-700' onClick={() => {
            SetA(username)
            var num = Math.floor(Math.random() * nameArr.length)
            SetI(num)
          }}>Continue</button>
          </form>
        </section>
      </body>
    </div>
  )

}

export default App;