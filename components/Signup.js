import React, { useState } from 'react'
import web from '../images/image2.jpg';

import { NavLink, useHistory } from "react-router-dom";


const Signup = () => {

    const history = useHistory();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        department: "",
        password: "",
        cpassword: ""
    });

    let name,value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ... user,[name]:value});

    }
    
    const PostData = async (e) => {
        e.preventDefault();

        const {name,email,phone,department,password,cpassword} = user;

        const res = await fetch("/register",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name,email,phone,department,password,cpassword
            })
        });

        const data = await res.json();

        if(res.status === 422 || !res)
        {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }else {
            window.alert("Successful Registration");
            console.log("Successful Registration");

            history.push('/Login');
        }

    }

    return (
        <>
            <section class="bg-image gradient-custom-3" >
                <div class="mask d-flex align-items-center ">
                    <div class="container-fluid my-5">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div class="card">
                                    <div class="card-body p-5">
                                        <h2 class="text-uppercase text-center mb-5">Create an account</h2>

                                        <form method="POST">

                                            <div class="form-outline mb-2">
                                                <input type="text" id="form3Example1cg" class="form-control form-control-lg" name="name" value={user.fullname} onChange={handleInputs}/>
                                                <label class="form-label" for="form3Example1cg">Your Name</label>
                                            </div>

                                            <div class="form-outline mb-2">
                                                <input type="email" id="form3Example3cg" class="form-control form-control-lg" name="email" value={user.email} onChange={handleInputs} />
                                                <label class="form-label" for="form3Example3cg">Your Email</label>
                                            </div>

                                            <div class="form-outline mb-2">
                                                <input type="number" id="form3Example3cg" class="form-control form-control-lg" name="phone" value={user.phone} onChange={handleInputs}/>
                                                <label class="form-label" for="form3Example3cg">Your Phone Number</label>
                                            </div>

                                            <div class="form-outline mb-2">
                                                <input type="text" id="form3Example1cg" class="form-control form-control-lg" name="department" value={user.dept} onChange={handleInputs}/>
                                                <label class="form-label" for="form3Example1cg">Your Department</label>
                                            </div>

                                            <div class="form-outline mb-2">
                                                <input type="password" id="form3Example4cg" class="form-control form-control-lg" name="password" value={user.pass} onChange={handleInputs}/>
                                                <label class="form-label" for="form3Example4cg">Password</label>
                                            </div>

                                            <div class="form-outline mb-2">
                                                <input type="password" id="form3Example4cdg" class="form-control form-control-lg" name="cpassword" value={user.cpass} onChange={handleInputs}/>
                                                <label class="form-label" for="form3Example4cdg">Confirm password</label>
                                            </div>

                                            <div class="form-check d-flex justify-content-center mb-5">
                                                <input
                                                    class="form-check-input me-2"
                                                    type="checkbox"
                                                    value=""
                                                    id="form2Example3cg"
                                                />
                                                <label class="form-check-label" for="form2Example3g">
                                                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                                                </label>
                                            </div>

                                            <div class="d-flex justify-content-center">
                                                <button type="submit" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={PostData}>Register</button>
                                            </div>

                                            <p class="text-center text-muted mt-5 mb-0">Have already an account? <NavLink to='/Login' class="fw-bold text-body"><u>Login here</u></NavLink></p>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup