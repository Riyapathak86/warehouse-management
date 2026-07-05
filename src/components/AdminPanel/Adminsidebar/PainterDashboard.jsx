import React, { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";
import axios from "axios";

const PainterDashboard = () => {

  const { painter, setpainter, value, setvalue } =
    useContext(Context);

  const [painterlist, setpainterlist] = useState([]);
  const [selectedPainter, setSelectedPainter] = useState(null);

  const [siteName, setSiteName] = useState("");
  const [profit, setProfit] = useState("");

  const getpainters = async () => {
    try {

      const res = await axios.get(
        "http://localhost:3000/allpainters"
      );
  console.log("Updated Data:", res.data);

      setpainterlist(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getpainters();
  }, []);

  const addpainter = async () => {

    try {

      await axios.post(
        "http://localhost:3000/addpainter",
        {
          painter,
          value
        }
      );
await getpainters();
      setpainter("");
      setvalue("");

      // getpainters();

    } catch (err) {
      console.log(err);
    }

  };

const addSite = async () => {

  try {

    const data = {
      painterId: selectedPainter.id,
      siteName,
      profit
    };

    console.log(data);

    await axios.post(
      "http://localhost:3000/addsite",
      {
        painterId: selectedPainter.id,
        siteName,
        profit
      }
    );
 await getpainters(); 
    setSiteName("");
    setProfit("");

  } catch (err) {

    console.log(err);

  }

};

  return (
    <div className="container py-5">

      <div
        className="card shadow border-0 mx-auto p-4"
        style={{
          maxWidth: "800px",
          borderRadius: "16px"
        }}
      >

        <h2 className="text-center fw-bold mb-4">
          🎨 Painter Dashboard
        </h2>

        {/* Painter List */}

        <h4 className="mb-3">
          All Painters
        </h4>

        <div className="mb-4">

          {painterlist.map((item, index) => (

            <div
              key={item.id}
              className="d-flex justify-content-between align-items-center border-bottom py-2"
            >

              <span>
                {index + 1}
              </span>

              <button
                className="btn btn-link text-decoration-none fw-bold"
                style={{color:"#2b0048"}}
                onClick={() =>
                  setSelectedPainter(item)
                }
              >
                {item.name}
              </button>

              <span>
                ₹{item.total_profit}
              </span>

            </div>

          ))}

        </div>

        {/* Selected Painter */}

        {selectedPainter && (

          <div
            className="card p-3 mb-4"
            style={{
              background: "#f8f9fa"
            }}
          >

            <h4>
              Selected Painter :
              {" "}
              <span className="text-primary">
                {selectedPainter.name}
              </span>
            </h4>

            <p className="mb-0">
              Current Profit :
              {" "}
              ₹{selectedPainter.total_profit}
            </p>

          </div>

        )}

        {/* Add Site Form */}

        {selectedPainter && (

          <div className="card p-3 mb-4">

            <h4 className="mb-3">
              Add Site For :
              {" "}
              {selectedPainter.name}
            </h4>

            <div className="row">

              <div className="col-md-6">

                <input
                  type="text"
                  className="form-control"
                  placeholder="Site Name"
                  value={siteName}
                  onChange={(e) =>
                    setSiteName(e.target.value)
                  }
                />

              </div>

              <div className="col-md-6">

                <input
                  type="number"
                  className="form-control"
                  placeholder="Profit"
                  value={profit}
                  onChange={(e) =>
                    setProfit(e.target.value)
                  }
                />

              </div>

            </div>

            <button
              className="btn btn-success mt-3"
              onClick={addSite}
            >
              Add Site
            </button>

          </div>

        )}

        {/* Add Painter */}

        <h4 className="mb-3">
          Add New Painter
        </h4>

        <div className="row">

          <div className="col-md-6 mb-3">

            <input
              type="text"
              className="form-control"
              placeholder="Painter Name"
              value={painter}
              onChange={(e) =>
                setpainter(e.target.value)
              }
            />

          </div>

          <div className="col-md-6 mb-3">

            <input
              type="number"
              className="form-control"
              placeholder="Initial Profit"
              value={value}
              onChange={(e) =>
                setvalue(e.target.value)
              }
            />

          </div>

        </div>

        <button
          className="btn btn-primary w-100"
          style={{background:"#2b0048"}}
          onClick={addpainter}
        >
          Add Painter
        </button>

      </div>

    </div>
  );
};

export default PainterDashboard; 