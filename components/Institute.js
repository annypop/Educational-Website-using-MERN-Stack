import React from "react";
import Common from "./Common";
import web from "../images/image1.png";
import beach1 from '../images/beach1.jfif';
import beach2 from '../images/beach2.jpg';

const Institute = () => {
    return (
        <>
            <div className="home-bg-institute"> <h1 id="bottom">Gallery</h1></div>
            <div className="container-fluid">
                <div className="row">
                <h1  className="m-4 text-center">Campus Life</h1>
                    <div className="col-md-6">
                        <img src={beach1} className="card-img-top m-5" alt="Hi" />
                    </div>
                    <div className="col-md-6">
                        <img src={beach2} className="card-img-top m-5" alt="Hi" />
                    </div>
                </div>
            </div>
            <Common name="Get Know More About NIT"
                imgsrc={web}
                visit="/Facilities"
                btnname="Check Out Our Campus" />
            <div className="container-fluid">
                <div className="row">
                <h1  className="m-4 text-center">History of NITK</h1>
                    <div className="col-md-6">
                        <div className="nitkhistory-bg m-5"></div>
                    </div>
                    <div className="col-md-5">
                        <p id="Header" className="m-5 p-3 navbar-director">
                        National Institute of Technology Karnataka, Surathkal is located in Mangalore City, Karnataka State, India. The Institute was established as Karnataka Regional Engineering College (KREC) in 1960, and upgraded as National Institute of Technology Karnataka (NITK) in 2002. 
                        <hr/>
                        Mangalore is the headquarters of the coastal district of Dakshina Kannada, and boasts an important centre of education, business and trade in the state. Sri. U. Srinivasa Mallya, a visionary and a philanthropist, contributed immensely to the development of the coastal region of Karnataka,
                        and his effort towards establishment of KREC (now NITK) is the most significant one. In recognition of his role as the founder and architect of the institute, the campus premises is named after him as Srinivasnagar.
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Institute;