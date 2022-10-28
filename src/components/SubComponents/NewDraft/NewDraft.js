import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Style.css'


const Draft = ({
    props = null,
    name = "",
    point = "",
    view = "",
    discription = "",
    commingSoon = true,
    disableStyle = true,
    btnName = "",
    clickhandlew = "",
    commingSoonText = "Coming Soom",
    commingSoonStyle = true,
    btnClicked = null
}) => {

    useEffect(() => {

    }, []);



    return (
        <div>
            <div style={{ position: "relative", minHeight: 330, backgroundColor: "#fff", borderRadius: 10, paddingTop: 25, paddingBottom: 20, paddingLeft: 25, paddingRight: 25 }}>
                <div>
                    <p style={{ fontSize: 18, fontWeight: "bold" }}>{name}</p>
                    <span style={{ fontSize: 14, color: "gray" }}>{point}</span><br />
                    <span className='mt-2' style={{ fontSize: 14, color: "blue" }}>{view}</span><br />
                </div>
                <div>
                    <p style={{ fontSize: 14, marginTop: 30 }}>{discription}</p>
                </div>
                <div style={{ position: "absolute", bottom: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 40 }}>
                        <button onClick={btnClicked} className={disableStyle ? 'btn scriptBtnDis disabled' : 'btn scriptBtn'}><Link to={clickhandlew} style={{ color: "#fff", textDecoration: "none" }}> {btnName}</Link></button>
                        {commingSoon && <p style={{ marginLeft: 90 }} className={commingSoonStyle ? "grayText" : "yellowText"} >{commingSoonText}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Draft;
