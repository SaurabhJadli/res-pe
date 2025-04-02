import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import FavLi from './pages/FavLi.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import AIchef from './pages/AIchef.jsx'
import RecipeDetail from './pages/RecipeDetail.jsx'
import AboutHome from './pages/AboutHome.jsx'
import ContactHome from './pages/ContactHome.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/aiChef' element={<AIchef />} />
        <Route path='/home' element={<Home />} />
        <Route path='/favLi' element={<FavLi />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/aboutHome' element={<AboutHome />} />
        <Route path='/contactHome' element={<ContactHome />} />
        <Route path='/recipeDetail/:mealID' element={<RecipeDetail />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
