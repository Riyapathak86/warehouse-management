
import Sidebar from './components/layout/Sidebar'
import Navbar from './components/layout/Navbar'
import { Outlet } from 'react-router-dom'
import Card from './components/wareflow/Card'
import Context from './components/context/Context'
  import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Inventory from './components/wareflow/Inventory'
import AdminDashboard from './components/AdminPanel/AdminDashboard'
const App = () => {


  return (
    <>
    <div>
      <div >
        <Sidebar />
      </div>
      <div className='mt-5'>
        <Navbar />
    <Outlet />
  
  </div>
</div>


     
</>
      
    
  )
}

export default App