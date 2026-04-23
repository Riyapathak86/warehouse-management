import React from 'react'

const AdminLogin = () => {
  return (
    <div className="vh-100 vw-100 d-flex flex-column justify-content-center align-items-center">
      
      <h3 className=" mb-4  Adminpanelheading">Admin Login</h3>

      <div className="p-4 shadow rounded bg-light  Adminpanel" style={{ width: "350px" }}>
        
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control border border-dark" 
            placeholder="Email" 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control border border-dark"
            placeholder="Password" 
          />
          <small className="text-muted">
            Must be 8-20 characters long.
          </small>
        </div>

      </div>

    </div>
  )
}

export default AdminLogin 