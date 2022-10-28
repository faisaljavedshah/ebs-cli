import React, { useEffect } from 'react';
import sapLogo from '../../assets/sap_logo_svg.svg'
import './Style.css';

function MainHeader() {

    useEffect(() => {

    }, [])

    return (
        <div style={{ backgroundColor: "#000", padding: 20, bottom: 0, width: "100%" }}>
            <div style={{ justifyContent: "space-between", display: "flex" }}>
                <div>
                    <img width="40px" src={sapLogo} />
                </div>
                <div>
                    <span style={{ color: "#fff" }}>
                        Copyright 2022 © SAP Tori
                    </span>
                </div>
                {/* <div>
                    <span style={{ color: "#fff" }}>
                        info@scriptori.com
                    </span>
                </div> */}
            </div>
        </div>
    );
}

export default MainHeader;
