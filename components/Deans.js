import React from "react";
import web from '../images/image2.jpg';
import dean1 from '../images/dean1.jfif';
import dean2 from '../images/dean2.jpg';
import dean3 from '../images/dean3.jpg';
import dean4 from '../images/dean4.png';
import dean5 from '../images/dean5.jpg';
import dean6 from '../images/dean6.jpg';

const Deans = () => {
    return (
        <>
            <div className="">
                <div className="my-5">
                    <h1 className="text-center">Deans</h1>
                </div>
                <div className="container mb-5">
                    <div className="row col-10 my-5 mx-auto">
                        <div className="col-md-3  mx-auto">
                            <div className="card">
                                <img src={dean1} className="card-img-top" alt="Hi" />
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">Prof. Vidya Shetty</h5>
                                    <p className="card-text">Dean (Academic)</p>
                                    <a href="https://www.nitk.ac.in/thedeans#" className="btn btn-primary">Check Profile</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mx-auto">
                            <div className="card">
                                <img src={dean2} className="card-img-top" alt="Hi" />
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">Prof. Vijay Desai</h5>
                                    <p className="card-text">Dean (Alumni Affairs and Institutional Relations)</p>
                                    <a href="https://www.nitk.ac.in/thedeans#" className="btn btn-primary">Check Profile</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mx-auto">
                            <div className="card">
                                <img src={dean3} className="card-img-top" alt="Hi" />
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">Dr. Navin Karanth P.</h5>
                                    <p className="card-text">Associate Dean-I (AA&IR)</p>
                                    <a href="https://www.nitk.ac.in/thedeans#" className="btn btn-primary">Check Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* row2 */}
                    <div className="row col-10 my-5 mx-auto">
                        <div className="col-md-3  mx-auto">
                            <div className="card">
                                <img src={dean4} className="card-img-top" alt="Hi" />
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">Prof. M.S. Bhat</h5>
                                    <p className="card-text">Dean (Faculty Welfare)</p>
                                    <a href="https://www.nitk.ac.in/thedeans#" className="btn btn-primary">Check Profile</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mx-auto">
                            <div className="card">
                                <img src={dean5} className="card-img-top" alt="Hi" />
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">Dr. P. Sam Johnson</h5>
                                    <p className="card-text">Associate Dean-I (Faculty Welfare)</p>
                                    <a href="https://www.nitk.ac.in/thedeans#" className="btn btn-primary">Check Profile</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mx-auto">
                            <div className="card">
                                <img src={dean6} className="card-img-top" alt="Hi" />
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">Prof. Harsha Vardhan</h5>
                                    <p className="card-text">Associate Dean-II (Faculty Welfare)</p>
                                    <a href="https://www.nitk.ac.in/thedeans#" className="btn btn-primary">Check Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Deans;