import React, { useState,useContext } from 'react'
import { UserContext } from "../App";

import { NavLink, useHistory } from "react-router-dom";

const Login = () => {

  const {state,dispatch} = useContext(UserContext);

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch('/signin', {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });

    const data = res.json();

    if(res.status === 400 || !data)
    {
      window.alert("Invalid Credentials !! ");
    }
    else
    {
      dispatch({type:"USER",payload:true})
      window.alert("Login Successful ");
      history.push("/Profile");
    }
  }

  return (
    <section className="gradient-custom">
      <div class="container py-5">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" >
              <div class="card-body p-5 text-center">

                <h3 class="mb-5">SIGN IN</h3>
                <form method="POST">
                  <div class="form-outline mb-4">
                    <input type="email" id="typeEmailX-2" class="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label class="form-label" for="typeEmailX-2" >Email</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="typePasswordX-2" class="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label class="form-label" for="typePasswordX-2">Password</label>
                  </div>
                  <div class="form-check d-flex justify-content-start mb-4">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label class="form-check-label mx-2" for="form1Example3"> Remember password </label>
                  </div>

                  <button class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" type="submit" onClick={loginUser}>Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login