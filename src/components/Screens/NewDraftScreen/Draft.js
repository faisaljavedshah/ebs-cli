import React, { useEffect, useState } from "react";
import NewDraft from "../../SubComponents/NewDraft/NewDraft";
import bg from "../../assets/home_bg.png";
import tori from "../../assets/logo.png";
import { GetUserData, AddDraft } from "../../Services/Service";
var Modal = require("react-bootstrap-modal");
import { useHistory } from "react-router-dom";

import Loader from "react-loader-spinner";
import LoadingSpinner from "../../assets/loader.gif";
import "../DraftTable/Style.css";

function Draft(props) {
    let history = useHistory();

    const [data, setData] = useState();
    const [loading, setLoder] = useState(true);

    let description2 =
        "Sampler demos are designed to be on a feature page on sap.com with a focus on exactly what is covered on that page.​";

    useEffect(() => {
        GetUserData().then((res) => {
            if (res.success) {
                let name = res.data.name;
                let role = res.data.role;
                localStorage.setItem("userName", name);
                localStorage.setItem("role", role);
                setLoder(false);
                setData(res.data);
            }
        });
    }, []);
    const updateSidebar = () => {
        GetUserData().then((res) => {
            if (res.success) {
                localStorage.setItem("userData", JSON.stringify(res.data));
            }
        });
    };
    const startDraft = () => {
        AddDraft().then((res) => {
            if (res.success) {
                localStorage.setItem("draftId", res.id);
                updateSidebar();
                history.push("/draft/new");
            } else {
                alert(res.message);
            }
        });
    };
    const onProcessClick = () => {
        history.push("/draft/ProcessType");
    };

    return (
        <div>
            {loading ? (
                <div className="loader_center">
                    <img width={70} height={70} src={LoadingSpinner} />
                </div>
            ) : (
                <div>
                    <div style={{ paddingTop: 30, paddingBottom: 20 }}>
                        <p style={{ fontWeight: "bold", fontSize: 20 }}>
                            Create New Draft
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div
                                style={{
                                    position: "relative",
                                    minHeight: 330,
                                    backgroundColor: "#fff",
                                    borderRadius: 10,
                                    paddingTop: 25,
                                    paddingBottom: 20,
                                    paddingLeft: 25,
                                    paddingRight: 25,
                                }}
                            >
                                <div>
                                    <p
                                        style={{
                                            fontSize: 18,
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Highlight/Spotlight{" "}
                                    </p>
                                    <span
                                        style={{ fontSize: 14, color: "gray" }}
                                    >
                                        2-5 mins
                                    </span>
                                    <br />
                                    <span
                                        className="mt-2"
                                        style={{ fontSize: 14, color: "blue" }}
                                    >
                                        View Sample
                                    </span>
                                    <br />
                                </div>
                                <div>
                                    <p style={{ fontSize: 14, marginTop: 30 }}>
                                        Spotlight Demo Videos are 2-5 minute
                                        demo videos (formerly called Highlight,
                                        Deep Dive and Release Highlight) with a
                                        Benefit/Demo Benefit/Demo, Benefit/Demo
                                        format.​ We combined as the length of
                                        the content is searchable.
                                    </p>
                                </div>
                                <div
                                    style={{ position: "absolute", bottom: 20 }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            marginTop: 40,
                                        }}
                                    >
                                        <button
                                            onClick={startDraft}
                                            className="btn scriptBtn"
                                            style={{
                                                textDecoration: "none",
                                                color: "#fff",
                                            }}
                                        >
                                            Start Draft
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div
                                style={{
                                    position: "relative",
                                    minHeight: 330,
                                    backgroundColor: "#fff",
                                    borderRadius: 10,
                                    paddingTop: 25,
                                    paddingBottom: 20,
                                    paddingLeft: 25,
                                    paddingRight: 25,
                                }}
                            >
                                <div>
                                    <p
                                        style={{
                                            fontSize: 18,
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Process
                                    </p>
                                    <span
                                        style={{ fontSize: 14, color: "gray" }}
                                    >
                                        5-7 mins
                                    </span>
                                    <br />
                                    <span
                                        className="mt-2"
                                        style={{ fontSize: 14, color: "blue" }}
                                    >
                                        View Sample
                                    </span>
                                    <br />
                                </div>
                                <div>
                                    <p style={{ fontSize: 14, marginTop: 30 }}>
                                        Process Demos are a business process
                                        focused demo, where there is a defined
                                        process as the anchor in this no longer
                                        than 7-minute demo. They begin with the
                                        benefits, then an explanation of the
                                        process flow, then the demo is
                                        delivered, tying back to the benefits
                                        when applicable.
                                    </p>
                                </div>
<div style={{ position: "absolute", bottom: 20 }}>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginTop:40
                                    }}
                                >
                                    <button
                                        onClick={onProcessClick}
                                        className="btn scriptBtn on_hover"
                                        style={{
                                            textDecoration: "none",
                                            color: "#fff",
                                            backgroundColor: "gray"
                                        }}
                                    >
                                        Start Draft
                                    </button>
                                </div>

</div>

                            </div>
                        </div>
                        <div className="col-4">
                            <NewDraft
                                commingSoon={false}
                                name="Sampler"
                                point="1-3 Minutes"
                                view="View Sample"
                                discription={description2}
                                btnName="Start Draft"
                            />
                        </div>
                    </div>
                    <img
                        style={{
                            position: "absolute",
                            marginTop: "-700px",
                            right: 70,
                            zIndex: -999,
                        }}
                        src={bg}
                    />
                </div>
            )}
        </div>
    );
}

export default Draft;
