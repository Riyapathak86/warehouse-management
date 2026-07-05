import React from "react";
// import Data from "./Data.jsx";
import { useContext,useState } from "react";
import Context from "../context/Context.jsx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Inventory = () => {
  const navigate = useNavigate();

    const { InventoryData ,FilterData, setfilterData, searchitem,order, setorder} = useContext(Context)

const handleFilter = (category) => {
  if (category === "All") {
    setfilterData(InventoryData); 
  } else {
    const result = InventoryData.filter((item) =>
      item.category === category
    );
    setfilterData(result);
  }
};


const filtered = FilterData.filter((item) =>

  item.name.toLowerCase().includes(searchitem.toLowerCase())
);

const AddToCart = async (item) => {

  console.log("Button Clicked"); // 1

  const username = localStorage.getItem("username");

  if (!username) {
    navigate("/loginpage");
    return;
  }
else{
    

  try {

    const res = await axios.post(
      "http://localhost:3000/api/addtocart",
     {
    username,
    productId: item.id,
    productName: item.name,      
    productImage: item.image,    
    price: item.price,
    quantity: 1
  }
    );

    console.log(res.data); // 3
 navigate("/cart"); 
  } catch (err) {

    console.log(err); // 4

  }}

};








console.log("order........................",order);











  return (
   
   <div className="container-fluid px-4" style={{ marginTop: "90px" }}>

    {/* Hero Section */}
    {/* <div
      className="rounded-4 overflow-hidden mb-5"
      style={{
        // height: "450px",
        // backgroundImage:
        //   "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="h-100 d-flex flex-column justify-content-center"
        style={{
          paddingLeft: "70px",
          background: "rgba(0,0,0,0.4)",
          color: "white",
        }}
      >
        <h1
          className="fw-bold"
          style={{
            fontSize: "4rem",
            maxWidth: "500px",
          }}
        >
          Your Walls,
          <br />
          Our Canvas
        </h1>

        <p className="fs-5 mt-3">
          Premium Paint Solutions For Every Space
        </p>

        <button
          className="btn btn-warning mt-3"
          style={{
            width: "180px",
            fontWeight: "bold",
          }}
        >
          Explore Products
        </button>
      </div>
    </div> */}

    {/* Category Buttons */}
    <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
      <button
  className="btn rounded-pill px-4 fw-semibold p-2"
  style={{
    background: "#22003f",
    color: "white",
    border: "1px solid rgba(255,215,0,0.3)",
    boxShadow: "0 4px 12px rgba(255,215,0,0.15)",
  }}
  onClick={() => handleFilter("All")}
>
  All
</button>
      <button
        className="btn rounded-pill px-4 text-white"
        style={{ background: "#22003f" }}
        onClick={() => handleFilter("Interior Paint")}
      >
        Interior Paint
      </button>

      <button
        className="btn rounded-pill px-4 text-white"
        style={{ background: "#2b004f" }}
        onClick={() => handleFilter("Exterior Paint")}
      >
        Exterior Paint
      </button>

      <button
        className="btn rounded-pill px-4 text-white"
        style={{ background: "#2b004f" }}
        onClick={() => handleFilter("Enamel")}
      >
        Enamel
      </button>

      <button
        className="btn rounded-pill px-4 text-white"
        style={{ background: "#2b004f" }}
        onClick={() => handleFilter("Waterproofing")}
      >
        Waterproofing
      </button>

    </div>

    {/* Products */}
    <div className="row g-4">

      {filtered.map((item) => (
        <div
          className="col-lg-3 col-md-4 col-sm-6"
          key={item.id}
        >
          <div
            className="card border-0 shadow h-100"
            style={{
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <Link
              to={`/inventory/${item.id}`}
              className="text-decoration-none"
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  height: "250px",
                  background: "#f8f9fa",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    maxHeight: "200px",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </Link>

            <div className="card-body text-center p-4">

              <h5
                className="fw-bold"
                style={{
                  minHeight: "60px",
                }}
              >
                {item.name}
              </h5>

              <div className="d-flex justify-content-between mb-2">

                <span className="text-decoration-line-through text-muted">
                  ₹{item.mrp}
                </span>

                <span className="fw-bold fs-5"
                //  style={{color:"#2b004f"}}
                >
                  ₹{item.price}
                </span>

              </div>

              <p className="text-muted">
                {item.category}
              </p>

              <button
                className="btn w-100 text-white"
                style={{
                background: "#2b004f",
                  borderRadius: "12px",
                }}
                onClick={() => AddToCart(item)}
              >
                Add To Cart
              </button>

            </div>
          </div>
        </div>
      ))}

    </div>

  </div>
  );
};

export default Inventory;



