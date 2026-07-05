import React from "react";
import { useContext } from "react";
import Context from "../../context/Context";
import axios from "axios";
const AddProduct = () => {

  const {productname, setproductname,
category, setcategory,
mrp, setmrp,
stockqty, setstockqty,
image, setimage,
tagline, settagline,
description, setdescription,
features, setfeatures,price, setprice}=useContext(Context)


const submit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/addproduct`,
      {
        productname,
        category,
        stockqty,
        mrp,
        image,
        tagline,
        description,
        features,
      }
    );

    console.log(res.data);

    console.log("datas");
    console.log(
      productname,
      category,
      stockqty,
      image,
      tagline,
      description,
      features
    );

    setproductname("");
    setcategory("");
    setprice("");
    setmrp("");
    setstockqty("");
    setimage("");
    settagline("");
    setdescription("");
    setfeatures("");

    alert("Product Added Successfully");
  } catch (err) {
    console.log(err);
  }
};


  return (
    <div className="container py-5 d-flex justify-content-center">
      <div
        className="card shadow-lg border-0 p-4"
        style={{
          width: "100%",
          maxWidth: "700px",
          borderRadius: "20px",
        }}
      >
        <h2 className="text-center fw-bold mb-4">
          Add New Product
        </h2>

        <form onSubmit={submit}>
          {/* Product Name */}
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Product Name
            </label>

            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter product name"
              value={productname}
              onChange={(e)=>setproductname(e.target.value)}
              
            />
            <h4>{productname}</h4>
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Category
            </label>

            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter category"
              value={category}
              onChange={(e)=>setcategory(e.target.value)}
            />
          </div>

          {/* Price Row */}
          <div className="row">
            {/* MRP */}
            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                MRP
              </label>

              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="₹ Enter MRP"
                value={mrp}
                onChange={(e)=>setmrp(e.target.value)}
              />
            </div>

            {/* Stock */}
            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Stock Quantity
              </label>

              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="Enter stock quantity"
                value={stockqty}
                onChange={(e)=>setstockqty(e.target.value)}
              />
            </div>
          </div>

          {/* Image URL */}
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Product Image URL
            </label>

            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Paste image URL"
              value={image}
              onChange={(e)=>setimage(e.target.value)}
            />
          </div>

          {/* Tagline */}
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Product Tagline
            </label>

            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter product tagline"
              value={tagline}
onChange={(e)=>settagline(e.target.value)}
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Description
            </label>

            <textarea
              className="form-control"
              rows="5"
              placeholder="Write product description..."
              value={description}
              onChange={(e)=>setdescription(e.target.value)}
            ></textarea>
          </div>

          {/* Features */}
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Features
            </label>

            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Features"
              value={features}
onChange={(e)=>setfeatures(e.target.value)}
            />

  
          </div>

          {/* Button */}
          <button
            type="submit"
            className="btn btn-dark w-100 py-3 fw-bold"
            style={{
              borderRadius: "12px",
              fontSize: "18px",
            }}
            // onClick={submit}
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;