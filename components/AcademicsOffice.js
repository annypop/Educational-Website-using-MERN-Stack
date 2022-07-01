import React from 'react';
import ao1 from '../images/ao1.jfif';
import ao2 from '../images/ao2.jpg';
import ao3 from '../images/ao3.jpg';
const AcademicsOffice = () => {
    return (
        <>
            <div className="home-bg-institute"></div>
            <h1 id="bottom">Academics Office</h1>
            <div className="container-fluid">
                <div className="row m-5">
                    <div className="col-md-3  mx-auto">
                        <div className="card">
                            <img src={ao1} className="card-img-top" alt="Hi" />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">Prof. Vidya Shetty</h5>
                                <p className="card-text">Dean (Academic)</p>
                                <a href="https://www.nitk.ac.in/academicoffice" className="btn btn-primary">Check Profile</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mx-auto">
                        <div className="card">
                            <img src={ao2} className="card-img-top" alt="Hi" />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">Dr Prof. Manjunatha Sharma K</h5>
                                <p className="card-text">Associate Dean (UG)</p>
                                <a href="https://www.nitk.ac.in/academicoffice" className="btn btn-primary">Check Profile</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mx-auto">
                        <div className="card">
                            <img src={ao3} className="card-img-top" alt="Hi" />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">Prof. Ramesh Kini M</h5>
                                <p className="card-text">Associate Dean PG & R</p>
                                <a href="https://www.nitk.ac.in/academicoffice" className="btn btn-primary">Check Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AcademicsOffice;