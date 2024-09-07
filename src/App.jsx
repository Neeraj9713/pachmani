
import './App.css'
import Footer from './route/Footer'
import Navbar from './route/Navbar'
import {Outlet} from "react-router-dom"

function App() {
  

  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
