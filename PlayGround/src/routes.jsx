import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Contact from './Pages/Contact'
import App from './App'

const routes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/about' element={<About />} />
                <Route path='/Courses' element={<Courses />} />
                <Route path='/Contact' element={<Contact />} />
            </Routes>
        </div>
    )
}

export default routes