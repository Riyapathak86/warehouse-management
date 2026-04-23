import  { useContext } from "react";
import { Link } from "react-router-dom";
  import Context from "../context/Context";

const Navbar = () => {

  const {searchitem, setsearchitem ,FilterData, setfilterData}=useContext(Context)





  return (
    <nav className="navbar px-3 fixed-top shadow-sm custom-navbar">
      <div className="container-fluid d-flex justify-content-between align-items-center">

        {/* Left */}
        <button
          className="btn d-flex align-items-center gap-2 text-white"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling"
        >
          <i className="bi bi-list fs-4"></i>
         
        </button>


<Link to="/" className="btn text-white fw-bold">
  wareflow
</Link>
        {/* Search */}
        <div className="position-relative w-25">
          <input
            className="form-control rounded-pill ps-5 border-0 custom-search"
            type="search"
            placeholder="Find inventory, orders or reports"
            value={searchitem}
            onChange={(e) => setsearchitem(e.target.value)}
          />
          <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-light"></i>
        </div>

        {/* Right */}
        <div className="d-flex align-items-center gap-3 text-white">

          <div className="icon-box">
            <i className="bi bi-bell"></i>
          </div>

          <div className="icon-box">
            <i className="bi bi-calendar"></i>
          </div>

          <div className="icon-box bg-warning text-dark">
            <i className="bi bi-sun"></i>
          </div>

          <i className="bi bi-moon fs-5"></i>

          <div className="d-flex align-items-center gap-2 ms-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="rounded-circle"
              width="35"
              height="35"
            />
            <span className="fw-semibold">Henry Kaul</span>
            <i className="bi bi-chevron-down"></i>
          </div>

        </div>
<Link className="text-decoration-none  text-light" to="/AdminLogin">Admin dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;