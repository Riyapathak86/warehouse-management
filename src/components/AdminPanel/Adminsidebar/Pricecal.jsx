

import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../../context/Context';

const Pricecal = () => {
  const { id } = useParams();
  const { InventoryData } = useContext(Context); 

  const product = InventoryData.find(
    (item) => item.id === Number(id)
  );

 
  if (!product) {
    return <h2>Loading...</h2>;
  }

  const [discount, setDiscount] = useState("");

  const discountValue = Number(discount) || 0;

  const finalPrice =
    product.price - (product.price * discountValue / 100);

  return (

    <div className="container mt-6 text-center bg-light rounded"
      style={{ width: "20rem", border: "1px solid #0D9488" }}>

      <h4>{product.name}</h4>

      <img
        src={product.image}
        alt={product.name}
        style={{ height: "150px", width: "150px" }}
      />

      <h5 className="mt-3">Price: ₹{product.price}</h5>

      <input
        type="number"
        placeholder="Enter discount %"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
        className="form-control mt-3 mb-3"
        style={{ maxWidth: "200px", margin: "auto" }}
      />

      <h4 className="text-success">
        After Discount: ₹{Math.max(finalPrice, 0)}
      </h4>

    </div>
  );
};

export default Pricecal; 