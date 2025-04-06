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
import PrivateRoute from './components/PrivateRoute.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/aiChef' element={
          <PrivateRoute>
          <AIchef />
          </PrivateRoute>
          } />
        <Route path='/home' element={
          <PrivateRoute>
          <Home />
          </PrivateRoute>
          } />
        <Route path='/favLi' element={
          <PrivateRoute>
          <FavLi />
          </PrivateRoute>
          } />
        <Route path='/about' element={
          <PrivateRoute>
          <About />
          </PrivateRoute>
          } />
        <Route path='/contact' element={
          <PrivateRoute>
          <Contact />
          </PrivateRoute>
          } />
        <Route path='/recipeDetail/:mealID' element={
          <PrivateRoute>
          <RecipeDetail />
          </PrivateRoute>
          } />
        <Route path='/aboutHome' element={<AboutHome />} />
        <Route path='/contactHome' element={<ContactHome />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
