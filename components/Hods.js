import React from "react";
import web from '../images/image2.jpg';
import hod1 from '../images/hod1.jpg';
import hod2 from '../images/hod2.jpeg';
import hod3 from '../images/hod3.jpg';
import hod4 from '../images/hod4.jpg';
import hod5 from '../images/hod5.jpg';
import hod6 from '../images/hod6.jpg';
import { NavLink } from "react-router-dom";

const Hods = () => {
    return (
        <>
            <div className="">
                <div className="my-5">
                    <h1 className="text-center">Heads of Departments</h1>
                </div>
                <div className="container mb-5">
                    <div className="row col-10 my-5 mx-auto">
                        <div className="col-md-3  mx-auto">
                            <div className="card">
                                <img src={hod1} className="card-img-top" alt="Hi" />
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">Dr. B.M.Dodamani</h5>
                                    <p className="card-text">Water Resources & Ocean Engg</p>
                                    <a href="https://www.nitk.ac.in/HoD_HoS#" className="btn btn-primary">Check Profile</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mx-auto">
                            <div className="card">
                                <img src={hod2} className="card-img-top" alt="Hi" />
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">Dr. P. E Jagadishbabu</h5>
                                    <p className="card-text">Chemical Engineering</p>
                                    <a href="https://www.nitk.ac.in/HoD_HoS#" className="btn btn-primary">Check Profile</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mx-auto">
                            <div className="card">
                                <img src={hod3} className="card-img-top" alt="Hi" />
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">Dr. Uday Kumar Dalimba</h5>
                                    <p className="card-text">Chemistry</p>
                                    <a href="https://www.nitk.ac.in/HoD_HoS#" className="btn btn-primary">Check Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* row2 */}
                    <div className="row col-10 my-5 mx-auto">
                        <div className="col-md-3  mx-auto">
                            <div className="card">
                                <img src={hod4} className="card-img-top" alt="Hi" />
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">Dr. B R Jayalekshmi</h5>
                                    <p className="card-text">Civil Engineering</p>
                                    <a href="https://www.nitk.ac.in/HoD_HoS#" className="btn btn-primary">Check Profile</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mx-auto">
                            <div className="card">
                                <img src={hod5} className="card-img-top" alt="Hi" />
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">Dr. Shashidhar G Koolagudi</h5>
                                    <p className="card-text">Computer Science & Engineering</p>
                                    <a href="https://www.nitk.ac.in/HoD_HoS#" className="btn btn-primary">Check Profile</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mx-auto">
                            <div className="card">
                                <img src={hod6} className="card-img-top" alt="Hi" />
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">Dr. Gururaj S Punekar</h5>
                                    <p className="card-text">Electrical & Electronics Engineering</p>
                                    <a href="https://www.nitk.ac.in/HoD_HoS#" className="btn btn-primary">Check Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hods;