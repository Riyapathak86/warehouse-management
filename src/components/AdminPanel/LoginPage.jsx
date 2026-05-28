import React, { useContext, useState } from 'react'
import Context from '../context/Context' 
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
const LoginPage = () => {

  const {
    email,
    setemail,
    password,
    setpassword
  } = useContext(Context)

  const [msg, setmsg] = useState("")

  const navigate = useNavigate();


const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const res = await axios.post(
      "http://localhost:3000/api/login",
      {
        email,
        password
      }
    )

    console.log(res.data);

    setmsg(res.data.message);

    // LOGIN SUCCESS
    if (res.data.success) {

      navigate("/");

    }

  }
  catch (error) {

    console.log(error)

  }

  setemail("");
  setpassword("");

}






  return (

    <div>

      <div className="vh-100 vw-100 d-flex flex-column justify-content-center align-items-center">

        <h3 className="mb-4 Adminpanelheading">
          Login Page
        </h3>

        <div
          className="p-4 shadow rounded bg-light Adminpanel"
          style={{ width: "350px" }}
        >

          <div className="mb-3">

            <label className="form-label">
              Email address
            </label>

            <input
              type="email"
              className="form-control border border-dark"
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control border border-dark"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />

            <small className="text-muted">
              Must be 8-20 characters long.
            </small>

          </div>

          <div className="text-center">

            <button
              type="button"
              className="btn btn-light border border-black"
              onClick={handleSubmit}
            >
              Login
            </button>
<Link  className="text-decoration-none text-dark border border-black m-2 p-2 rounded" to="/adminlogin">registered now</Link>
          </div>

        </div>

        <h6>{msg}</h6>

      </div>

    </div>

  )
}

export default LoginPage