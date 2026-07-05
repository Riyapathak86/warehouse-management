import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {

  const [orders, setOrders] = useState([]);

  const getOrders = async () => {

    try {

      const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/orders`
      );

      console.log(res.data);

      setOrders(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  useEffect(() => {

    getOrders();

  }, []);

  return (

    <div className="container mt-5">

      <h2 className="text-center fw-bold mb-4">
        Orders
      </h2>

      <div className="row">

        {orders.map((item) => (

          <div className="col-md-6 mb-4" key={item.id}>

            <div className="card shadow border-0 p-3 h-100">

              <h5 className="fw-bold text-primary">
                {item.username}
              </h5>

              <hr />

              <img
                src={item.product_image}
                alt={item.product_name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "contain",
                  margin: "auto"
                }}
              />

              <h5 className="mt-3">
                {item.product_name}
              </h5>

              <p>
                <b>Price :</b> ₹ {item.price}
              </p>

              <p>
                <b>Quantity :</b> {item.quantity}
              </p>

              <hr />

              <p>
                <b>Full Name :</b> {item.full_name}
              </p>

              <p>
                <b>Phone :</b> {item.phone}
              </p>

              <p>
                <b>Address :</b> {item.address}
              </p>

              <p>
                <b>City :</b> {item.city}
              </p>

              <p>
                <b>Pincode :</b> {item.pincode}
              </p>

              <p className="text-muted">
                {new Date(item.order_date).toLocaleString()}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default Orders;