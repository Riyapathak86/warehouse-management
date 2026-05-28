import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/Context";

const Navbar = () => {
  const { searchitem, setsearchitem } = useContext(Context);

  return (
    <>
      {/* Navbar */}
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
                <img 
    src="/logo.jpeg" 
    alt="logo" 
    width="80"
    height="80"
    className="rounded-circle"
  />
          </Link>

          {/* Search */}
          <div className="position-relative w-25">
            <input
              className="form-control rounded-pill ps-5 border-0 custom-search"
              type="search"
              placeholder="Find your products"
              value={searchitem}
              onChange={(e) => setsearchitem(e.target.value)}
            />
        </div>
<Link
  className="text-decoration-none text-light"
to="/aboutus">
About us</Link>
<Link
  className="text-decoration-none text-light"
to="/shop">
shop</Link>
          <Link
            className="text-decoration-none text-light"
            to="/AdminLogin"
          >
      REGISTER/LOGIN
          </Link>
        </div>
      </nav>

      {/* Full Width Video */}
      {/* <div >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "120%",
            height: "80vh",
            objectFit: "cover",
          }}
        >
          <source src="/heading.mp4" type="video/mp4" />
        </video>
      </div> */}
    </>
  );
};

export default Navbar;