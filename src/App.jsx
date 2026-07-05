import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const App = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {isHome && (
        <div
          style={{
            backgroundImage: "url('/Images/intro.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "650px",
            position: "relative",
          }}
        >
          <Sidebar />
          <Navbar />

          {/* Hero Text */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "2%",
              transform: "translateY(-50%)",
              color: "white",
              zIndex: 10,
              maxWidth: "600px",
            }}
          >
          <h1
  className="m-0"
  style={{
    fontSize: "4.5rem",
    fontWeight: "700",
    color: "#ffd700ff",
    textShadow: `
      2px 2px 5px rgba(0,0,0,0.5),
      0 0 10px rgba(255,215,0,0.6), 
      0 0 20px rgba(255,215,0,0.4)
    `,
    letterSpacing: "1px",
    lineHeight: "1.1",
  }}
>
  Experience The
  <br />
  World Of Berger
</h1>
            <p
              style={{
                fontSize: "1.2rem",
                marginTop: "15px",
                textShadow: "1px 1px 6px rgba(0,0,0,0.4)",
              }}
            >
              Premium Paint Solutions For Every Space
            </p>
{/* 
            <button
              className="btn btn-warning btn-lg mt-3 fw-bold"
              style={{
                borderRadius: "30px",
                padding: "12px 30px",
              }}
            >
              <Link to="/inventory">Explore Products</Link>
              
            </button> */}
            <Link
  to="/inventory"
  className="btn btn-warning btn-lg mt-3 fw-bold"
  style={{
    borderRadius: "30px",
    padding: "12px 30px",
    textDecoration: "none",
    color: "#000",
  }}
>
  Explore Products
</Link>  
          </div>
        </div>
      )}

      {!isHome && (
        <>
          <Sidebar />
          <Navbar />
        </>
      )}

      <Outlet />
    </>
  );
};

export default App;