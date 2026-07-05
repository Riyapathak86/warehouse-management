import React from 'react';
import Context from '../../context/Context';
import { useContext } from 'react';
const TotalStock = () => {
  const {InventoryData ,FilterData, setfilterData  }=useContext(Context);

const searchFun=(category)=>{
  if(category==="All"){
    setfilterData (InventoryData)
  }
  else{
const filtered=InventoryData.filter((item)=>item.category===category)
setfilterData(filtered)
}

  }


  return (
    <div className="container mt-4">

    
      <div className="bg-light p-4" style={{ marginTop: "60px"  }}>
        <div className="d-flex justify-content-between flex-wrap mb-4 gap-3" style={{color:" rgba(75, 0, 130, 0.25);"}}>

          <button className="btn btn-outline-info theme-colour"onClick={()=>searchFun("All")}>All</button>
          <button className="btn btn-outline-info theme-colour" onClick={()=>searchFun("Interior Paint")}   style={{
    borderColor: "#0D9488",
    color: "#0D9488"
  }}>Interior Paint</button>
          <button className="btn btn-outline-info theme-colour" onClick={()=>searchFun("Exterior Paint")}>Exterior Paint</button>
          <button className="btn btn-outline-info theme-colour" onClick={()=>searchFun("Enamel")}>Enamel Paint</button>
          <button className="btn btn-outline-info theme-colour" onClick={()=>searchFun("Waterproofing")}>Waterproofing</button>

        </div>
      </div>


      <div
  className="container"
  style={{ borderRadius: "12px" }}
>
        <h2 className="w-100 text-center">Total Stock</h2>

        <h4 className="text-success w-100 text-center theme">
          Total Units: 120
        </h4>
       <div className="row g-3">
  {FilterData.map((item) => (
    <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
      <div
        className="card h-100 text-center p-3"
        style={{
          border: "2px solid #2b0048",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          className="mx-auto d-block"
          style={{
            height: "100px",
            width: "100px",
            objectFit: "contain",
          }}
        />

        <div className="mt-3">
          <h6 className="fw-bold mb-2">{item.name}</h6>
          <p className="mb-0 text-muted">
            Stock: <b>{item.stock}</b>
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
    </div>
  );
};

export default TotalStock;