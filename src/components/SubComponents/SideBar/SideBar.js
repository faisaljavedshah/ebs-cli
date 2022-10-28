import React, { useEffect, useState } from "react";
import $ from "jquery";
import { Link, Redirect, withRouter } from "react-router-dom";
import { GetUserData, isAuthenticated } from "../../Services/Service";
import logo from "../../assets/torisidebar_logo.svg";
import OverviewLogo from "../../assets/ic_analytics.svg";
import NewScriptLogo from "../../assets/ic_edit.svg";
import InoviceLogo from "../../assets/ic_invoice.svg";
import UserProfileLogo from "../../assets/ic_user.svg";

import { useHistory } from "react-router-dom";
import { logOut } from "../../Services/Service";
import {
    ShimmerButton,
    ShimmerTitle,
    ShimmerText,
    ShimmerCircularImage,
    ShimmerThumbnail,
    ShimmerBadge,
    ShimmerTableCol,
    ShimmerTableRow,
} from "react-shimmer-effects";
import "./Style.css";

function SideBar(props) {
    const [data, setData] = useState();
    const [loader, setLoader] = useState(true);
    let history = useHistory();

    useEffect(() => {
        // setData(localStorage.getItem("role"));
        GetUserData().then((res) => {
            if (res.success) {
                setData(res.data);
                setLoader(false);
            }
        });
        // $("#menu-toggle").click(function (e) {
        //     e.preventDefault();
        //     $("#wrapper").toggleClass("active");
        // })
        updateSidebar();
    }, []);
    const updateSidebar = () => {
        GetUserData().then((res) => {
            if (res.success) {
                localStorage.setItem("userData", JSON.stringify(res.data));
            }
        });
    };

    // console.log("vvv", data);
    const logOutPress = () => {
        logOut();
    };
    return isAuthenticated() ? (
        <div id="wrapper" class="active">
            <div id="sidebar-wrapper">
                <ul id="sidebar_menu" class="sidebar-nav">
                    <li class="sidebar-brand">
                        <a id="menu-toggle" href="#">
                            <Link to="/user/overview">
                                <img src={logo} />
                            </Link>
                            <span
                                style={{ display: "none" }}
                                id="main_icon"
                                class="glyphicon glyphicon-align-justify"
                            ></span>
                        </a>
                    </li>
                </ul>
                <div
                    style={{
                        backgroundColor: "#F8FAFC",
                        borderRadius: 10,
                        padding: 15,
                        marginTop: 95,
                        marginLeft: 5,
                        marginRight: 15,
                    }}
                >
                    <span style={{ fontWeight: "bold", fontSize: 16 }}>
                        {localStorage.getItem("userName")}
                    </span>
                    <br />
                    {/* <span>Requestor</span> */}
                </div>
                <div style={{ marginTop: 20, marginLeft: 18, marginRight: 15, marginBottom: -22 ,}}>
                    <p style={{ fontWeight: "bold" }}>WELCOME</p>
                </div>
                <ul class="sidebar-nav" id="sidebar">
                    <li>
                        <Link
                            className={`w3-bar-item w3-button ${isActive(
                                history,
                                "/user/overview"
                            )}`}
                            to="/user/overview"
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "4px",
                                }}
                            >
                                <span>
                                    <img
                                        width={22}
                                        height={22}
                                        src={OverviewLogo}
                                    />
                                </span>
                                <span >Overview</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`w3-bar-item w3-button ${isActive(
                                history,
                                "/user/graphs"
                            )}`}
                            to="/user/graphs"
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "4px",
                                }}
                            >
                                <span>
                                    <img
                                        width={22}
                                        height={22}
                                        src={OverviewLogo}
                                    />
                                </span>
                                <span >Tori's Training</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`w3-bar-item w3-button ${isActive(
                                history,
                                "/user/heat-map"
                            )}`}
                            to="/user/heat-map"
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "4px",
                                }}
                            >
                                <span>
                                    <img
                                        width={22}
                                        height={22}
                                        src={OverviewLogo}
                                    />
                                </span>
                                <span >Heat Map</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`w3-bar-item w3-button ${isActive(
                                history,
                                "/user/home"
                            )}`}
                            to="/user/home"
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "4px",
                                }}
                            >
                                {" "}
                                <span>
                                    <img
                                        width={22}
                                        height={22}
                                        src={NewScriptLogo}
                                    />{" "}
                                </span>{" "}
                                <span > Create New Script</span>
                            </div>
                        </Link>
                    </li>
                </ul>
                <ul class="sidebar-nav">
                    <li>
                        <div style={{ marginTop: 20, marginRight: 15, marginBottom: -22 }}>
                            <p style={{ fontWeight: "bold", }}>SCRIPTS</p>
                        </div>
                    </li>
                </ul>
                <ul class="sidebar-nav">
                    <li>
                        <Link
                            className={`w3-bar-item w3-button ${isActive(
                                history,
                                "/user/drafts"
                            )}`}
                            to="/user/drafts"
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        padding: "4px",
                                    }}
                                >
                                    {" "}
                                    <span>
                                        <img
                                            width={22}
                                            height={22}
                                            src={InoviceLogo}
                                        />
                                    </span>
                                    <span >Drafts</span>
                                </div>
                                <div style={{ paddingRight: 20 }}>
                                    {loader ? (
                                        <div className="topSY">
                                            <ShimmerCircularImage size={20} />
                                        </div>
                                    ) : (
                                        <div className="count">
                                            <span  className="font_count">
                                                {data && data.drafts}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`w3-bar-item w3-button ${isActive(
                                history,
                                "/user/feedBack"
                            )}`}
                            to="/user/feedBack"
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",

                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        padding: "4px",
                                    }}
                                >
                                    {" "}
                                    <span>
                                        <img
                                            width={22}
                                            height={22}
                                            src={InoviceLogo}
                                        />
                                    </span>
                                    <span >Feedback</span>
                                </div>

                                <div style={{ paddingRight: 20 }}>
                                    {loader ? (
                                        <div className="topSY">
                                            <ShimmerCircularImage size={20} />
                                        </div>
                                    ) : (
                                        <div  className="m-0 count">
                                            {data && data.feedback}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`w3-bar-item w3-button ${isActive(
                                history,
                                "/user/editing"
                            )}`}
                            to="/user/editing"
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",

                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        padding: "4px",
                                    }}
                                >
                                    <span>
                                        <img
                                            width={22}
                                            height={22}
                                            src={InoviceLogo}
                                        />
                                    </span>
                                    <span >Copywriter</span>
                                </div>

                                <div style={{ paddingRight: 20 }}>
                                    {loader ? (
                                        <div className="topSY">
                                            <ShimmerCircularImage size={20} />
                                        </div>
                                    ) : (
                                        <div  className="m-0 count">
                                            {data && data.edit}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`w3-bar-item w3-button ${isActive(
                                history,
                                "/user/approved"
                            )}`}
                            to="/user/approved"
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",

                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        padding: "4px",
                                    }}
                                >
                                    <span>
                                        <img
                                            width={22}
                                            height={22}
                                            src={InoviceLogo}
                                        />
                                    </span>
                                    <span >Final Review</span>
                                </div>

                                <div style={{ paddingRight: 20 }}>
                                    {loader ? (
                                        <div className="topSY">
                                            <ShimmerCircularImage size={20} />
                                        </div>
                                    ) : (
                                        <div  className="m-0 count">
                                            {data && data.approved}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
                <ul class="sidebar-nav">
                    <li>
                        <div style={{ marginTop: 20, marginRight: 15, marginBottom: -22 }}>
                            <p style={{ fontWeight: "bold", }}>ACCOUNT</p>
                        </div>
                    </li>
                </ul>
                <ul class="sidebar-nav">
                    <li>
                        <Link
                            className={`w3-bar-item w3-button ${isActive(
                                history,
                                "/user/profile"
                            )}`}
                            to="/user/profile"
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "4px",
                                }}
                            >
                                <span>
                                    <img
                                        width={22}
                                        height={22}
                                        src={UserProfileLogo}
                                    />
                                </span>
                                <span >Profile</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`w3-bar-item w3-button ${isActive(
                                history,
                                "/user/admin"
                            )}`}
                            to="/user/admin"
                        >
                            {loader ? (
                                // <ShimmerCircularImage size={20} /> :
                                <ShimmerBadge width={200} />
                            ) : (
                                <span>
                                    {data && data.role == "Admin" && (
                                        <span>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    padding: "4px",
                                                }}
                                            >
                                                {" "}
                                                <span>
                                                    <img
                                                        width={22}
                                                        height={22}
                                                        src={UserProfileLogo}
                                                    />
                                                </span>
                                                <span >Admin</span>
                                            </div>
                                        </span>
                                    )}
                                </span>
                            )}
                        </Link>
                    </li>
                    <li onClick={logOutPress} style={{ cursor: "pointer" }}>
                        <a >Log out</a>
                    </li>
                </ul>
            </div>
            {/* <!-- Page content --> */}
            <div id="page-content-wrapper">
                <div class="page-content inset">
                    <div class="row">
                        <div class="col-md-12">{props.children}</div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <Redirect to="/"></Redirect>
    )
}
export const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return "activate";
    }
};
export default withRouter(SideBar);
