import React, { useState } from "react";
import "../NewPassword/NewPassword.css";
import { SetPassword } from "../../Services/Service";
import { useHistory } from "react-router-dom";
import Footer from "../../SubComponents/Footer/Footer";

import home_page_img from "../../assets/home_page_img.svg";
import "../../SubComponents/SideBar/Style.css";
import homeBg from "../../assets/home_bg.png";
import arrow from "../../assets/arrow.svg";
import logo from "../../assets/torisidebar_logo.svg";
import View from "../../assets/view.png";
import Hide from "../../assets/hide.png";

import Header from "../Header/Header";

function NewPassword(props) {
    let history = useHistory();

    const [password, setpassword] = useState();
    const [confirmPassword, setconfirmPassword] = useState();
    const [loader, setloader] = useState(false);
    const [isPassowrd, setIsPassword] = useState(false);

    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("token");
    localStorage.setItem("token", token);

    const onChangePass = (e) => {
        setpassword(e.target.value);
    };
    const onChangeCPass = (e) => {
        setconfirmPassword(e.target.value);
    };

    const OnsubmitClick = () => {
        setloader(true);
        SetPassword(password, confirmPassword).then((res) => {
            if (res.success) {
                setloader(false);
                history.push("/user/home");
            } else {
                alert(res.message);
                setloader(false);
            }
        });
    };
    const showPassword = () => {
        setIsPassword(!isPassowrd);
    };

    return (
        <div>
            <div>
                <div className="container-fluid page-body-wrapper pad-0 mrg-0">
                    <div className="row">
                        <div
                            style={{ padding: "10px" }}
                            className="col-lg-2 col-md-12 col-sm-12 pr-0 "
                        >
                            <a id="menu-toggle" href="#">
                                <img src={logo} />
                                <span
                                    style={{ display: "none" }}
                                    id="main_icon"
                                    class="glyphicon glyphicon-align-justify"
                                ></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    height: "82vh",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        flexDirection: "column",
                        padding: "0 20px",
                    }}
                >
                    <span
                        style={{
                            fontSize: 34,
                            color: "#000",
                            lineHeight: "32px",
                        }}
                    >
                        Welcome to Tori
                    </span>
                    <div className="mt-5">
                        <div className="form-card card">
                            <h2 className="text-center mb-5">New Password</h2>
                            <div className="input_single">
                                <input
                                    onChange={onChangePass}
                                    className="mb-4"
                                    type={isPassowrd ? "text" : "password"}
                                    placeholder="New Password"
                                />
                                <div>
                                    <img
                                        onClick={showPassword}
                                        className="view_set"
                                        width={"20vw"}
                                        src={isPassowrd ? Hide : View}
                                    />
                                </div>
                            </div>
                            <div style={{ marginTop: "15px" }}>
                                <div className="input_single">
                                    <input
                                        onChange={onChangeCPass}
                                        className="mb-4"
                                        type={isPassowrd ? "text" : "password"}
                                        placeholder="Re Enter Passowrd"
                                    />
                                    <div>
                                        <img
                                            onClick={showPassword}
                                            className="view_set"
                                            width={"20vw"}
                                            src={isPassowrd ? Hide : View}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                            onClick={OnsubmitClick}
                            className="btn btn-primary"
                            style={{
                                width: "100%",
                                color:'white',
                                backgroundColor: "#0A6ED1",
                                padding: 10,
                            }}
                        >
                            {loader ? (
                                <div
                                    class="spinner-border text-dark"
                                    role="status"
                                >
                                    <span class="sr-only">Loading...</span>
                                </div>
                            ) : (
                                <div>Submit</div>
                            )}
                        </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="pr-4">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                style={{
                                    width: "24%",
                                    position: "absolute",
                                    top: 170,
                                }}
                                src={home_page_img}
                            />
                            <img style={{ width: "60%" }} src={homeBg} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default NewPassword;
