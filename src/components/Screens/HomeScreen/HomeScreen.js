import React, { useEffect, useState } from "react";
import Header from "../../SubComponents/MainHeader/MainHeader";
import Footer from "../../SubComponents/Footer/Footer";
import home_page_img from "../../assets/home_page_img.svg";
import homeBg from "../../assets/home_bg.png";
import arrow from "../../assets/arrow.svg";
import View from "../../assets/view.png";
import Hide from "../../assets/hide.png";
// import * as fs from "fs";

import {
    Login,
    SignUp,
    ForgotPass,
    GetAPIkey,
    RequestUser,
} from "../../Services/Service";
import { useHistory } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
import gif from "../../assets/gif.gif";
import arrows from "../../assets/arrow.png";
import Modal from "react-modal";
import ToriLogo from "../../assets/tori_logo.svg";

import "./Style.css";
// Modal.setAppElement('#yourAppElement');
function HomeScreen(props) {
    let history = useHistory();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [signInMessage, setSignInMessage] = useState();
    const [inviteErrMesg, setinviteErrMesg] = useState();
    const [loginLoader, setloginLoader] = useState(false);
    const [inviteLoader, setinviteLoader] = useState(false);
    const [isloginErr, setIsloginErr] = useState(false);
    const [isSignUpErr, setIsSignUpErr] = useState(false);
    const [forgotPass, setforgotPass] = useState();
    const [forgotLoader, setforgotLoader] = useState(false);
    const [inviteFname, setinviteFname] = useState();
    const [inviteLname, setinviteLname] = useState();
    const [inviteEmail, setinviteEmail] = useState();
    const [forgetPassword, setForgetPassword] = useState(false);
    const [forgetPasswordMsg, setForgetPasswordMsg] = useState("");
    const [forgetPasswordN, setForgetPasswordN] = useState(false);
    const [forgetPasswordMsgN, setForgetPasswordMsgN] = useState("");
    const [invite, setInvite] = useState(false);
    const [inviteMsg, setInviteMsg] = useState("");
    const [isPassword, setIsPassword] = useState(false);
    const handleKeypress = (e) => {
        if (e.charCode === 13) {
            onSignInPress();
        }
    };
    const onSignInPress = () => {
        setloginLoader(true);
        Login(email, password).then((res) => {
            if (res.success) {
                let token = res.data.access_token;
                let name = res.data.name;
                localStorage.setItem("token", token);
                localStorage.setItem("userName", name);
                setIsloginErr(false);
                setSignInMessage(res);
                setloginLoader(false);
                history.push("/user/home");
            } else {
                setIsloginErr(true);
                setSignInMessage(res);
                setloginLoader(false);
            }
        });
        GetAPIkey().then((resData) => {
            if (resData.success) {
                console.log(resData);
                localStorage.setItem("API_key", resData.data);
            }
        });
    };
    const onForgotClicl = () => {
        setforgotLoader(true);
        ForgotPass(forgotPass).then((res) => {
            if (res.success) {
                // alert(res.message)
                setForgetPassword(true);
                setForgetPasswordMsg(res.message);
                setforgotLoader(false);
                setIsOpen3(false);
            } else {
                // alert(res.message)
                setForgetPasswordN(true);
                setForgetPasswordMsgN(res.message);
                setforgotLoader(false);
            }
        });
    };

    const onRequestAccess = () => {
        setinviteLoader(true);
        RequestUser(inviteFname, inviteLname, inviteEmail).then((res) => {
            if (res.status) {
                setinviteErrMesg(res);
                setIsSignUpErr(false);
                setinviteLoader(false);
                // alert(res.message);
                setInvite(true);
                setInviteMsg(res.message);
                setIsOpen2(false);
            } else {
                setinviteErrMesg(res);
                setIsSignUpErr(true);
                setinviteLoader(false);
            }
        });
    };
    const showPassword = () => {
        setIsPassword(!isPassword);
    };
    const onChangeEmail = (e) => {
        let val = e.target.value;
        setEmail(val);
    };
    const onChangeEPassword = (e) => {
        let val = e.target.value;
        setPassword(val);
    };
    const onChangeForgotEmail = (e) => {
        setforgotPass(e.target.value);
    };
    const onChangeFname = (e) => {
        setinviteFname(e.target.value);
    };
    const onChangeLname = (e) => {
        setinviteLname(e.target.value);
    };
    const onChangeInviteEmail = (e) => {
        setinviteEmail(e.target.value);
    };

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "26px",
            width: "30%",
            borderRadius: "15px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        },
    };

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpen2, setIsOpen2] = React.useState(false);
    const [modalIsOpen3, setIsOpen3] = React.useState(false);
    const [modalIsOpen4, setIsOpen4] = React.useState(false);

    function openModal() {
        setIsOpen(true);
        setIsOpen2(false);
        setIsOpen3(false);
    }
    function openModal2() {
        setIsOpen2(true);
        setIsOpen(false);
        setIsOpen3(false);
    }
    function openModal3() {
        setIsOpen3(true);
        setIsOpen2(false);
        setIsOpen(false);
    }

    function closeModal() {
        setIsOpen(false);
        setIsloginErr(false);
    }
    function closeModal2() {
        setIsOpen2(false);
        setIsSignUpErr(false);
    }
    function closeModal3() {
        setIsOpen3(false);
        setIsSignUpErr(false);
    }

    return (
        <div className="home_scroll">
            <Header />
            <div style={{}}>
                <div
                    style={{
                        height: "82vh",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            padding: "0 20px",
                        }}
                    >
                        <div>
                            <span
                                style={{
                                    fontSize: 34,
                                    color: "#000",
                                    lineHeight: "32px",
                                }}
                            >
                                Meet Tori, <br /> The Best Writer On Your <br />
                                Team. Powered With AI.{" "}
                            </span>
                            <br />
                            <span
                                className="mt-2"
                                style={{ fontSize: 14, color: "#000" }}
                            >
                                Create meaningful, engaging & on-brand marketing
                                copy <br />
                                in minutes using the power of artifical
                                intelligence.
                            </span>
                            <br />
                            <div className="mt-5">
                                <button
                                    onClick={openModal}
                                    style={{
                                        backgroundColor: "#0A6ED1",
                                        border: "none",
                                        boxShadow: "none",
                                    }}
                                    type="button"
                                    class="btn btn-primary sign_btn"
                                >
                                    Sign In
                                    <img
                                        style={{ marginLeft: 10 }}
                                        src={arrow}
                                    />
                                </button>
                            </div>
                            <div className="mt-3">
                                <p
                                    onClick={openModal2}
                                    style={{
                                        color: "#0A6ED1",
                                        cursor: "pointer",
                                    }}
                                >
                                    Request Access
                                </p>
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
            </div>
            
            <Footer />

            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div
                        class="modal-header"
                        style={{ borderBottom: 0, padding: 40, paddingTop: 15 }}
                    >
                        <h5
                            class="modal-title"
                            id="staticBackdropLabel"
                            style={{
                                position: "absolute",
                                left: 25,
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            Sign into Scriptoria
                        </h5>
                        <button
                            type="button"
                            class="close"
                            onClick={closeModal}
                            style={{ position: "absolute", right: 25 }}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div>
                        <p style={{ fontSize: 12 }}>Email</p>
                        <input
                            onKeyPress={(e) => {
                                handleKeypress(e);
                            }}
                            onChange={onChangeEmail}
                            placeholder="name@sap.com"
                            style={{
                                outline: "none",
                                borderTop: 0,
                                borderLeft: 0,
                                borderRight: 0,
                                width: "100%",
                                borderBottomColor: "#80848F",
                                paddingBottom: 8,
                            }}
                            type="text"
                        />
                    </div>
                    <div className="mt-5">
                        <p style={{ fontSize: 12 }}>Password</p>
                        <div className="input_single">
                            <input
                                onKeyPress={(e) => {
                                    handleKeypress(e);
                                }}
                                type={isPassword ? "text" : "password"}
                                onChange={onChangeEPassword}
                                placeholder="*********"
                                style={{
                                    outline: "none",
                                    borderTop: 0,
                                    borderLeft: 0,
                                    borderRight: 0,
                                    width: "100%",
                                    borderBottomColor: "#80848F",
                                    paddingBottom: 8,
                                }}
                            />
                            <div>
                                <img
                                    onClick={showPassword}
                                    className="view_set"
                                    width={"20vw"}
                                    src={isPassword ? Hide : View}
                                />
                            </div>
                        </div>
                    </div>
                    {isloginErr ? (
                        <p style={{marginTop:'10px'}} className="text-danger">
                            {signInMessage && signInMessage.message}
                        </p>
                    ) : (
                        ""
                    )}
                    <div className="mt-5">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <div style={{ display: "flex" }}>
                                <input
                                    style={{
                                        outline: "none",
                                        width: 16,
                                        height: 16,
                                    }}
                                    type="checkbox"
                                />
                                <p
                                    className="pt-2"
                                    style={{ fontSize: 12, paddingLeft: 8 }}
                                >
                                    Remember me
                                </p>
                            </div>
                            <div>
                                <a
                                    onClick={openModal3}
                                    className="pt-2"
                                    style={{
                                        color: "#0A6ED1",
                                        fontSize: 12,
                                        cursor: "pointer",
                                    }}
                                >
                                    Forgot Password?
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <button
                            onClick={onSignInPress}
                            className="btn btn-primary"
                            style={{
                                width: "100%",
                                backgroundColor: "#0A6ED1",
                                padding: 10,
                                outline:'none'
                            }}
                        >
                            {loginLoader ? (
                                <div
                                    class="spinner-border text-dark"
                                    role="status"
                                >
                                    <span class="sr-only">Loading...</span>
                                </div>
                            ) : (
                                <div>Sign In</div>
                            )}
                        </button>
                    </div>
                </Modal>
            </div>
            <div>
                <Modal
                    isOpen={modalIsOpen3}
                    onRequestClose={closeModal3}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div
                        class="modal-header"
                        style={{ borderBottom: 0, padding: 40, paddingTop: 15 }}
                    >
                        <h5
                            class="modal-title"
                            id="staticBackdropLabel"
                            style={{
                                position: "absolute",
                                left: 25,
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            Enter your email
                        </h5>
                        <button
                            type="button"
                            class="close"
                            onClick={closeModal3}
                            style={{ position: "absolute", right: 25 }}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div>
                        <p style={{ fontSize: 12 }}>Email</p>
                        <input
                            onChange={onChangeForgotEmail}
                            placeholder="name@sap.com"
                            style={{
                                outline: "none",
                                borderTop: 0,
                                borderLeft: 0,
                                borderRight: 0,
                                width: "100%",
                                borderBottomColor: "#80848F",
                                paddingBottom: 8,
                            }}
                            type="text"
                        />
                    </div>
                    <div className="mt-5">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        ></div>
                    </div>
                    <div className="mt-3">
                        <button
                            onClick={onForgotClicl}
                            className="btn btn-primary"
                            style={{
                                width: "100%",
                                backgroundColor: "#0A6ED1",
                                padding: 10,
                            }}
                        >
                            {forgotLoader ? (
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
                    <div className="mt-5"></div>
                </Modal>
            </div>
            <div>
                <Modal
                    isOpen={modalIsOpen2}
                    onRequestClose={closeModal2}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div
                        class="modal-header"
                        style={{ borderBottom: 0, padding: 40, paddingTop: 15 }}
                    >
                        <h5
                            class="modal-title"
                            id="staticBackdropLabel"
                            style={{
                                position: "absolute",
                                left: 25,
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            Please fill the information
                        </h5>
                        <button
                            type="button"
                            class="close"
                            onClick={closeModal2}
                            style={{ position: "absolute", right: 25 }}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="mt-5">
                        <p style={{ fontSize: 12 }}>First Name</p>
                        <input
                            onChange={onChangeFname}
                            placeholder="Enter First Name"
                            style={{
                                outline: "none",
                                borderTop: 0,
                                borderLeft: 0,
                                borderRight: 0,
                                width: "100%",
                                borderBottomColor: "#80848F",
                                paddingBottom: 8,
                            }}
                            type="text"
                        />
                    </div>
                    <div className="mt-5">
                        <p style={{ fontSize: 12 }}>Last Name</p>
                        <input
                            onChange={onChangeLname}
                            placeholder="Enter Last Name"
                            style={{
                                outline: "none",
                                borderTop: 0,
                                borderLeft: 0,
                                borderRight: 0,
                                width: "100%",
                                borderBottomColor: "#80848F",
                                paddingBottom: 8,
                            }}
                            type="text"
                        />
                    </div>
                    <div className="mt-5">
                        <p style={{ fontSize: 12 }}>Email</p>
                        <input
                            onChange={onChangeInviteEmail}
                            placeholder="name@sap.com"
                            style={{
                                outline: "none",
                                borderTop: 0,
                                borderLeft: 0,
                                borderRight: 0,
                                width: "100%",
                                borderBottomColor: "#80848F",
                                paddingBottom: 8,
                            }}
                            type="text"
                        />
                    </div>
                   
                    {isSignUpErr ? (
                        <p style={{marginTop:'10px'}} className="text-danger">
                            {inviteErrMesg && inviteErrMesg.message}
                        </p>
                    ) : (
                        ""
                    )}
                     <div className="mt-5">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        ></div>
                    </div>
                    <div className="mt-3">
                        <button
                            onClick={onRequestAccess}
                            className="btn btn-primary"
                            style={{
                                width: "100%",
                                backgroundColor: "#0A6ED1",
                                padding: 10,
                            }}
                        >
                            {inviteLoader ? (
                                <div
                                    class="spinner-border text-dark"
                                    role="status"
                                >
                                    <span class="sr-only">Loading...</span>
                                </div>
                            ) : (
                                <span>Submit</span>
                            )}
                        </button>
                    </div>
                    {/* <div className="mt-5"></div> */}
                </Modal>
            </div>

            <div>
                <Modal
                    isOpen={forgetPassword}
                    onRequestClose={() => {
                        setForgetPassword(false);
                    }}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div
                        class="modal-header"
                        style={{
                            borderBottom: 0,
                            padding: 40,
                            paddingBottom: 10,
                            paddingTop: 15,
                        }}
                    >
                        <h5
                            class="modal-title"
                            id="staticBackdropLabel"
                            style={{
                                position: "absolute",
                                left: 25,
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            Tori says
                        </h5>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "20px",
                        }}
                    >
                        <img width={30} height={30} src={ToriLogo} />
                        <h5
                            style={{ marginLeft: "20px" }}
                        >{`${forgetPasswordMsg}.`}</h5>
                    </div>

                    <div
                        className="pt-3"
                        style={{ float: "right", display: "flex" }}
                    >
                        <button
                            onClick={() => {
                                setForgetPassword(false);
                            }}
                            style={{
                                height: "34px",
                                fontWeight: "bold",
                                backgroundColor: "red",
                            }}
                            className="btn btn-primary primaryButton"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            </div>
            <div>
                <Modal
                    isOpen={forgetPasswordN}
                    onRequestClose={() => {
                        setForgetPasswordN(false);
                    }}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div
                        class="modal-header"
                        style={{
                            borderBottom: 0,
                            padding: 40,
                            paddingBottom: 10,
                            paddingTop: 15,
                        }}
                    >
                        <h5
                            class="modal-title"
                            id="staticBackdropLabel"
                            style={{
                                position: "absolute",
                                left: 25,
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            Tori says
                        </h5>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "20px",
                        }}
                    >
                        <img width={30} height={30} src={ToriLogo} />
                        <h5
                            style={{ marginLeft: "20px" }}
                        >{`${forgetPasswordMsgN}.`}</h5>
                    </div>

                    <div
                        className="pt-3"
                        style={{ float: "right", display: "flex" }}
                    >
                        <button
                            onClick={() => {
                                setForgetPasswordN(false);
                            }}
                            style={{
                                height: "34px",
                                fontWeight: "bold",
                                backgroundColor: "red",
                            }}
                            className="btn btn-primary primaryButton"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            </div>

            <div>
                <Modal
                    isOpen={invite}
                    onRequestClose={() => {
                        setInvite(false);
                    }}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <h6>{inviteMsg}</h6>

                    <div
                        className="pt-3"
                        style={{ float: "right", display: "flex" }}
                    >
                        <div style={{ marginRight: 10 }}>
                            <button
                                onClick={() => {
                                    setInvite(false);
                                }}
                                className="btn btn-primary primaryButtonWhiteBg"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default HomeScreen;
