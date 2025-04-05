import './App.css'
import Navbar from './components/Navbar'
import Brand from './pages/Brands'
import Intro from './pages/Intro'
import ProductCarousel from './pages/Product'
import NewProductCarousel from './pages/New_Product'
import TOP_SELLING from './pages/TOP_SELLING'
import ServiceGrid from './pages/ServiceGrid'
import Login from './auth/login'
import SignUp from './auth/SignUp'


function App() {

  return (
    <div className=' w-full'>
    {/* <Navbar/>
    <Intro/>
    <Brand/>
<NewProductCarousel/>
<TOP_SELLING/>
<ServiceGrid/> */}
<Login/>

<SignUp/>

    {/* <ProductCarousel/> */}
    </div>
  )
}

export default App
