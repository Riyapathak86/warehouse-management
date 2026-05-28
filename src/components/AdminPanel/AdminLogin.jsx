  import React from 'react'
  import axios from "axios";
  import { useContext } from 'react';
  import Context from '../context/Context';
import { NavLink } from 'react-router';
import { useNavigate } from 'react-router';
  const AdminLogin = () => {
      const navigate = useNavigate();
    const {email,setemail,
  password,setpassword ,  name, setname}=useContext(Context)
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const res=await
      axios.post("http://localHost:3000/api/register",{
        name,email,password
      })
        console.log(res.data);
    }   
  catch(error){
    console.log(error)
  }
  setemail("");
  setpassword("");
  setname("");
  navigate("/loginpage")
  }
    return (
      <div className="vh-100 vw-100 d-flex flex-column justify-content-center align-items-center">
        
        <h3 className=" mb-4  Adminpanelheading">Register page</h3>

        <div className="p-4 shadow rounded bg-light  Adminpanel" style={{ width: "350px" }}>
          

            <div className="mb-3">

            <label className="form-label">USER NAME</label>
            <input 
              type="email" 
              className="form-control border border-dark" 
              placeholder="user name" 
              value={name}
              onChange={(e)=>setname(e.target.value)}
            />
          </div>
          <div className="mb-3">

            <label className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control border border-dark" 
              placeholder="Email" 
              value={email}
              onChange={(e)=>setemail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>11
            <input 
              type="password" 
              className="form-control border border-dark"
              placeholder="Password" 
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
            />
            <small className="text-muted">
              Must be 8-20 characters long.
            </small>
          </div>
  {/* <button className='text-center' onClick={handleSubmit}>clk me</button> */}
<div className="text-center">

  <button
    type="button"
    className="btn btn-light border border-black"
    onClick={handleSubmit}
  >
    Register
  </button>
<NavLink className="text-decoration-none text-dark border border-black m-2 p-2 rounded" to="/loginpage">Login</NavLink>
</div> 
        
        
        </div>

      </div>
    )
  }

  export default AdminLogin 