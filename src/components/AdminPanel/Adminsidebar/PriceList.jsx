import React, { useContext, useState } from 'react';
import Context from '../../context/Context';
import { Link } from 'react-router-dom';

const PriceList = () => {
  const { InventoryData } = useContext(Context);

  const [search, setSearch] = useState("");

 
  const filteredData = InventoryData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control"
          style={{ border: "2px solid #0D9488", maxWidth: "300px" }}
        />
      </div>


      <div className="container d-flex flex-wrap gap-4 justify-content-center">

        {filteredData.length > 0 ? (

          filteredData.map((item, index) => (
            <div
              className="card"
              style={{ width: "15rem", border: "2px solid #0D9488" }}
              key={index}
            >

              <div className="text-center">

            
                <Link to={`/admindash/pricecal/${item.id}`} className="p-3">

                  <img
                    src={item.image}
                    className="card-img-top img-fluid"
                    alt={item.name}
                    style={{
                      height: "150px",
                      width: "150px",
                      objectFit: "cover"
                    }}
                  />

                </Link>

              </div>

              <div className="card-body text-center">
                <h6>{item.name}</h6>
                <h6>Price ₹{item.price}</h6>
              </div>

            </div>
          ))

        ) : (
   
          <h4 className="text-center text-danger">No product found</h4>
        )}

      </div>
    </>
  );
};

export default PriceList;