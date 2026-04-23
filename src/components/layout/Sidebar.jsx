import React from "react";
import { NavLink,Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="offcanvas offcanvas-start sidebar"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabIndex="-1"
      id="offcanvasScrolling"
    >
      
      <div className="offcanvas-header border-bottom">
        <h5 className="fw-bold m-0">WareFlow</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>


      <div className="offcanvas-body p-0 text-white sidebar">
        <ul className="nav flex-column p-3 gap-2">
  <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `d-flex align-items-center gap-3 px-3 py-2 rounded text-decoration-none ${
                  isActive ? "bg-warning text-dark fw-semibold" : "text-white"
                }`
              }
            >
          <i className="bi bi-speedometer2"></i>
              Dashboard
            </NavLink>
          </li>
       
          <li>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `d-flex align-items-center gap-3 px-3 py-2 rounded text-decoration-none ${
                  isActive ? "bg-warning text-dark fw-semibold" : "text-white"
                }`
              }
            >
              <i className="bi bi-box fs-5"></i>
              Orders
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/shipments"
              className={({ isActive }) =>
                `d-flex align-items-center gap-3 px-3 py-2 rounded text-decoration-none ${
                  isActive ? "bg-warning text-dark fw-semibold" : "text-white"
                }`
              }
            >
              <i className="bi bi-truck fs-5"></i>
              Shipments
            </NavLink>
          </li>

   
          <li>
            <NavLink
              to="/inventory"
              className={({ isActive }) =>
                `d-flex align-items-center gap-3 px-3 py-2 rounded text-decoration-none ${
                  isActive ? "bg-warning text-dark fw-semibold" : "text-white"
                }`
              }
            >
              <i className="bi bi-clock-history fs-5"></i>
              Inventory
            </NavLink>
          </li>

   
          <li>
            <NavLink
              to="/finance"
              className={({ isActive }) =>
                `d-flex align-items-center gap-3 px-3 py-2 rounded text-decoration-none ${
                  isActive ? "bg-warning text-dark fw-semibold" : "text-white"
                }`
              }
            >
              <i className="bi bi-currency-dollar fs-5"></i>
              Finance
            </NavLink>
          </li>

        
          <li>
            <NavLink
              to="/customer"
              className={({ isActive }) =>
                `d-flex align-items-center gap-3 px-3 py-2 rounded text-decoration-none ${
                  isActive ? "bg-warning text-dark fw-semibold" : "text-white"
                }`
              }
            >
              <i className="bi bi-person fs-5"></i>
              Customer
            </NavLink>
          </li>

         
          <li>
            <NavLink
              to="/tracking"
              className={({ isActive }) =>
                `d-flex align-items-center gap-3 px-3 py-2 rounded text-decoration-none ${
                  isActive ? "bg-warning text-dark fw-semibold" : "text-white"
                }`
              }
            >
              <i className="bi bi-geo-alt fs-5"></i>
              Tracking
            </NavLink>
          </li>
                 <li>
            <NavLink
              to="/admindash"
              className={({ isActive }) =>
                `d-flex align-items-center gap-3 px-3 py-2 rounded text-decoration-none ${
                  isActive ? "bg-warning text-dark fw-semibold" : "text-white"
                }`
              }
            >
             <i className="bi bi-geo-alt fs-5 me-2"></i>
            Admin Panel
            </NavLink>
          
          </li>


        </ul>
      </div>
    </div>
  );
};

export default Sidebar;