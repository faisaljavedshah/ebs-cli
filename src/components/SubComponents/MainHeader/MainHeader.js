import React, { useEffect } from 'react';
import tori_logo from '../../../components/assets/tori_logo.svg'
import sap_logo_svg from '../../../components/assets/sap_logo_svg.svg'
import { Link, withRouter } from 'react-router-dom'

import './Style.css';

function MainHeader(props) {

    useEffect(() => {

    }, [])

    return (
        <div className='pageUI'>
            <div className='top_header'>
                <div>
                    <div style={{ display: "flex" }}>
                        <img src={tori_logo} />
                        <div style={{ paddingLeft: 10 }}>
                            <h6 className='mb-0' style={{ fontWeight: "bold", fontSize: 18 }}>Tori</h6>
                            <span style={{ fontSize: 12 }}>From</span> <img src={sap_logo_svg} />
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ display: "flex" }}>
                        {/* <button type='button' style={{ color: "#000", textDecoration: "none", fontWeight: "bold" }} className='btn btn-link'>
                            Need Account?
                        </button> */}
                        {/* <Link style={{ textDecoration: "none", color: "#fff" }} to="/user/"> */}
                        {/* <button disabled className='btn btn-primary' style={{ backgroundColor: "#0A6ED1", borderRadius: 6 }}>
                            Get Started
                        </button> */}
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainHeader;
