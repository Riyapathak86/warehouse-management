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

    
      <div className="bg-light p-4" style={{ marginTop: "60px" }}>
        <div className="d-flex justify-content-between flex-wrap mb-4 gap-3">

          <button className="btn btn-outline-info"onClick={()=>searchFun("All")}>All</button>
          <button className="btn btn-outline-info" onClick={()=>searchFun("Interior Paint")}>Interior Paint</button>
          <button className="btn btn-outline-info" onClick={()=>searchFun("Exterior Paint")}>Exterior Paint</button>
          <button className="btn btn-outline-info" onClick={()=>searchFun("Enamel")}>Enamel Paint</button>
          <button className="btn btn-outline-info" onClick={()=>searchFun("Waterproofing")}>Waterproofing</button>

        </div>
      </div>


      <div
        className="container d-flex flex-wrap justify-content-center gap-4"
        style={{ maxWidth: "500px", borderRadius: "12px" }}
      >

        <h2 className="w-100 text-center">Total Stock</h2>

        <h4 className="text-success w-100 text-center">
          Total Units: 120
        </h4>
        <div class="row">
{FilterData.map((item)=>(
        <div
        key={item.id}
          className="col-md-4 mb-3 mx-3"
          style={{
            border: "2px solid #0D9488",
            borderRadius: "12px",
            background: "#fff"
            
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{
              height: "80px",
              width: "80px",
              objectFit: "cover",
              borderRadius: "10px"
            }}
          />

          <div className="flex-grow-1">
            <b>{item.name}</b>
            <div className="text-muted">Stock: {item.stock}</div>
          </div>
        </div>

       

   
))
}
</div>
    </div>
    </div>
  );
};

export default TotalStock;