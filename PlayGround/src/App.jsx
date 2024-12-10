import React, { useEffect, useState } from 'react';
import Card from './Components/Card'
import TechNews from './Components/TechNews';

function App() {

  var obj = [
    {
      "courseName": "Full-Stack Web Development Bootcamp",
      "duration": "12 weeks",
      "price": "$499",
      "description": "A comprehensive course covering HTML, CSS, JavaScript, React, Node.js, and more.",
      "level": "Beginner to Intermediate",
      "features": [
        "Project-based learning",
        "Certificate upon completion",
        "Access to mentors and community",
        "Flexible schedule"
      ]
    },
    {
      "courseName": "Frontend Web Development Mastery",
      "duration": "8 weeks",
      "price": "$349",
      "description": "Learn to build stunning user interfaces with HTML, CSS, and JavaScript.",
      "level": "Beginner",
      "features": [
        "Hands-on projects",
        "Focus on responsive design",
        "Lifetime access",
        "HTML, CSS, JavaScript basics"
      ]
    },
    {
      "courseName": "Advanced JavaScript for Developers",
      "duration": "6 weeks",
      "price": "$299",
      "description": "Master JavaScript concepts, including ES6, asynchronous programming, and advanced patterns.",
      "level": "Intermediate",
      "features": [
        "Deep dive into ES6+",
        "Interactive coding challenges",
        "Real-world projects",
        "Best practices for debugging"
      ]
    },
    {
      "courseName": "React and Redux Complete Guide",
      "duration": "10 weeks",
      "price": "$399",
      "description": "Learn to build dynamic web applications using React and state management with Redux.",
      "level": "Intermediate",
      "features": [
        "React fundamentals and hooks",
        "State management with Redux",
        "API integration",
        "Performance optimization tips"
      ]
    },
    {
      "courseName": "Node.js and Express.js Essentials",
      "duration": "7 weeks",
      "price": "$349",
      "description": "Understand backend development by building scalable web applications with Node.js and Express.",
      "level": "Intermediate",
      "features": [
        "Introduction to backend concepts",
        "Database integration with MongoDB",
        "API design principles",
        "Security and authentication"
      ]
    },
    {
      "courseName": "Web Development for Beginners",
      "duration": "5 weeks",
      "price": "$199",
      "description": "Kickstart your journey in web development with an easy-to-follow beginner course.",
      "level": "Beginner",
      "features": [
        "HTML, CSS basics",
        "Introduction to JavaScript",
        "Simple project to build a portfolio website",
        "Supportive learning community"
      ]
    },
    {
      "courseName": "CSS Animations and Transitions",
      "duration": "4 weeks",
      "price": "$149",
      "description": "Create engaging and interactive user interfaces with advanced CSS animations and transitions.",
      "level": "Beginner to Intermediate",
      "features": [
        "Learn keyframe animations",
        "Master transition effects",
        "Build animation-rich websites",
        "Practical examples included"
      ]
    },
    {
      "courseName": "TypeScript for Web Developers",
      "duration": "6 weeks",
      "price": "$249",
      "description": "Enhance your JavaScript skills with TypeScript to build scalable and maintainable web applications.",
      "level": "Intermediate",
      "features": [
        "TypeScript fundamentals",
        "Strongly typed programming",
        "Integration with React and Node.js",
        "Debugging and best practices"
      ]
    },
    {
      "courseName": "Build and Deploy with Next.js",
      "duration": "8 weeks",
      "price": "$399",
      "description": "Learn to create SEO-friendly and high-performance web apps using the Next.js framework.",
      "level": "Intermediate to Advanced",
      "features": [
        "Server-side rendering (SSR)",
        "Static site generation (SSG)",
        "API routes and integration",
        "Deploying on Vercel and other platforms"
      ]
    }
  ]

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






  var nameArr = ['Haider', 'Abdullah', 'Danish', 'Faizan', 'Azhar', 'Yahya', 'Izhan', 'Ibrahim', 'Haris']
  console.log(nameArr.length)
  const [i, SetI] = useState(0)
  const [a, SetA] = useState(nameArr[i])
  const [username, setUsername] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(username)
    setUsername('')
  }


  return (
    <div className='scrollbar-hide bg-black text-white'>
      <body className='flex justify-center items-center'>
        <nav className='flex absolute top-0 justify-between w-full my-3 mt-5 px-12 items-center '>
          <h1 className='text-3xl font-bold cursor-pointer'>React<span className='text-purple-700'>Regain</span></h1>
          <div className='flex gap-2 text-white'>
            <div className='cursor-pointer hover:font-semibold'>Home</div>
            <div className='cursor-pointer hover:font-semibold'>About</div>
            <div className='cursor-pointer hover:font-semibold'>Menu</div>
          </div>
        </nav>
        <body className='flex flex-col justify-center items-center h-screen w-screen'>
          <h1 className='text-4xl flex gap-2 font-semibold my-3 '>Hello <p className='text-purple-700 font-bold'>{a}</p></h1>
          <p>Welcome to your first <b className='text-purple-700'>ReactRegain</b> project</p>
          <a href='#ourCourses' className='my-3 rounded-lg bg-purple-700 px-2 py-1 text-sm font-semibold active:bg-purple-900' >Our Courses</a>
        </body>
        <section className='w-3/6 bg-purple-700 h-screen flex justify-center items-center'>
          <form onSubmit={(e) => {
            submitHandler(e)
          }} className='flex flex-col justify-center items-center border rounded-md w-100 h-50 p-10' action="">
            <h1 className='text-3xl font-bold my-5'>Change User</h1>
            <input value={username} onChange={(e) => {
              setUsername(e.target.value)
            }} className='text-black my-3 rounded-md px-3 text-md h-8' type="text" placeholder='Enter username' />
            <button className='rounded-sm my-2 px-1.5 text-md active:bg-white active:text-purple-700' onClick={() => {
              SetA(username)
              var num = Math.floor(Math.random() * nameArr.length)
              SetI(num)
            }}>Continue</button>
          </form>
        </section>
      </body>
      <div className='flex'>
        <div id='ourCourses' className="w-[70vh] h-screen p-10">
          <h1 className='text-2xl ml-5 mb-10 font-semibold'>OUR COURSES</h1>
          <div className='overflow-y-scroll scrollbar-hide h-[80vh]'>
            {obj.map(function (e) {
              return <Card cName={e.courseName} duration={e.duration} price={e.price} />
            })}

          </div>
        </div>
        <h1 className='text-3xl m-4 mt-8 font-semibold'>Tech News</h1>
        <div className='h-[95vh] bg-purple-700 w-full rounded flex items-center flex-col p-3 scrollbar-hide overflow-scroll'>
          

          {news.length > 0 ? (
            news.map((e, idx) => (
              <TechNews key={idx} title={e.title} url={e.url} />
            ))
          ) : (
            <p className="text-white">No tech news available at the moment.</p>
          )}

        </div>
      </div>

    </div>
  )

}

export default App;