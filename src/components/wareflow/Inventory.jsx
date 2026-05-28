import React from "react";
// import Data from "./Data.jsx";
import { useContext,useState } from "react";
import Context from "../context/Context.jsx";
import { Link, useNavigate } from "react-router-dom";
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

// const AddToCart=(e)=>{
// setorder(e)
// // alert("plz login/register")
//     navigate("loginpage")
// }


const AddToCart = (item) => {

  setorder(item);

  // alert("Please Login First");

  navigate("/loginpage");
};








console.log("order........................",order);











  return (
    <div style={{marginLeft:"100px", backround:"red"}} >
      <div className="w-100">

    <div className="bg-light container p-4 container" style={{ marginTop: "1px" }}>
      
          <div className="d-flex justify-content-between align-items-center flex-wrap mb-4 gap-3">

        <button type="button" className="btn btn-outline-info"
        onClick={()=> handleFilter("All")}
        >
          <i className="bi bi-house-door-fill me-2"></i>
   
         All   
        </button>
        <button type="button" className="btn btn-outline-info"
        onClick={()=>handleFilter("Interior Paint")}
        >
          <i className="bi bi-house-door-fill me-2"></i>
   
          Interior Paint
        </button>

        <button type="button" className="btn btn-outline-info"
        onClick={()=>handleFilter("Exterior Paint")}>
          <i className="bi bi-building me-2"></i>
          Exterior Paint
        </button>

        <button className="btn btn-outline-info"
        onClick={()=>handleFilter("Enamel")}>
          
          <i className="bi bi-palette-fill"></i>
          Enamel Paint
        </button>

        <button className="btn btn-outline-info"
        onClick={()=>handleFilter("Waterproofing")}>
          <i className="bi bi-droplet-fill"></i>
          Waterproofing
        </button>

      </div>

      <div className="d-flex flex-wrap justify-content-center gap-4">
        {filtered .map((item) => (
          <div
            className="card shadow-sm"
            style={{ width: "15rem" }}
            key={item.id}
          >
             <Link 
          to={`/inventory/${item.id}`}
          className="p-5"
        >
          <img
            src={item.image}
      
          
            className="card-img-top"
            alt={item.name}
            style={{ height: "200px", objectFit: "cover" }}
          />
        </Link>
        
        

            <div className="card-body text-center">
              <h4 className="card-title">{item.name}</h4>

              <div className="d-flex justify-content-between">
                <h6>MRP - ₹{item.mrp}</h6>
                <h6 className="text-success">₹{item.price}</h6>
              </div>

              <p className="card-text text-muted">{item.category}</p>

              <button className="btn btn-primary w-100"
              onClick={()=>AddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
</div>
    </div>
    </div>
  );
};

export default Inventory;



