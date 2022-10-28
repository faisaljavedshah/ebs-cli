import React, { useEffect, useState } from "react";

import bg from "../../assets/home_bg.png";
import ProfileUpload from "../../assets/profile_upload.svg";
import LoadingSpinner from "../../assets/loader.gif";

import { GetUserData } from "../../Services/Service";
import "./profile.css";

function Profile(props) {
    const [fName, setName] = useState();
    const [email, setEmail] = useState();
    const [city, setCity] = useState();
    const [role, setRole] = useState();
    const [data, setData] = useState();
    const [loader, setLoader] = useState(true);

    const onChangeFname = (e) => {
        setName(e.target.value);
    };
    const onChangeCity = (e) => {
        setCity(e.target.value);
    };
    const onChangeInviteEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangeRole = (e) => {
        setRole(e.target.value);
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

    useEffect(() => {
        GetUserData().then((res) => {
            if (res.success) {
                setData(res.data);
                setName(res.data.name);
                setEmail(res.data.email);
                setCity(res.data.city && res.data.city);
                setRole(res.data.role);
                setLoader(false);
            }
        });
    }, []);

    return (
        <div>
            {/* <div style={{  paddingBottom: 20 }}>
                <p style={{ fontWeight: "bold", fontSize: 20 }}>Profile</p>
            </div> */}
             <div
                className="pt-3 pb-3"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "end" }}
            >
                <h3 style={{ fontWeight: "bolder" }}>Profile</h3>
                <div
                    style={{ height: 36, marginTop: 8 }}
                >
                    {/* Invite user */}
                </div>
            </div>
            {loader ? (
                <div className="loader_center">
                    <img width={70} height={70} src={LoadingSpinner} />
                </div>
            ) : (
                <div className="row">
                    <div className="col-6">
                        <div className="profile_data">
                            <div className="input_box">
                                <p style={{ fontSize: 12 }}>First Name</p>
                                <input
                                    value={fName}
                                    className="input_field"
                                    onChange={onChangeFname}
                                    placeholder="Enter First Name"
                                    type="text"
                                />
                            </div>
                            <div className="input_box">
                                <p style={{ fontSize: 12 }}>Email</p>
                                <input
                                    value={email}
                                    className="input_field"
                                    onChange={onChangeInviteEmail}
                                    placeholder="name@sap.com"
                                    type="text"
                                />
                            </div>
                            <div className="input_box">
                                <p style={{ fontSize: 12 }}>Role</p>
                                <input
                                    value={role}
                                    className="input_field"
                                    onChange={onChangeRole}
                                    placeholder="Role"
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-6"></div>
                </div>
            )}

            <img
                width={755}
                height={755}
                style={{
                    position: "absolute",
                    marginTop: "-450px",
                    right: 187,
                    zIndex: -999,
                }}
                src={bg}
            />
        </div>
    );
}

export default Profile;
