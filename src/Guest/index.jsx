import axios from 'axios';
import React,{useContext, useState} from 'react'
import { GlobalContext } from '../Context/context';
import Cookies from "js-cookie";

export default function Guest() {

    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {state,dispatch} =useContext(GlobalContext)

     const LoginUser = (e) =>{
         e.preventDefault();
         const payload = {email, password}
         console.log(payload)
         axios.post('http://localhost:3456/api/login' ,payload)
         .then((json)=> {

          Cookies.set('token',json.data.token)
          dispatch({
            type: "LOGIN",
            token: json.data.token
           })
         })
         .catch(err => console.log( err.message))
       }

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '100%' }}>
        <div>
          <section >
            <div className="container-fluid h-custom">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="img-fluid"
                    alt="Sample image"
                  />
                </div>
                <div >
                  <form onSubmit={LoginUser}>
                   
                    {/* Email input */}
                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control form-control-lg"
                        placeholder="Enter a valid email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control form-control-lg"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      {/* Checkbox */}
                      <div className="form-check mb-0">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example3"
                        />
                        <label className="form-check-label" htmlFor="form2Example3">
                          Remember me
                        </label>
                      </div>
                      <a href="#!" className="text-body">
                        Forgot password?
                      </a>
                    </div>
                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                      >
                        Login
                      </button>
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Don't have an account?{" "}
                        <a href="#!" className="link-danger">
                          Register
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
