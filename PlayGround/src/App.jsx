import React, { useEffect, useState } from 'react';
import TechNews from './Components/TechNews';
import Login from './Components/Login';
import { Link } from 'react-router-dom';

function App() {


 

  const [news, setNews] = useState([])

  useEffect(() => {
    const techns = async () => {
      var notdata = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=53e781c66cbf49f8a45e291cf800e6a3`)
      var data = await notdata.json()
      console.log(data.articles)
      setNews(data.articles)
    }
    techns()
  }, []);

  var nameA = 'User'
  const [a, SetA] = useState(nameA)

  const [loginPopup,SetLogin] = useState(false)

  const loginClick = () => {
    SetLogin(true)
  }

  const CloseLogin = () => {
    SetLogin(false)
  }


  return (
    
    <div className='scrollbar-hide bg-black text-white'>
      <body className='flex justify-center items-center'>
        <nav className='flex absolute top-0 h-[100px] justify-between w-full px-12 items-center '>
          <h1 id='home' className='absolute top-0 left-0 text-black'>this is home page</h1>
          <h1 className='text-3xl font-bold cursor-pointer'>React<span className='text-purple-700'>Regain</span></h1>
          <div className='flex gap-2 text-white'>
            <div className='cursor-pointer hover:font-semibold'><Link to='/'>Home</Link></div>
            <div className='cursor-pointer hover:font-semibold'><Link to='/About'>About</Link></div>
            <div className='cursor-pointer hover:font-semibold'><Link to='/Contact'>Contact</Link></div>
            <div  className='text-purple-700 cursor-pointer hover:font-semibold'><Link to='/Courses'>Courses</Link></div>
          </div>
        </nav>
        <body className='flex flex-col justify-center items-center h-screen w-screen'>
          <h1 className='text-4xl flex gap-2 font-semibold my-3 '>Hello <p className='text-purple-700 font-bold'>{a}</p></h1>
          <p>Welcome to your first <b className='text-purple-700'>ReactRegain</b> project</p>
          <button onClick={loginClick} className='my-3 rounded-lg bg-purple-700 px-2 py-1 text-sm font-semibold active:bg-purple-900' >Get Started</button>
        </body>
        
          {loginPopup && (
            <div className={`flex justify-center items-center fixed  border rounded bg-purple-700`}>
              <Login setA={SetA} close={CloseLogin} />
            </div>
          )}
        

      </body>
      <div className='flex flex-col items-center'>
        
        <h1 className='text-3xl m-4 mb-10 font-semibold'>World News</h1>
        <div className='h-[600px] bg-purple-700 rounded flex items-center flex-col p-10 scrollbar-hide overflow-scroll'>


          {news.length > 0 ? (
            news.map((e, idx) => (
              <TechNews key={idx} title={e.title} url={e.url} />
            ))
          ) : (
            <p className="text-white">No tech news available at the moment.</p>
          )}

        </div>
        <a href='#home' className='fixed bottom-0 right-0 m-10 bg-white rounded-full h-5 w-5'></a>
      </div>

    </div>
  )

}

export default App;