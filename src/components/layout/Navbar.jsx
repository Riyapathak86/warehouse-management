import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "../context/Context";

const Navbar = () => {

  const {
    searchitem,
    setsearchitem,
    username,
    setUsername
  } = useContext(Context);

  const navigate = useNavigate();
const role = localStorage.getItem("role");
  const handleLogout = () => {

    localStorage.removeItem("username");
    localStorage.removeItem("role");
    localStorage.removeItem("token");

    setUsername("");

    navigate("/");

  };

  return (

    <nav className="navbar navbar.scrolled navbar-expand-lg fixed-top">

      <div className="container-fluid align-items-center">

{


role === "admin" && (
  <button
    className="btn text-white"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasScrolling"
  >
    <i className="bi bi-list fs-3"></i>
  </button>
)}

        {/* Logo */}
        <Link to="/" className="navbar-brand ms-2">
          <img
            src="/logo.jpeg"
            alt="logo"
            width="60"
            height="60"
            className="rounded-circle"
          />
        </Link>

        {/* Search */}
        <div className="mx-auto" style={{ width: "350px" }}>
          <input
            className="form-control rounded-pill border-0 px-4"
            type="search"
            placeholder="Search paints..."
            value={searchitem}
            onChange={(e) => setsearchitem(e.target.value)}
          />
        </div>

        {/* Right Side */}
        <div className="d-flex align-items-center gap-3">

          {/* Navigation */}
          <Link
            className="text-decoration-none text-white fw-medium"
            to="/aboutus"
          >
            About
          </Link>

          <Link
            className="text-decoration-none text-white fw-medium"
            to="/shop"
          >
            Shop
          </Link>

          <Link
            className="text-decoration-none text-white fw-medium"
            to="/painter"
          >
            Painters
          </Link>

          <Link
            className="text-decoration-none text-white fw-medium"
            to="/rewards"
          >
            Rewards
          </Link>

          {username ? (
            <>

              {username === "admin" ? (

                <Link
                  to="/admindash"
                  className="text-decoration-none d-flex flex-column align-items-center"
                >
                  <span
                    className="text-white fw-bold"
                    style={{ lineHeight: "16px" }}
                  >
                    Hi, {username}
                  </span>

                  <small
                    className="text-warning"
                    style={{ lineHeight: "14px" }}
                  >
                    Admin Panel
                  </small>

                </Link>

              ) : (

                <span className="text-white fw-bold">
                  Hi, {username}
                </span>

              )}

              <button
                className="btn btn-danger rounded-pill px-4"
                onClick={handleLogout}
              >
                Logout
              </button>

            </>
          ) : (

            <Link
              className="btn btn-light rounded-pill px-4"
              to="/AdminLogin"
            >
              Login
            </Link>

          )}

        </div>

      </div>

    </nav>

  );

};

export default Navbar;