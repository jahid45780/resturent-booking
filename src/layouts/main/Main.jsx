
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Main() {
  return (
    <><div className='container'>
      
      <Navbar />
        <div >
            <Outlet />
        </div>
    </div>
        <Footer />
    </>
  )
}
