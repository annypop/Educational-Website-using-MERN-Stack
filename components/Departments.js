import React from 'react';
import dept1 from '../images/dept1.JPG';
import dept2 from '../images/dept2.JPG';
import dept3 from '../images/dept3.JPG';
import dept4 from '../images/dept4.JPG';
import dept5 from '../images/dept5.JPG';
import dept6 from '../images/dept6.JPG';

const Departments = () => {
    return (
        <>
            <div className="home-bg-institute">
                <h1 id="bottom">Departments and Centers</h1>
            </div>
            <div className="container-fluid">
                <div className="row m-5">
                    <div className="col-md-4  mx-auto">
                        <div className="card">
                            <img src={dept1} className="card-img-top" alt="Hi" />
                            <div className="card-body">
                                <h4 className="card-title font-weight-bold">Water Resources & Ocean Engg</h4>
                                <p className="card-text"></p>
                                <a href="https://appmech.nitk.ac.in/" className="btn btn-primary">Click to Visit</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mx-auto">
                        <div className="card">
                            <img src={dept2} className="card-img-top" alt="Hi" />
                            <div className="card-body">
                                <h4 className="card-title font-weight-bold">Chemical Engineering</h4>
                                <p className="card-text"></p>
                                <a href="https://chemical.nitk.ac.in/" className="btn btn-primary">Click to Visit</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mx-auto">
                        <div className="card">
                            <img src={dept3} className="card-img-top" alt="Hi" />
                            <div className="card-body">
                                <h4 className="card-title font-weight-bold">Chemistry</h4>
                                <p className="card-text"></p>
                                <a href="https://chemistry.nitk.ac.in/" className="btn btn-primary">Click to Visit</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row m-5">
                    <div className="col-md-4  mx-auto">
                        <div className="card">
                            <img src={dept4} className="card-img-top" alt="Hi" />
                            <div className="card-body">
                                <h4 className="card-title font-weight-bold">Civil Engineering</h4>
                                <p className="card-text"></p>
                                <a href="https://civil.nitk.ac.in/" className="btn btn-primary">Click to Visit</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mx-auto">
                        <div className="card">
                            <img src={dept5} className="card-img-top" alt="Hi" />
                            <div className="card-body">
                                <h4 className="card-title font-weight-bold">Computer Science and Engineering</h4>
                                <p className="card-text"></p>
                                <a href="https://cse.nitk.ac.in/" className="btn btn-primary">Click to Visit</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mx-auto">
                        <div className="card">
                            <img src={dept6} className="card-img-top" alt="Hi" />
                            <div className="card-body">
                                <h4 className="card-title font-weight-bold">Electrical and Electronics Engineering</h4>
                                <p className="card-text"></p>
                                <a href="https://eee.nitk.ac.in/" className="btn btn-primary">Click to Visit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Departments;