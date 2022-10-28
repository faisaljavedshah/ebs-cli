import React, { useEffect, useState } from "react";
import OverViewStudyLogo from "../../../components/assets/overview_study.png";
import OverViewThermoogo from "../../../components/assets/overview_thermo.png";
import OverviewBack from "../../../components/assets/background.jpg";

// import background from '/background.png'

import "../OverView/Overview.css";
import { Link } from "react-router-dom";

function OverView(props) {
    useEffect(() => {}, []);

    return (
        <div>
            <h3 className="heading mt-5 mb-5">Overview</h3>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="card main-card-overview">
                            <div className="row">
                                <div className="col-4 align_botm">
                                    <div >
                                        <h3 style={{fontFamily:'72'}} className="h3_font">Help Tori get smarter! </h3>

                                        <p style={{fontFamily:'72'}} className="mt-3 p_font">
                                            The more you write, the faster she
                                            learns. Each edit is captured and
                                            helps her produce more accurate
                                            accounts each time.{" "}
                                        </p>
                                    
                                    </div>
                                   
                                    <div>
                                        <Link to="/user/home">
                                        <button className="btn btn-primary mt-4 font_size">
                                            Create a New Script
                                        </button>
                                        </Link>
                                        
                                    </div>
                                </div>
                                <div className="col-2"></div>
                                <div className="col-6 main-card-right-content">
                                    <div
                                        style={{
                                            backgroundImage: `url(${OverviewBack})`,
                                        }}
                                        className="content-wrapper"
                                    >
                                        <div className="content_image1">
                                            <img src={OverViewStudyLogo} />
                                        </div>
                                        <div className="content_image2">
                                            <img src={OverViewThermoogo} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OverView;