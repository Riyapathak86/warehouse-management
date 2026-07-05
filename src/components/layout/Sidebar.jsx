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
        style={{  backgroundImage: "url('/Images/sidebar.png')",
           backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",}}
    >
      
      <div className="offcanvas-header border-bottom">
        <h5 className="fw-bold m-0"
      
        
        ><b   style={{color:"yellow"}}>SATKAAR ENTERPRISES</b></h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>


      <div className="offcanvas-body p-0 text-white ">
        <ul className="nav flex-column p-3 gap-2">
 <li>
  <NavLink
    to="/admindash/addproduct"
    className={({ isActive }) =>
      `d-flex align-items-center gap-3 px-3 py-2 rounded text-decoration-none ${
        isActive ? "bg-warning text-dark fw-semibold" : "text-white"
      }`
    }
  >
    <i className="bi bi-plus-circle fs-5"></i>
    Add Product
  </NavLink>
</li>

<li>
  <NavLink
    to="/admindash/totalStock"
    className={({ isActive }) =>
      `d-flex align-items-center gap-3 px-3 py-2 rounded text-decoration-none ${
        isActive ? "bg-warning text-dark fw-semibold" : "text-white"
      }`
    }
  >
    <i className="bi bi-box-seam fs-5"></i>
    Total Stock
  </NavLink>
</li>

<li>
  <NavLink
    to="/admindash/orders"
    className={({ isActive }) =>
      `d-flex align-items-center gap-3 px-3 py-2 rounded text-decoration-none ${
        isActive ? "bg-warning text-dark fw-semibold" : "text-white"
      }`
    }
  >
    <i className="bi bi-cart-check fs-5"></i>
    Orders
  </NavLink>
</li>

<li>
  <NavLink
    to="/admindash/painterDashboard"
    className={({ isActive }) =>
      `d-flex align-items-center gap-3 px-3 py-2 rounded text-decoration-none ${
        isActive ? "bg-warning text-dark fw-semibold" : "text-white"
      }`
    }
  >
    <i className="bi bi-person-workspace fs-5"></i>
    Painter Dashboard
  </NavLink>
</li>

<li>
  <NavLink
    to="/admindash/reports"
    className={({ isActive }) =>
      `d-flex align-items-center gap-3 px-3 py-2 rounded text-decoration-none ${
        isActive ? "bg-warning text-dark fw-semibold" : "text-white"
      }`
    }
  >
    <i className="bi bi-bar-chart-line fs-5"></i>
    Reports
  </NavLink>
</li>

<li>
  <NavLink
    to="/admindash/priceList"
    className={({ isActive }) =>
      `d-flex align-items-center gap-3 px-3 py-2 rounded text-decoration-none ${
        isActive ? "bg-warning text-dark fw-semibold" : "text-white"
      }`
    }
  >
    <i className="bi bi-currency-rupee fs-5"></i>
    Price List
  </NavLink>
</li>


        </ul>
      </div>
    </div>
  );
};

export default Sidebar;