import MealSearch from '../components/MealSearch'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
<>
<Navbar />
<h1 className='p-2'>Recipe Finder</h1>
     <MealSearch />
</>  
)
}
