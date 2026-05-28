import React, { useContext } from "react";
import Context from "../context/Context.jsx";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Detailspage = () => {
  const { id } = useParams();
  const { InventoryData } = useContext(Context);

  const product = InventoryData.find(
    (item) => item.id === Number(id)
  );
  if (!product) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  const RelatedItems = InventoryData.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );
const addToCart=()=>{
  
}




  return (
    <div className="container mt-5">
      <div className="row shadow-lg p-4 rounded bg-white align-items-center">

        {/* Image */}
        <div
          className="col-md-5 text-center"
          style={{ background: "#f8f9fa" }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
            style={{ height: "300px", objectFit: "cover" }}
          />
        </div>

        {/* Details */}
        <div className="col-md-7">
          <h2 className="fw-bold">{product.name}</h2>
          <p className="text-muted">{product.category}</p>

          <p className="text-primary fw-semibold">
            {product.tagline}
          </p>

          <div className="d-flex align-items-center gap-3 my-3">
            <h5 className="text-muted text-decoration-line-through">
              ₹{product.mrp}
            </h5>
            <h4 className="text-success fw-bold">
              ₹{product.price}
            </h4>
            <span className="badge bg-danger">
              {Math.round(
                ((product.mrp - product.price) / product.mrp) * 100
              )}
              % OFF
            </span>
          </div>

          <p>
            <strong>Stock:</strong>{" "}
            <span
              className={
                product.stock < 20
                  ? "text-danger"
                  : "text-success"
              }
            >
              {product.stock} Available
            </span>
          </p>

          <div className="mt-3">
            <h5>Description</h5>
            <p className="text-muted">{product.description}</p>
          </div>

          <div className="mt-3">
            <h5>Key Features</h5>
          </div>

          <div className="mt-4 d-flex gap-3">
            <button className="btn btn-primary px-4"
            
            onClick={()=>{
              addToCart(item)
            }}
            >
              Add to Cart
            </button>

            <button className="btn btn-outline-dark px-4">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 Related Products */}
      <h3 className="mt-5 text-center">Related Products</h3>

      <div className="d-flex flex-wrap justify-content-center gap-4 mt-3">
        {RelatedItems.map((item) => (
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
              <h5 className="card-title">{item.name}</h5>

              <div className="d-flex justify-content-between">
                <h6>MRP - ₹{item.mrp}</h6>
                <h6 className="text-success">₹{item.price}</h6>
              </div>

              <p className="text-muted">{item.category}</p>

              <button className="btn btn-primary w-100">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detailspage;


