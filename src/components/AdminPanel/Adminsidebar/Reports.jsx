import React from 'react'

function Reports() {
  return (
    <div>Reports
       <div className="container mt-5">

    <div className="row">

      {/* Add Customer */}

      <div className="col-md-4">

        <div className="card shadow p-4">

          <h3 className="mb-4">Add Customer</h3>

          <input
            className="form-control mb-3"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />

          <input
            className="form-control mb-3"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <textarea
            className="form-control mb-3"
            rows="3"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <input
            className="form-control mb-3"
            type="number"
            placeholder="Purchase Amount"
            value={purchase}
            onChange={(e) => setPurchase(e.target.value)}
          />

          <input
            className="form-control mb-3"
            type="number"
            placeholder="Payment Amount"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          />

          <button
            className="btn btn-success w-100"
            onClick={handleSubmit}
          >
            Add Customer
          </button>

        </div>

      </div>

      {/* Customer Report */}

      <div className="col-md-8">

        <div className="card shadow p-4">

          <h3 className="mb-4">Customer Reports</h3>

          <div className="table-responsive">

            <table className="table table-bordered table-hover">

              <thead className="table-dark">

                <tr>

                  <th>Name</th>

                  <th>Phone</th>

                  <th>Purchase</th>

                  <th>Payment</th>

                  <th>Due</th>

                </tr>

              </thead>

              <tbody>

                {customers.length > 0 ? (

                  customers.map((item) => (

                    <tr key={item.id}>

                      <td>{item.customer_name}</td>

                      <td>{item.phone}</td>

                      <td>₹ {item.purchase}</td>

                      <td>₹ {item.payment}</td>

                      <td className="fw-bold text-danger">
                        ₹ {item.due}
                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="5"
                      className="text-center"
                    >
                      No Customer Found
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

  </div>
    </div>
  )
}

export default Reports