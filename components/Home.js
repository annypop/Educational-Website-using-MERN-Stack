import React from "react";
import { NavLink } from "react-router-dom";
import web from "../images/image1.jfif";
import Common from "./Common";
import CompareBarGraph from "./CompareBarGraph";

const Home = () => {
    return (
        <>
            <div className="home-bg"></div>
            <div className="home-content">
                <Common name="National Institute of Technology"
                    imgsrc={web}
                    visit="/Institute"
                    btnname="Know More" />
            </div>
            <div className="m-2"><CompareBarGraph/></div>
            <div className="home-bg-1 m-5"></div>
        </>
    );
};

export default Home;