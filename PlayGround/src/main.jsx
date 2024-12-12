import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <Routes />
  </BrowserRouter>
)
