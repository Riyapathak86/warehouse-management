import React from "react";
import PainterData from "./wareflow/PainterData";
const Painter = () => {
  
  return (
    <div
      className="container py-5"
      style={{
        marginTop: "100px",
      }}
    >
      <div className="row g-4">

  {PainterData.map((item,index)=>(

    <div className="col-md-6 col-lg-4" key={index}>

      <div
        className="card p-3 shadow-sm h-100"
        style={{
          borderRadius: "15px"
        }}
      >

        <span
          className="badge mb-3"
          style={{
            background: "#6f42c1",
            width: "fit-content"
          }}
        >
          ✔ Verified
        </span>

        <div className="row align-items-center">

          <div className="col-4 text-center">
            <img
              src={item.image}
              alt=""
              className="rounded-circle"
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover"
              }}
            />
          </div>

          <div className="col-8">

            <h5 className="fw-bold mb-1">
              {item.name}
            </h5>

            <p
              className="mb-1"
              style={{
                color: "#6f42c1",
                fontSize: "14px"
              }}
            >
              {item.specialization}
            </p>

            <p className="mb-1">
              ⭐⭐⭐⭐⭐ ({item.rating})
            </p>

            <p className="mb-1">
              📞 {item.phone}
            </p>

            <p className="mb-1">
              📍 {item.city}
            </p>

            <p className="mb-0">
              💼 {item.experience}
            </p>

          </div>

        </div>

      </div>

    </div>

  ))}

</div>
    
    
        </div>


   
  );
};

export default Painter;