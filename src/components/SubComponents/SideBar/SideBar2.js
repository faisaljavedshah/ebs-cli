import React, { useEffect, useState } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom'
import $ from 'jquery'
import logo from "../../assets/sidebar1.svg"
import sidebar2 from "../../assets/sidebar2.svg"
import sidebar3 from "../../assets/sidebar3.svg"
import "./Style2.css"

function SideBar(props) {

    let history = useHistory();
    useEffect(() => {
        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#wrapper2").toggleClass("active");
        });
    }, []);

    return (
        <div id="wrapper2" class="active">
            <div id="sidebar-wrapper2">
                {/* <ul class="sidebar-nav2" id="sidebar" style={{ marginTop: 5 }}>
                    <li className={`w3-bar-item w3-button ${isActive(history, "/draft/new")}`} ><Link to="/draft/new"><img src={logo} /> </Link></li>
                    <li className={`w3-bar-item w3-button ${isActive(history, "/draft/graphs")}`}><Link to="/draft/graphs"><img src={sidebar2} /> </Link></li>
                    <li className={`w3-bar-item w3-button ${isActive(history, "/draft/heat-map")}`} ><Link to="/draft/heat-map"><img src={sidebar3} /> </Link></li>
                </ul> */}
            </div>

            <div id="page-content-wrapper2">
                <div class="page-content inset">
                    <div class="row">
                        <div class="col-md-12">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return "activateSideBar2";
    }
};

export default withRouter(SideBar);;
