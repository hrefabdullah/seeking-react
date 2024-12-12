import React from 'react'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div className=' bg-black h-screen w-screen'>
      <nav className='flex top-0 justify-between items-center h-[100px] bg-purple-700 w-full px-12 '>
        <h1 className='text-3xl text-white font-bold cursor-pointer'>ReactRegain</h1>
        <div className='flex gap-2 text-white'>
        <div className='cursor-pointer hover:underline'><Link to='/'>Home</Link></div>
          <div className='cursor-pointer underline hover:underline'><Link to='/About'>About</Link></div>
          <div className='cursor-pointer  hover:underline'><Link to='/Contact'>Contact</Link></div>
          <button className='cursor-pointer hover:underline'>Login</button>
        </div>
      </nav>
     <div className='text-white m-10'>
        <h1 className='text-4xl mb-5'>About me</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus recusandae aut voluptatibus eaque quod culpa eius suscipit. Eaque repudiandae quo, exercitationem cumque, est illo, nostrum incidunt aliquid voluptatem culpa sint distinctio laborum dolorem tempora error! Porro fugit ex itaque ad, modi est, asperiores consectetur vero quidem tempore aliquid laudantium molestiae quaerat ratione nobis qui at cumque consequatur obcaecati placeat iusto? Provident, sit delectus similique quia eos maxime laudantium fugiat quam error qui tenetur, totam, vitae ab! Inventore itaque eligendi reprehenderit vitae repudiandae et unde maiores praesentium, quae quasi natus sapiente amet! Nam libero impedit nobis totam molestias blanditiis error repellendus.</p>
     </div>
    </div>
  )
}

export default About