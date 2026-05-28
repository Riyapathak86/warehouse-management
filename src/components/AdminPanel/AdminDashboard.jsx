import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router'

const AdminDashboard = () => {

  const NAV_HEIGHT = 70
  const SIDEBAR_WIDTH = 250

  const location = useLocation()


  const isChildRoute = location.pathname !== "/admindash"

  return (
    <div>


      <div 
        style={{
          width: `${SIDEBAR_WIDTH}px`,
          position: "fixed",
          top: `${NAV_HEIGHT}px`,
          left: 0,
          height: `calc(100vh - ${NAV_HEIGHT}px)`,
          background: "#0D9488",
          color: "white",
          padding: "20px"
        }}
      >

        <h4>Admin Dashboard</h4>
<NavLink to="addproduct">addproduct</NavLink>
        <ul className="list-unstyled mt-4">

          <li className="my-4 d-flex align-items-center gap-2">
            <i className="bi bi-box-seam"></i>
            <NavLink to="totalStock" className="text-white text-decoration-none">
              Total Stock
            </NavLink>
          </li>

          <li className="my-4 d-flex align-items-center gap-2">
            <i className="bi bi-cart-check"></i>
            <NavLink to="orders" className="text-white text-decoration-none">
              Orders
            </NavLink>
          </li>

          <li className="my-4 d-flex align-items-center gap-2">
            <i className="bi bi-brush"></i>
            <NavLink to="painterDashboard" className="text-white text-decoration-none">
              Painter Dashboard
            </NavLink>
          </li>

          <li className="my-4 d-flex align-items-center gap-2">
            <i className="bi bi-bar-chart"></i>
            <NavLink to="reports" className="text-white text-decoration-none">
              Reports
            </NavLink>
          </li>

          <li className="my-4 d-flex align-items-center gap-2">
            <i className="bi bi-currency-rupee"></i>
            <NavLink to="priceList" className="text-white text-decoration-none">
              Price List
            </NavLink>
          </li>

        </ul>
      </div>

   
      <div 
        style={{
          marginLeft: `${SIDEBAR_WIDTH}px`,
          marginTop: `${NAV_HEIGHT}px`,
          padding: "30px",
          minHeight: "100vh",
        }}
      >

        <h2 className="mb-4">Hello Admin 👋</h2>

 
        {isChildRoute ? (
          <Outlet />
        ) : (
          <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap mx-5">

            <div className="p-5 rounded shadow text-white text-center"
              style={{ background: "#0D9488", minWidth: "220px" }}>
              <h5>Today's Sale</h5>
              <h3>₹0</h3>
            </div>

            <div className="p-5 rounded shadow text-white text-center"
              style={{ background: "#1E40AF", minWidth: "220px" }}>
              <h5>Monthly Sale</h5>
              <h3>₹0</h3>
            </div>

            <div className="p-5 rounded shadow text-white text-center"
              style={{ background: "#059669", minWidth: "220px" }}>
              <h5>Yearly Sale</h5>
              <h3>₹0</h3>
            </div>

          </div>
        )}

      </div>

    </div>
  )
}

export default AdminDashboard