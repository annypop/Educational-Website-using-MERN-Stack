import React from "react";
import { NavLink } from "react-router-dom";
import research1 from '../images/research1.JPG';

const Research = () => {
    return (
        <>
            <div className="home-bg-institute">
                <h1 id="bottom">Research Overview</h1>
            </div>
            <section id="Header" className="d-flex align-items-center ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>Do Get to Know More About
                                        <strong className="brand-name"> Research at NITK</strong></h1>
                                    <h2 className="my-3">424 publications in international/national conference proceedings</h2>
                                    <div className="mt-3">
                                        <NavLink to='/Research' className="btn-get-started">Research </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container-fluid">
                <div className="row">
                    <h1 className="m-4 text-center">Research Overview</h1>
                    <div className="col-md-6">
                        <p id="Header" className=" p-3 navbar-director">
                            As educators, NITK recognizes research as a potent form of learning by doing. Our students enrich their education through engaging in frontline, faculty-led research. Research flourishes in our fourteen departments that convene experts across disciplines to transform the cutting-edge technology in to a new horizon. The inter-disciplinary research brings the diverse talent to bear, together, on important societal problems of the country.
                            <hr />
                            Research at NITK is an integral part of the curriculum and a major component of the teaching-learning process. The institute takes pride in being recognized as a Centre for AICTE sponsored National Doctoral Programme and also as a Centre for Quality Improvement Programme (QIP). The newly introduced M.Tech (Research) programmes are aimed at orienting students towards novel research possibilities at an early stage.
                            The institute assures for its scholars a broad and deep research navigation. The NITK Research Advisory Board is established to provide policy directions to research activities.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p id="Header" className="p-3 navbar-director">
                            The institution has attracted significant research grants from various central and state government agencies, and various industries with a total of 162 ongoing sponsored research projects. NITK has received over Rs.200 crores since 2016. A new central research facility(CRF) with a funding of Rs.80 crores from Higher Education Financing Agency (HEFA) will equip NITK with a state of the art equipment/software across departments and encourage interdisciplinary research. A Regional Academic Centre - space (RAC-s) supported by Indian Space Research Organisation (ISRO) will shortly been setup in NITK, to cater to the technological needs of ISRO.
                            <hr />
                                <img src={research1} className="researchgraph ms-5" alt="Hi" />
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Research;