import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/comment.png";
import LoadingSpinner from "../../assets/loader.gif";
import ToriLogo from "../../assets/tori_logo.svg";
import WorldFile from '../HomeScreen/WorldFile'


import {
    AddComment,
    GetSavedDraftEditingDetails,
    GetUserData,
    SaveScriptInEditing,
} from "../../Services/Service";
import CommentBox from "./commentBox";
import { useHistory } from "react-router-dom";
import "../../App.css";

import "./Style.css";
import Modal from "react-modal";

function EditDraft(props) {
    const [loader, setLoader] = useState(false);
    const [intro, setIntro] = useState();
    const [bo1, setBo1] = useState();
    const [bo2, setBo2] = useState();
    const [bo3, setBo3] = useState();
    const [bo4, setBo4] = useState();
    const [demo1, setDemo1] = useState();
    const [demo2, setDemo2] = useState();
    const [demo3, setDemo3] = useState();
    const [demo4, setDemo4] = useState();
    const [outro, setOutro] = useState();
    const [data, setData] = useState("");
    const [draftName, setdraftName] = useState("");
    const [disableData, setdisableData] = useState("");
    const [loaderComment, setLoaderComment] = useState(false);
    const [getSavedDraft, setGetSavedDraft] = useState(false);
    const [getSavedDraftMsg, setGetSavedDraftMsg] = useState("");
    const [onSave, setOnSave] = useState(false);
    const [onSaveMsg, setOnSaveMsg] = useState("");
    const [onSaveN, setOnSaveN] = useState(false);
    const [onSaveMsgN, setOnSaveMsgN] = useState("");
    const [DataForTest, setDataForTest] = useState();
    let history = useHistory();

    useEffect(() => {
        autosize();
        function autosize() {
            var text = $(".autosize");

            text.each(function () {
                $(this).attr("rows", 1);
                resize($(this));
            });

            text.on("input", function () {
                resize($(this));
            });

            function resize($text) {
                $text.css("height", "auto");
                $text.css("height", $text[0].scrollHeight + "px");
            }
        }
    });
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
        setLoader(true);
        GetSavedDraftEditingDetails().then((res) => {
            if (res.success) {
                setDataForTest(res.data);
                setData(res.data.comments);
                setIntro(res.data.intro);
                setdraftName(res.data.video_name);
                setBo1(res.data.business_outcomes);
                setBo2(res.data.business_outcomes_two);
                setBo3(res.data.business_outcomes_three);
                setBo4(res.data.business_outcomes_four);
                setDemo1(res.data.selected_demo_one);
                setDemo2(res.data.selected_demo_two);
                setDemo3(res.data.selected_demo_three);
                setDemo4(res.data.selected_demo_four);
                setOutro(res.data.outro);
                setLoader(false);
            } else {
                // alert(res.message);
                setGetSavedDraft(true);
                setGetSavedDraftMsg(res.message);
            }
        });
        GetUserData().then((res) => {
            var dataGet = res.data.permission;
            setdisableData(dataGet);
            setLoader(false);
        });
    }, []);

    const loadState = () => { };
    const onChangeIntro = (e) => {
        setIntro(e.target.value);
    };
    const onChangeBo1 = (e) => {
        setBo1(e.target.value);
    };
    const onChangeBo2 = (e) => {
        setBo2(e.target.value);
    };
    const onChangeBo3 = (e) => {
        setBo3(e.target.value);
    };
    const onChangeBo4 = (e) => {
        setBo4(e.target.value);
    };
    const onChangeDemo1 = (e) => {
        setDemo1(e.target.value);
    };
    const onChangeDemo2 = (e) => {
        setDemo2(e.target.value);
    };
    const onChangeDemo3 = (e) => {
        setDemo3(e.target.value);
    };
    const onChangeDemo4 = (e) => {
        setDemo4(e.target.value);
    };
    const onChangeOutro = (e) => {
        setOutro(e.target.value);
    };
    const onBackClick = () => {
        history.goBack();
    };
    const onBlurAutoSave = () => {
        SaveScriptInEditing(
            intro,
            bo1,
            bo2,
            bo3,
            bo4,
            demo1,
            demo2,
            demo3,
            demo4,
            outro
        ).then((res) => {
            return res;
        });
    };
    const onSaveClick = () => {
        SaveScriptInEditing(
            intro,
            bo1,
            bo2,
            bo3,
            bo4,
            demo1,
            demo2,
            demo3,
            demo4,
            outro
        ).then((res) => {
            if (res.status) {
                // alert(res.message);
                setOnSave(true);
                setOnSaveMsg(res.message);
            } else {
                setOnSaveN(true);
                setOnSaveMsgN(res.message);
                // alert(res.message);
            }
        });
    };

    const getComments = () => {
        setLoaderComment(true);
        GetSavedDraftEditingDetails().then((res) => {
            setData(res.data.comments);
            setDataForTest(res.data);
            setLoaderComment(false);
        });
    };
    function handleSubmit(text, name) {
        setLoaderComment(true);
        AddComment(text, name).then((res) => {
            getComments();
            setLoaderComment(false);
        });
    }

    return (
        <div>
            <section>
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        zIndex: 999,
                        width: "100%",
                        backgroundColor: "#F7FAFC",
                        marginLeft: "-85px",
                    }}
                >
                    <div
                        className="row m-0 pt-3 pb-2"
                        style={{ boxShadow: "0px 11px 10px -15px #111" }}
                    >
                        <div className="col-10">
                            <div style={{ marginLeft: 25, display: "flex" }}>
                                <img
                                    style={{ cursor: "pointer" }}
                                    onClick={onBackClick}
                                    src={logo}
                                />
                                <p
                                    className="pt-3 pl-2"
                                    style={{
                                        fontSize: "22px",
                                        fontWeight: "bold",
                                        marginLeft: 12,
                                    }}
                                >
                                    {draftName}
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-2 mt-2"
                            style={{ display: "flex", paddingLeft: 20 }}
                        >
                            <button
                                style={{ width: 80, height: 35 }}
                                onClick={onSaveClick}
                                disabled={
                                    !disableData.includes("Edit") &&
                                    !disableData.includes("All")
                                }
                                className="btn cuss_btn"
                            >
                                Save
                            </button>
                            <button
                                style={{ width: 80, height: 35 }}
                                className="btn cuss_btn"
                                onClick={onBackClick}
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {loader ? (
                <div

                    className="loader"
                >
                    <img width={70} height={70} src={LoadingSpinner} />
                </div>
            ) : (
                <div style={{ marginTop: "8%", marginBottom: "5%" }}>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-6">
                            <div className="row">
                                <div

                                    className="col-12 box_shadow"
                                >
                                    <div>
                                        <div>
                                            <span
                                                style={{
                                                    fontWeight: 800,
                                                    fontSize: 16,
                                                    paddingRight: 8,
                                                }}
                                            >
                                                {" "}
                                                Product Name:
                                            </span>
                                            <span>
                                                {
                                                    DataForTest?.first_product_name
                                                }
                                            </span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    fontWeight: 800,
                                                    fontSize: 16,
                                                    paddingRight: 8,
                                                }}
                                            >
                                                {" "}
                                                Industry:
                                            </span>
                                            <span>
                                                {DataForTest?.industry}
                                            </span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    fontWeight: 800,
                                                    fontSize: 16,
                                                    paddingRight: 8,
                                                }}
                                            >
                                                {" "}
                                                Line of Business:
                                            </span>
                                            {DataForTest?.line_of_business.map(
                                                (res) => (
                                                    <span>{res} </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <span
                                                style={{
                                                    fontWeight: 800,
                                                    fontSize: 16,
                                                }}
                                            >
                                                Draft's Owner:
                                            </span>{" "}
                                            {DataForTest && DataForTest.created_by}
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    fontWeight: 800,
                                                    fontSize: 16,
                                                }}
                                            >
                                                Hub Lead:{" "}
                                            </span>
                                            {DataForTest && DataForTest.hublead_name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4"></div>
                    </div>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-6" style={{ height: "auto" }}>
                            <div style={{ height: "auto" }}>
                                <div>
                                    <div className="row">
                                        <div
                                            className="col-12"
                                            style={{
                                                fontSize: "18px",
                                                fontWeight: "600",
                                            }}
                                        >
                                            Intro:
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="textarea-wrapper">
                                            <div style={{ width: "100%" }}>
                                                <textarea
                                                    onBlur={onBlurAutoSave}
                                                    value={intro}
                                                    className={DataForTest && DataForTest.feedback_edit_permission == true ? ` right_side autosize` : ` autosize right_side disable_span`}
                                                    onChange={onChangeIntro}
                                                />
                                            </div>
                                            <div className="commentBox-wrapper">
                                                <div class="type2">
                                                    {data.intro &&
                                                        data.intro.length}
                                                </div>
                                                <div>
                                                    <CommentBox
                                                        getComments={
                                                            getComments
                                                        }
                                                        data={DataForTest}
                                                        loaderComment={
                                                            loaderComment
                                                        }
                                                        handleSubmit={
                                                            handleSubmit
                                                        }
                                                        name={"intro"}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                </div>

                                <div className="row">
                                    <div
                                        className="col-12"
                                        style={{
                                            fontSize: "18px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        Business Outcome 1:
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="textarea-wrapper">
                                        <div style={{ width: "100%" }}>
                                            <textarea
                                                onBlur={onBlurAutoSave}
                                                style={{ minheight: "20px" }}
                                                onChange={onChangeBo1}
                                                value={bo1}
                                                wrap="soft"
                                                className={DataForTest && DataForTest.feedback_edit_permission == true ? ` right_side autosize` : ` autosize right_side disable_span`}
                                            ></textarea>
                                        </div>
                                        <div className="commentBox-wrapper">
                                            <div class="circleBase type2">
                                                {data.bo1 && data.bo1.length}
                                            </div>
                                            <CommentBox
                                                getComments={getComments}
                                                data={DataForTest}
                                                loaderComment={loaderComment}
                                                handleSubmit={handleSubmit}
                                                name={"bo1"}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <br></br>

                                <div className="row">
                                    <div
                                        className="col-12"
                                        style={{
                                            fontSize: "18px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        Demo 1:
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="textarea-wrapper">
                                        <div style={{ width: "100%" }}>
                                            <textarea
                                                onBlur={onBlurAutoSave}
                                                style={{ minheight: "20px" }}
                                                onChange={onChangeDemo1}
                                                className={DataForTest && DataForTest.feedback_edit_permission == true ? ` right_side autosize` : ` autosize right_side disable_span`}
                                                value={demo1}
                                                wrap="soft"
                                            />
                                        </div>
                                        <div className="commentBox-wrapper">
                                            <div class="circleBase type2">
                                                {data.demo1 &&
                                                    data.demo1.length}
                                            </div>
                                            <CommentBox
                                                getComments={getComments}
                                                data={DataForTest}
                                                loaderComment={loaderComment}
                                                handleSubmit={handleSubmit}
                                                name={"demo1"}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div
                                        className="col-12"
                                        style={{
                                            fontSize: "18px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        Business Outcome 2:
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="textarea-wrapper">
                                        <div style={{ width: "100%" }}>
                                            <textarea
                                                onBlur={onBlurAutoSave}
                                                style={{ minheight: "20px" }}
                                                onChange={onChangeBo2}
                                                value={bo2}
                                                className={DataForTest && DataForTest.feedback_edit_permission == true ? ` right_side autosize` : ` autosize right_side disable_span`}
                                            ></textarea>
                                        </div>
                                        <div className="commentBox-wrapper">
                                            <div class="circleBase type2">
                                                {data.bo2 && data.bo2.length}
                                            </div>
                                            <CommentBox
                                                getComments={getComments}
                                                data={DataForTest}
                                                loaderComment={loaderComment}
                                                handleSubmit={handleSubmit}
                                                name={"bo2"}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <br></br>

                                <div className="row">
                                    <div
                                        className="col-12"
                                        style={{
                                            fontSize: "18px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        Demo 2:
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="textarea-wrapper">
                                        <div style={{ width: "100%" }}>
                                            <textarea
                                                onBlur={onBlurAutoSave}
                                                style={{ minheight: "20px" }}
                                                onChange={onChangeDemo2}
                                                value={demo2}
                                                wrap="soft"
                                                className={DataForTest && DataForTest.feedback_edit_permission == true ? ` right_side autosize` : ` autosize right_side disable_span`}
                                            />
                                        </div>
                                        <div className="commentBox-wrapper">
                                            <div class="circleBase type2">
                                                {data.demo2 &&
                                                    data.demo2.length}
                                            </div>
                                            <CommentBox
                                                getComments={getComments}
                                                data={DataForTest}
                                                loaderComment={loaderComment}
                                                handleSubmit={handleSubmit}
                                                name={"demo2"}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <br></br>

                                <div>
                                    <div className="row">
                                        <div
                                            className="col-12"
                                            style={{
                                                fontSize: "18px",
                                                fontWeight: "600",
                                            }}
                                        >
                                            Business Outcome 3:
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="textarea-wrapper">
                                            <div style={{ width: "100%" }}>
                                                <textarea
                                                    onBlur={onBlurAutoSave}
                                                    style={{
                                                        minheight: "20px",
                                                    }}
                                                    wrap="soft"
                                                    onChange={onChangeBo3}
                                                    value={bo3}
                                                    className={DataForTest && DataForTest.feedback_edit_permission == true ? ` right_side autosize` : ` autosize right_side disable_span`}
                                                ></textarea>
                                            </div>
                                            <div className="commentBox-wrapper">
                                                <div class="circleBase type2">
                                                    {data.bo3 &&
                                                        data.bo3.length}
                                                </div>

                                                <CommentBox
                                                    getComments={getComments}
                                                    data={DataForTest}
                                                    loaderComment={
                                                        loaderComment
                                                    }
                                                    handleSubmit={handleSubmit}
                                                    name={"bo3"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                </div>

                                <div>
                                    <div className="row">
                                        <div
                                            className="col-12"
                                            style={{
                                                fontSize: "18px",
                                                fontWeight: "600",
                                            }}
                                        >
                                            Demo 3:
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="textarea-wrapper">
                                            <div style={{ width: "100%" }}>
                                                <textarea
                                                    onBlur={onBlurAutoSave}
                                                    style={{
                                                        minheight: "20px",
                                                    }}
                                                    onChange={onChangeDemo3}
                                                    value={demo3}
                                                    wrap="soft"
                                                    className={DataForTest && DataForTest.feedback_edit_permission == true ? ` right_side autosize` : ` autosize right_side disable_span`}
                                                ></textarea>
                                            </div>
                                            <div className="commentBox-wrapper">
                                                <div class="circleBase type2">
                                                    {data.demo3 &&
                                                        data.demo3.length}
                                                </div>
                                                <CommentBox
                                                    getComments={getComments}
                                                    data={DataForTest}
                                                    loaderComment={
                                                        loaderComment
                                                    }
                                                    handleSubmit={handleSubmit}
                                                    name={"demo3"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                </div>

                                <div>
                                    <div className="row">
                                        <div
                                            className="col-12"
                                            style={{
                                                fontSize: "18px",
                                                fontWeight: "600",
                                            }}
                                        >
                                            Business Outcome 4:
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="textarea-wrapper">
                                            <div style={{ width: "100%" }}>
                                                <textarea
                                                    onBlur={onBlurAutoSave}
                                                    style={{
                                                        minheight: "20px",
                                                    }}
                                                    wrap="soft"
                                                    onChange={onChangeBo4}
                                                    value={bo4}
                                                    className={DataForTest && DataForTest.feedback_edit_permission == true ? ` right_side autosize` : ` autosize right_side disable_span`}
                                                ></textarea>
                                            </div>
                                            <div className="commentBox-wrapper">
                                                <div class="circleBase type2">
                                                    {data.bo4 &&
                                                        data.bo4.length}
                                                </div>
                                                <CommentBox
                                                    getComments={getComments}
                                                    data={DataForTest}
                                                    loaderComment={
                                                        loaderComment
                                                    }
                                                    handleSubmit={handleSubmit}
                                                    name={"bo4"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                </div>

                                <div>
                                    <div className="row">
                                        <div
                                            className="col-12"
                                            style={{
                                                fontSize: "18px",
                                                fontWeight: "600",
                                            }}
                                        >
                                            Demo 4:
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="textarea-wrapper">
                                            <div style={{ width: "100%" }}>
                                                <textarea
                                                    onBlur={onBlurAutoSave}
                                                    style={{
                                                        minheight: "20px",
                                                    }}
                                                    onChange={onChangeDemo4}
                                                    value={demo4}
                                                    wrap="soft"
                                                    className={DataForTest && DataForTest.feedback_edit_permission == true ? ` right_side autosize` : ` autosize right_side disable_span`}
                                                />
                                            </div>
                                            <div className="commentBox-wrapper">
                                                <div class="circleBase type2">
                                                    {data.demo4 &&
                                                        data.demo4.length}
                                                </div>
                                                <CommentBox
                                                    getComments={getComments}
                                                    data={DataForTest}
                                                    loaderComment={
                                                        loaderComment
                                                    }
                                                    handleSubmit={handleSubmit}
                                                    name={"demo4"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                </div>
                                <div>
                                    <div className="row">
                                        <div
                                            className="col-12"
                                            style={{
                                                fontSize: "18px",
                                                fontWeight: "600",
                                            }}
                                        >
                                            Outro:
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="textarea-wrapper">
                                            <div style={{ width: "100%" }}>
                                                <textarea
                                                    onBlur={onBlurAutoSave}
                                                    style={{
                                                        minheight: "20px",
                                                    }}
                                                    onChange={onChangeOutro}
                                                    value={outro}
                                                    wrap="soft"
                                                    className={DataForTest && DataForTest.feedback_edit_permission == true ? ` right_side autosize` : ` autosize right_side disable_span`}
                                                />
                                            </div>
                                            <div className="commentBox-wrapper">
                                                <div class="circleBase type2">
                                                    {data.outro &&
                                                        data.outro.length}
                                                </div>
                                                <CommentBox
                                                    getComments={getComments}
                                                    data={DataForTest}
                                                    loaderComment={
                                                        loaderComment
                                                    }
                                                    handleSubmit={handleSubmit}
                                                    name={"outro"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                        <div className="col-4"></div>
                    </div>

                    <div>
                        <Modal
                            isOpen={getSavedDraft}
                            onRequestClose={() => {
                                setGetSavedDraft(false);
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
                                >{`${getSavedDraftMsg}`}</h5>
                            </div>

                            <div
                                className="pt-3"
                                style={{ float: "right", display: "flex" }}
                            >
                                <button
                                    onClick={() => {
                                        setGetSavedDraft(false);
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
                            isOpen={onSave}
                            onRequestClose={() => {
                                setOnSave(false);
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
                                >{`${onSaveMsg}`}</h5>
                            </div>

                            <div
                                className="pt-3"
                                style={{ float: "right", display: "flex" }}
                            >
                                <button
                                    onClick={() => {
                                        setOnSave(false);
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
                            isOpen={onSaveN}
                            onRequestClose={() => {
                                setOnSaveN(false);
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
                                >{`${onSaveMsgN}`}</h5>
                            </div>

                            <div
                                className="pt-3"
                                style={{ float: "right", display: "flex" }}
                            >
                                <button
                                    onClick={() => {
                                        setOnSaveN(false);
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
                </div>
            )}
        </div>
    );
}

export default EditDraft;
