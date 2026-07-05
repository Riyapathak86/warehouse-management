import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router'
import { useContext } from 'react'
import Context from '../context/Context'

const AdminDashboard = () => {

  const location = useLocation()

  const isChildRoute = location.pathname !== "/admindash"

  return (
    <div>

      {/* Navbar */}
      

      {/* Main Content */}
      <div
        style={{
          marginTop: "90px",
          padding: "30px",
          minHeight: "100vh"
        }}
      >

        <h2 className="mb-4">
          Hello Admin 👋
        </h2>

        {isChildRoute ? (
          <Outlet />
        ) : (
          <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">

            <div
              className="p-5 rounded shadow text-white text-center"
              style={{
                background: "#0D9488",
                minWidth: "250px"
              }}
            >
              <h5>Today's Sale</h5>
              <h3>₹0</h3>
            </div>

            <div
              className="p-5 rounded shadow text-white text-center"
              style={{
                background: "#1E40AF",
                minWidth: "250px"
              }}
            >
              <h5>Monthly Sale</h5>
              <h3>₹0</h3>
            </div>

            <div
              className="p-5 rounded shadow text-white text-center"
              style={{
                background: "#059669",
                minWidth: "250px"
              }}
            >
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