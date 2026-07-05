import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {

  const [cart, setCart] = useState([]);
const [fullName, setFullName] = useState("");
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");
const [city, setCity] = useState("");
const [pincode, setPincode] = useState("");
const [showForm, setShowForm] = useState(false);
  const getCart = async () => {

    const username = localStorage.getItem("username");

    const res = await axios.get(
      `http://localhost:3000/api/cart/${username}`
    );

    console.log(res.data);

    setCart(res.data);

  };

  useEffect(() => {
    getCart();
  }, []);

  let totalPrice = 0;

  for (let item of cart) {
    totalPrice += item.price * item.quantity;
  }


const placeOrder = async () => {

 const username = localStorage.getItem("username");
console.log({
  username,
  fullName,
  phone,
  address,
  city,
  pincode
});
  try {

    const res = await axios.post(
      "http://localhost:3000/api/placeorder",
      {
        username,
          fullName,
  phone,
  address,
  city,
  pincode
      }
    );

    console.log(res.data);

   getCart();  

  } catch(err){
    console.log(err);
  }
setFullName("");
setPhone("");
setAddress("");
setCity("");
setPincode("");
}

const removeItem = async (productId) => {

  const username = localStorage.getItem("username");

  try {

    const res = await axios.delete(
      "http://localhost:3000/api/removefromcart",
      {
        data: {
          username,
          productId
        }
      }
    );

    console.log(res.data);

    getCart();

  } catch (err) {

    console.log(err);

  }

};









return (
  <div className="container mt-5 pt-5">

    <h2 className="text-center mb-5 fw-bold">🛒 Your Cart</h2>

    <div className="row">

      {cart.map((item) => (

        <div className="col-md-4 mb-4" key={item.id}>

          <div className="card shadow border-0 h-100">

            <div className="text-center mt-3">
              <img
                src={item.product_image}
                alt={item.product_name}
                style={{
                  width: "170px",
                  height: "170px",
                  objectFit: "contain"
                }}
              />
            </div>

            <div className="card-body text-center">

              <h5 className="fw-bold">
                {item.product_name}
              </h5>

              <h4 className="text-success">
                ₹ {item.price}
              </h4>

              <p className="mb-3">
                Quantity : <b>{item.quantity}</b>
              </p>

              <button className="btn btn-outline-danger w-100"
               onClick={() => removeItem(item.product_id)}
              >
                Remove
              </button>

            </div>

          </div>

        </div>

      ))}

    </div>

    <div className="card shadow p-4 mt-3">

      <div className="d-flex justify-content-between align-items-center">

        <h3 className="m-0">
          Total Bill
        </h3>
</div>
        <div className="card shadow p-4 mt-3">

  <div className="d-flex justify-content-between align-items-center">

    <h3 className="m-0">Total Bill</h3>

    <h2 className="text-success m-0">
      ₹ {totalPrice}
    </h2>

  </div>

  <button
    className="btn btn-outline-primary w-100 mt-4"
    onClick={() => setShowForm(!showForm)}
  >
    {showForm
      ? "▲ Hide Delivery Information"
      : "▼ Fill Delivery Information"}
  </button>

  {showForm && (

    <div className="card border-0 shadow-sm mt-4 p-4">

      <h4 className="mb-3">Delivery Address</h4>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <textarea
        className="form-control mb-3"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <input
        type="text"
        className="form-control mb-3"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />

      <button
        className="btn btn-success w-100"
        onClick={placeOrder}
      >
        🛒 Confirm Order
      </button>

    </div>

  )}

</div>
    </div>

  </div>
);






  
 
};

export default Cart;