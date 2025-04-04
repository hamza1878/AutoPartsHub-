import './App.css'
import Navbar from './components/Navbar'
import Brand from './pages/Brands'
import Intro from './pages/Intro'
import ProductCarousel from './pages/Product'
import NewProductCarousel from './pages/New_Product'
import TOP_SELLING from './pages/TOP_SELLING'
import DressStyleGrid from './pages/BROWSER_BY_DRESS_STYLE'
function App() {

  return (
    <div className=' w-full'>
    <Navbar/>
    <Intro/>
    <Brand/>
<NewProductCarousel/>
<TOP_SELLING/>
<DressStyleGrid/>
    {/* <ProductCarousel/> */}
    </div>
  )
}

export default App
