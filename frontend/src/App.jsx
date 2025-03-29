import './App.css'
import Footer from './components/Footer'
import NavbarLanding from './components/NavbarLanding'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <div className='position-relative'>
      <NavbarLanding />
      <LandingPage />
      <Footer />
    </div>
  )
}

export default App
