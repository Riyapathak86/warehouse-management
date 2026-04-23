import React from 'react'
import { Link } from 'react-router'
const Card = ({item}) => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      
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

              <p className="card-text text-muted">{item.category}</p>

              <button className="btn btn-primary w-100">
                Add to Cart
              </button>
            </div> </div>
         </div>
  )
}

export default Card