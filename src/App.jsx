
import './App.css'
import Footer from './route/Footer'
import Navbar from './route/Navbar'
import {Outlet} from "react-router-dom"

function App() {
  const data = localStorage.getItem("token");
  console.log(data);
  
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
