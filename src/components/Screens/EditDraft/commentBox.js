import React, { useState, useEffect } from "react";
import logo from "../../assets/comment.png";
import deleteLogo from "../../assets/delete.png";
import Close from "../../assets/close_icon.svg";
import SendMessage from "../../assets/send-message.png"

import {
    AddComment,
    ClearAllComment,
    DeleteComment,
    GetSavedDraftEditingDetails,
} from "../../Services/Service";
import "../EditDraft/commentBox.css";

function CommentBox(props) {
    const [showData, setShowData] = useState(false);
    const [textareaname, setTextareaName] = useState("");
    const [text, setText] = useState("");
    const [intro, setIntro] = useState(false);
    const [bo1, setBo1] = useState(false);
    const [demo1, setDemo1] = useState(false);

    const [bo2, setBo2] = useState(false);
    const [demo2, setDemo2] = useState(false);

    const [bo3, setBo3] = useState(false);
    const [demo3, setDemo3] = useState(false);

    const [bo4, setBo4] = useState(false);
    const [demo4, setDemo4] = useState(false);
    const [outro, setOutro] = useState(false);
    const [delLoader, setDelLoader] = useState(false);
    const [draftId, setDraftId] = useState(
        localStorage.getItem("getDraftEditingbyid")
    );
    const [userData,setUserData]=useState(JSON.parse(localStorage.getItem("userData")));

    const toggleCommentBox = (name) => {
        if (name == "intro") {
            setIntro(!intro);
            setBo1(false);
            setBo2(false);
            setBo3(false);
            setBo4(false);
            setDemo1(false);
            setDemo2(false);
            setDemo3(false);
            setDemo4(false);
            setOutro(false);
        } else if (name == "bo1") {
            setIntro(false);
            setBo1(!bo1);
            setBo2(false);
            setBo3(false);
            setBo4(false);
            setDemo1(false);
            setDemo2(false);
            setDemo3(false);
            setDemo4(false);
            setOutro(false);
        } else if (name == "bo2") {
            setIntro(false);
            setBo1(false);
            setBo2(!bo2);
            setBo3(false);
            setBo4(false);
            setDemo1(false);
            setDemo2(false);
            setDemo3(false);
            setDemo4(false);
            setOutro(false);
        } else if (name == "bo3") {
            setIntro(false);
            setBo1(false);
            setBo2(false);
            setBo3(!bo3);
            setBo4(false);
            setDemo1(false);
            setDemo2(false);
            setDemo3(false);
            setDemo4(false);
            setOutro(false);
        } else if (name == "bo4") {
            setIntro(false);
            setBo1(false);
            setBo2(false);
            setBo3(false);
            setBo4(!bo4);
            setDemo1(false);
            setDemo2(false);
            setDemo3(false);
            setDemo4(false);
            setOutro(false);
        } else if (name == "demo1") {
            setIntro(false);
            setBo1(false);
            setBo2(false);
            setBo3(false);
            setBo4(false);
            setDemo1(!demo1);
            setDemo2(false);
            setDemo3(false);
            setDemo4(false);
            setOutro(false);
        } else if (name == "demo2") {
            setIntro(false);
            setBo1(false);
            setBo2(false);
            setBo3(false);
            setBo4(false);
            setDemo1(false);
            setDemo2(!demo2);
            setDemo3(false);
            setDemo4(false);
            setOutro(false);
        } else if (name == "demo3") {
            setIntro(false);
            setBo1(false);
            setBo2(false);
            setBo3(false);
            setBo4(false);
            setDemo1(false);
            setDemo2(false);
            setDemo3(!demo3);
            setDemo4(false);
            setOutro(false);
        } else if (name == "demo4") {
            setIntro(false);
            setBo1(false);
            setBo2(false);
            setBo3(false);
            setBo4(false);
            setDemo1(false);
            setDemo2(false);
            setDemo3(false);
            setDemo4(!demo4);
            setOutro(false);
        } else if (name == "outro") {
            setIntro(false);
            setBo1(false);
            setBo2(false);
            setBo3(false);
            setBo4(false);
            setDemo1(false);
            setDemo2(false);
            setDemo3(false);
            setDemo4(false);
            setOutro(!outro);
        }
    };
    useEffect(() => {}, []);
    function deleteComment(id) {
        DeleteComment(id).then((res) => {
            setDelLoader(true);
        });
    }
    function clearAllComments(id, name) {
        ClearAllComment(id, name);
    }
    const showComment = (name) => {
        showData ? setShowData(false) : setShowData(true);
        setTextareaName(name);
        toggleCommentBox(name);
    };

    function handleChange(e) {
        setText(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        setText("");

        props.handleSubmit(text, props.name);
    }
    const data = props.data&&props.data.comments;
    const loader = props.loaderComment;
const created_by=props.data&&props.data.created_by;
console.log("userdat",userData);
console.log("dratft dat",props.data);
const isClearAll=userData.permission.includes("All")||userData.permission.includes("Close Comment");
    return (
        <div>
            <div>
                <img
                    onClick={() => showComment(props.name)}
                    style={{ width: 25, cursor: "pointer" }}
                    src={logo}
                />
            </div>
            <div>
                {intro && textareaname == "intro" && (
                    <div
                        style={{ position: "absolute" }}
                        class={props.name}
                        className="card card-wrapper"
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginBottom: "10px",
                            }}
                        >
                            <img
                                onClick={() => {
                                    setIntro(false);
                                }}
                                width={20}
                                height={20}
                                src={Close}
                            />
                        </div>
                        <form
                            onSubmit={(e) => {
                                handleSubmit(e);
                            }}
                        >
                            {loader ? (
                                <div
                                    class="d-flex justify-content-center"
                                    style={{ marginTop: 5 }}
                                >
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <div style={{ marginBottom: 10,position:'relative' }}>
                                    <input
                                        value={text}
                                        type="text"
                                        onChange={handleChange}
                                        placeholder="Enter Comment"
                                        className="comment-input"
                                    />
                                  {text&&(<div style={{    position: "absolute",right: "6px", bottom: "9px",}}><img height="20vh" type="submit" src={SendMessage} onClick={(e) => {
                                handleSubmit(e);
                            }} /></div>)}  
                                </div>
                            )}
                            {data.intro &&
                                data.intro.map((e, index) => (
                                    <div>
                                        <span
                                            className="d-inline mt-0 pb-0"
                                            style={{
                                                fontSize: 16,
                                                color: "#000",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {e.user.name}{" "}
                                            <span
                                                style={{
                                                    fontSize: 12,
                                                    color: "gray",
                                                }}
                                            >
                                                {e.time}
                                            </span>
                                           {
                                            created_by===userData.name &&(
                                                 <span
                                                style={{
                                                    position: "absolute",
                                                    right: "10px",
                                                }}
                                            >
                                                <img
                                                    onClick={() => {
                                                        deleteComment(e.id);
                                                        props.getComments();
                                                    }}
                                                    width={20}
                                                    height={20}
                                                    src={deleteLogo}
                                                />
                                            </span>
                                            )
                                           }
                                        </span>
                                      
                                        <p>{e.comment}</p>

                                        {index != intro.length - 1 && (
                                            <hr className="m-0 mb-2"></hr>
                                        )}
                                    </div>
                                ))}
                        </form>
                        {
                            isClearAll&&(
                                <div>
                            <button
                                onClick={() => {
                                    clearAllComments(draftId, props.name);
                                    props.getComments();
                                    setIntro(false);
                                }}
                                style={{
                                    width: "100%",
                                    background: "white",
                                    color: "red",
                                    border: "1px solid red",
                                }}
                            >
                                Clear All
                            </button>
                        </div>
                            )
                        }
                        
                    </div>
                )}
                {bo1 && textareaname == "bo1" && (
                    <div
                        style={{ position: "absolute" }}
                        class={props.name}
                        className="card card-wrapper"
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginBottom: "10px",
                            }}
                        >
                            <img
                                onClick={() => {
                                    setBo1(false);
                                }}
                                width={20}
                                height={20}
                                src={Close}
                            />
                        </div>

                        <form
                            onSubmit={(e) => {
                                handleSubmit(e);
                            }}
                        >
                            {loader ? (
                                <div
                                    class="d-flex justify-content-center"
                                    style={{ marginTop: 5 }}
                                >
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <div style={{position:'relative'}}>
                                     <input
                                    style={{ marginBottom: 10 }}
                                    value={text}
                                    type="text"
                                    onChange={handleChange}
                                    placeholder="Enter Comment"
                                    className="comment-input"
                                />
                                  {text&&(<div style={{    position: "absolute",right: "6px", bottom: "18px",}}><img height="20vh" type="submit" src={SendMessage} onClick={(e) => {
                                handleSubmit(e);
                            }} /></div>)}
                                </div>
                               
                            )}
                            {data.bo1 &&
                                data.bo1.map((e, index) => (
                                    <div>
                                        <span
                                            className="d-inline mt-0 pb-0"
                                            style={{
                                                fontSize: 16,
                                                color: "#000",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {e.user.name}{" "}
                                            <span
                                                style={{
                                                    fontSize: 12,
                                                    color: "gray",
                                                }}
                                            >
                                                {e.time}
                                            </span>
                                        </span>
                                        {
                                            created_by===userData.name &&(
                                                 <span
                                                style={{
                                                    position: "absolute",
                                                    right: "10px",
                                                }}
                                            >
                                                <img
                                                    onClick={() => {
                                                        deleteComment(e.id);
                                                        props.getComments();
                                                    }}
                                                    width={20}
                                                    height={20}
                                                    src={deleteLogo}
                                                />
                                            </span>
                                            )
                                           }
                                        <p>{e.comment}</p>
                                        {index != data.bo1.length - 1 && (
                                            <hr className="m-0 mb-2"></hr>
                                        )}
                                    </div>
                                ))}
                        </form>
                        {
                            isClearAll&&( <div>
                                <button
                                    onClick={() => {
                                        clearAllComments(draftId, props.name);
                                        props.getComments();
                                        setBo1(false);
                                    }}
                                    style={{
                                        width: "100%",
                                        background: "white",
                                        color: "red",
                                        border: "1px solid red",
                                    }}
                                >
                                    Clear All
                                </button>
                            </div>)
                        }
                       
                    </div>
                )}
                {demo1 && textareaname == "demo1" && (
                    <div
                        style={{ position: "absolute" }}
                        class={props.name}
                        className="card card-wrapper"
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginBottom: "10px",
                            }}
                        >
                            <img
                                onClick={() => {
                                    setDemo1(false);
                                }}
                                width={20}
                                height={20}
                                src={Close}
                            />
                        </div>

                        <form
                            onSubmit={(e) => {
                                handleSubmit(e);
                            }}
                        >
                            {loader ? (
                                <div
                                    class="d-flex justify-content-center"
                                    style={{ marginTop: 5 }}
                                >
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <div style={{position:'relative'}}>
                                     <input
                                    style={{ marginBottom: 10 }}
                                    type="text"
                                    value={text}
                                    onChange={handleChange}
                                    placeholder="Enter Comment"
                                    className="comment-input"
                                />
                                 {text&&(<div style={{  cursor: 'pointer', position: "absolute",right: "6px", bottom: "18px",}}><img height="20vh" type="submit" src={SendMessage} onClick={(e) => {
                                handleSubmit(e);
                            }} /></div>)}
                                </div>
                               
                            )}
                            {data.demo1 &&
                                data.demo1.map((e, index) => (
                                    <div>
                                        <span
                                            className="d-inline mt-0 pb-0"
                                            style={{
                                                fontSize: 16,
                                                color: "#000",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {e.user.name}{" "}
                                            <span
                                                style={{
                                                    fontSize: 12,
                                                    color: "gray",
                                                }}
                                            >
                                                {e.time}
                                            </span>
                                        </span>
                                        {
                                            created_by===userData.name &&(
                                                 <span
                                                style={{
                                                    position: "absolute",
                                                    right: "10px",
                                                }}
                                            >
                                                <img
                                                    onClick={() => {
                                                        deleteComment(e.id);
                                                        props.getComments();
                                                    }}
                                                    width={20}
                                                    height={20}
                                                    src={deleteLogo}
                                                />
                                            </span>
                                            )
                                           }
                                        <p>{e.comment}</p>
                                        {index != data.demo1.length - 1 && (
                                            <hr className="m-0 mb-2"></hr>
                                        )}
                                    </div>
                                ))}
                        </form>
                        {isClearAll&&(<div>
                            <button
                                onClick={() => {
                                    clearAllComments(draftId, props.name);
                                    props.getComments();
                                    setDemo1(false);
                                }}
                                style={{
                                    width: "100%",
                                    background: "white",
                                    color: "red",
                                    border: "1px solid red",
                                }}
                            >
                                Clear All
                            </button>
                        </div>)}
                        
                    </div>
                )}
                {bo2 && textareaname == "bo2" && (
                    <div
                        style={{ position: "absolute" }}
                        class={props.name}
                        className="card card-wrapper"
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginBottom: "10px",
                            }}
                        >
                            <img
                                onClick={() => {
                                    setBo2(false);
                                }}
                                width={20}
                                height={20}
                                src={Close}
                            />
                        </div>
                        <form
                            onSubmit={(e) => {
                                handleSubmit(e);
                            }}
                        >
                            {loader ? (
                                <div
                                    class="d-flex justify-content-center"
                                    style={{ marginTop: 5 }}
                                >
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <div style={{position:'relative'}}>
                                     <input
                                    style={{ marginBottom: 10 }}
                                    type="text"
                                    value={text}
                                    onChange={handleChange}
                                    placeholder="Enter Comment"
                                    className="comment-input"
                                />
                                  {text&&(<div style={{  cursor: 'pointer', position: "absolute",right: "6px", bottom: "18px",}}><img height="20vh" type="submit" src={SendMessage} onClick={(e) => {
                                handleSubmit(e);
                            }} /></div>)}
                                </div>
                               
                            )}
                            {data.bo2 &&
                                data.bo2.map((e, index) => (
                                    <div>
                                        <span
                                            className="d-inline mt-0 pb-0"
                                            style={{
                                                fontSize: 16,
                                                color: "#000",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {e.user.name}{" "}
                                            <span
                                                style={{
                                                    fontSize: 12,
                                                    color: "gray",
                                                }}
                                            >
                                                {e.time}
                                            </span>
                                        </span>
                                        {
                                            created_by===userData.name &&(
                                                 <span
                                                style={{
                                                    position: "absolute",
                                                    right: "10px",
                                                }}
                                            >
                                                <img
                                                    onClick={() => {
                                                        deleteComment(e.id);
                                                        props.getComments();
                                                    }}
                                                    width={20}
                                                    height={20}
                                                    src={deleteLogo}
                                                />
                                            </span>
                                            )
                                           }
                                       {
                                            created_by===userData.name &&(
                                                 <span
                                                style={{
                                                    position: "absolute",
                                                    right: "10px",
                                                }}
                                            >
                                                <img
                                                    onClick={() => {
                                                        deleteComment(e.id);
                                                        props.getComments();
                                                    }}
                                                    width={20}
                                                    height={20}
                                                    src={deleteLogo}
                                                />
                                            </span>
                                            )
                                           }
                                        <p>{e.comment}</p>
                                        {index != data.bo2.length - 1 && (
                                            <hr className="m-0 mb-2"></hr>
                                        )}
                                    </div>
                                ))}
                        </form>
                        {isClearAll&&( <div>
                            <button
                                onClick={() => {
                                    clearAllComments(draftId, props.name);
                                    props.getComments();
                                    setBo2(false);
                                }}
                                style={{
                                    width: "100%",
                                    background: "white",
                                    color: "red",
                                    border: "1px solid red",
                                }}
                            >
                                Clear All
                            </button>
                        </div>)}
                       
                    </div>
                )}
                {demo2 && textareaname == "demo2" && (
                    <div
                        style={{ position: "absolute" }}
                        class={props.name}
                        className="card card-wrapper"
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginBottom: "10px",
                            }}
                        >
                            <img
                                onClick={() => {
                                    setDemo2(false);
                                }}
                                width={20}
                                height={20}
                                src={Close}
                            />
                        </div>
                        <form
                            onSubmit={(e) => {
                                handleSubmit(e);
                            }}
                        >
                            {loader ? (
                                <div
                                    class="d-flex justify-content-center"
                                    style={{ marginTop: 5 }}
                                >
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <div style={{position:'relative'}}>
                                    <input
                                    style={{ marginBottom: 10 }}
                                    type="text"
                                    value={text}
                                    onChange={handleChange}
                                    placeholder="Enter Comment"
                                    className="comment-input"
                                />
                                 {text&&(<div style={{  cursor: 'pointer', position: "absolute",right: "6px", bottom: "18px",}}><img height="20vh" type="submit" src={SendMessage} onClick={(e) => {
                                handleSubmit(e);
                            }} /></div>)}
                                </div>
                                
                            )}
                            {data.demo2 &&
                                data.demo2.map((e, index) => (
                                    <div>
                                        <span
                                            className="d-inline mt-0 pb-0"
                                            style={{
                                                fontSize: 16,
                                                color: "#000",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {e.user.name}{" "}
                                            <span
                                                style={{
                                                    fontSize: 12,
                                                    color: "gray",
                                                }}
                                            >
                                                {e.time}
                                            </span>
                                        </span>
                                        {
                                            created_by===userData.name &&(
                                                 <span
                                                style={{
                                                    position: "absolute",
                                                    right: "10px",
                                                }}
                                            >
                                                <img
                                                    onClick={() => {
                                                        deleteComment(e.id);
                                                        props.getComments();
                                                    }}
                                                    width={20}
                                                    height={20}
                                                    src={deleteLogo}
                                                />
                                            </span>
                                            )
                                           }
                                        <p>{e.comment}</p>
                                        {index != data.demo2.length - 1 && (
                                            <hr className="m-0 mb-2"></hr>
                                        )}
                                    </div>
                                ))}
                        </form>
                        {isClearAll&&(
                            <div>
                            <button
                                onClick={() => {
                                    clearAllComments(draftId, props.name);
                                    props.getComments();
                                    setDemo2(false);
                                }}
                                style={{
                                    width: "100%",
                                    background: "white",
                                    color: "red",
                                    border: "1px solid red",
                                }}
                            >
                                Clear All
                            </button>
                        </div>
                        )}
                        
                    </div>
                )}
                {bo3 && textareaname == "bo3" && (
                    <div
                        style={{ position: "absolute" }}
                        class={props.name}
                        className="card card-wrapper"
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginBottom: "10px",
                            }}
                        >
                            <img
                                onClick={() => {
                                    setBo3(false);
                                }}
                                width={20}
                                height={20}
                                src={Close}
                            />
                        </div>
                        <form
                            onSubmit={(e) => {
                                handleSubmit(e);
                            }}
                        >
                            {loader ? (
                                <div
                                    class="d-flex justify-content-center"
                                    style={{ marginTop: 5 }}
                                >
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <div style={{position:'relative'}}>
                                    <input
                                    style={{ marginBottom: 10 }}
                                    type="text"
                                    value={text}
                                    onChange={handleChange}
                                    placeholder="Enter Comment"
                                    className="comment-input"
                                />
                                 {text&&(<div style={{  cursor: 'pointer', position: "absolute",right: "6px", bottom: "18px",}}><img height="20vh" type="submit" src={SendMessage} onClick={(e) => {
                                handleSubmit(e);
                            }} /></div>)}
                                </div>
                            )}
                            {data.bo3 &&
                                data.bo3.map((e, index) => (
                                    <div>
                                        <span
                                            className="d-inline mt-0 pb-0"
                                            style={{
                                                fontSize: 16,
                                                color: "#000",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {e.user.name}{" "}
                                            <span
                                                style={{
                                                    fontSize: 12,
                                                    color: "gray",
                                                }}
                                            >
                                                {e.time}
                                            </span>
                                        </span>
                                        {
                                            created_by===userData.name &&(
                                                 <span
                                                style={{
                                                    position: "absolute",
                                                    right: "10px",
                                                }}
                                            >
                                                <img
                                                    onClick={() => {
                                                        deleteComment(e.id);
                                                        props.getComments();
                                                    }}
                                                    width={20}
                                                    height={20}
                                                    src={deleteLogo}
                                                />
                                            </span>
                                            )
                                           }
                                        <p>{e.comment}</p>
                                        {index != data.bo3.length - 1 && (
                                            <hr className="m-0 mb-2"></hr>
                                        )}
                                    </div>
                                ))}
                        </form>
                        {
                            isClearAll&&( <div>
                                <button
                                    onClick={() => {
                                        clearAllComments(draftId, props.name);
                                        props.getComments();
                                        setBo3(false);
                                    }}
                                    style={{
                                        width: "100%",
                                        background: "white",
                                        color: "red",
                                        border: "1px solid red",
                                    }}
                                >
                                    Clear All
                                </button>
                            </div>)
                        }
                       
                    </div>
                )}
                {demo3 && textareaname == "demo3" && (
                    <div
                        style={{ position: "absolute" }}
                        class={props.name}
                        className="card card-wrapper"
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginBottom: "10px",
                            }}
                        >
                            <img
                                onClick={() => {
                                    setDemo3(false);
                                }}
                                width={20}
                                height={20}
                                src={Close}
                            />
                        </div>
                        <form
                            onSubmit={(e) => {
                                handleSubmit(e);
                            }}
                        >
                            {loader ? (
                                <div
                                    class="d-flex justify-content-center"
                                    style={{ marginTop: 5 }}
                                >
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <div style={{position:'relative'}}>
                                    <input
                                    style={{ marginBottom: 10 }}
                                    type="text"
                                    value={text}
                                    onChange={handleChange}
                                    placeholder="Enter Comment"
                                    className="comment-input"
                                />
                                 {text&&(<div style={{  cursor: 'pointer', position: "absolute",right: "6px", bottom: "18px",}}><img height="20vh" type="submit" src={SendMessage} onClick={(e) => {
                                handleSubmit(e);
                            }} /></div>)}
                                </div>
                            )}
                            {data.demo3 &&
                                data.demo3.map((e, index) => (
                                    <div>
                                        <span
                                            className="d-inline mt-0 pb-0"
                                            style={{
                                                fontSize: 16,
                                                color: "#000",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {e.user.name}{" "}
                                            <span
                                                style={{
                                                    fontSize: 12,
                                                    color: "gray",
                                                }}
                                            >
                                                {e.time}
                                            </span>
                                        </span>
                                        {
                                            created_by===userData.name &&(
                                                 <span
                                                style={{
                                                    position: "absolute",
                                                    right: "10px",
                                                }}
                                            >
                                                <img
                                                    onClick={() => {
                                                        deleteComment(e.id);
                                                        props.getComments();
                                                    }}
                                                    width={20}
                                                    height={20}
                                                    src={deleteLogo}
                                                />
                                            </span>
                                            )
                                           }
                                        <p>{e.comment}</p>
                                        {index != data.demo3.length - 1 && (
                                            <hr className="m-0 mb-2"></hr>
                                        )}
                                    </div>
                                ))}
                        </form>
                        {isClearAll&&(
                             <div>
                             <button
                                 onClick={() => {
                                     clearAllComments(draftId, props.name);
                                     props.getComments();
                                     setDemo3(false);
                                 }}
                                 style={{
                                     width: "100%",
                                     background: "white",
                                     color: "red",
                                     border: "1px solid red",
                                 }}
                             >
                                 Clear All
                             </button>
                         </div>
                        )}
                       
                    </div>
                )}
                {bo4 && textareaname == "bo4" && (
                    <div
                        style={{ position: "absolute" }}
                        class={props.name}
                        className="card card-wrapper"
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginBottom: "10px",
                            }}
                        >
                            <img
                                onClick={() => {
                                    setBo4(false);
                                }}
                                width={20}
                                height={20}
                                src={Close}
                            />
                        </div>
                        <form
                            onSubmit={(e) => {
                                handleSubmit(e);
                            }}
                        >
                            {loader ? (
                                <div
                                    class="d-flex justify-content-center"
                                    style={{ marginTop: 5 }}
                                >
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <div style={{position:'relative'}}>
                                    <input
                                    style={{ marginBottom: 10 }}
                                    type="text"
                                    value={text}
                                    onChange={handleChange}
                                    placeholder="Enter Comment"
                                    className="comment-input"
                                />
                                 {text&&(<div style={{  cursor: 'pointer', position: "absolute",right: "6px", bottom: "18px",}}><img height="20vh" type="submit" src={SendMessage} onClick={(e) => {
                                handleSubmit(e);
                            }} /></div>)}
                                </div>
                            )}
                            {data.bo4 &&
                                data.bo4.map((e, index) => (
                                    <div>
                                        <span
                                            className="d-inline mt-0 pb-0"
                                            style={{
                                                fontSize: 16,
                                                color: "#000",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {e.user.name}{" "}
                                            <span
                                                style={{
                                                    fontSize: 12,
                                                    color: "gray",
                                                }}
                                            >
                                                {e.time}
                                            </span>
                                        </span>
                                        {
                                            created_by===userData.name &&(
                                                 <span
                                                style={{
                                                    position: "absolute",
                                                    right: "10px",
                                                }}
                                            >
                                                <img
                                                    onClick={() => {
                                                        deleteComment(e.id);
                                                        props.getComments();
                                                    }}
                                                    width={20}
                                                    height={20}
                                                    src={deleteLogo}
                                                />
                                            </span>
                                            )
                                           }
                                        <p>{e.comment}</p>
                                        {index != data.bo4.length - 1 && (
                                            <hr className="m-0 mb-2"></hr>
                                        )}
                                    </div>
                                ))}
                        </form>
                        {isClearAll&&(
                            <div>
                            <button
                                onClick={() => {
                                    clearAllComments(draftId, props.name);
                                    props.getComments();
                                    setBo4(false);
                                }}
                                style={{
                                    width: "100%",
                                    background: "white",
                                    color: "red",
                                    border: "1px solid red",
                                }}
                            >
                                Clear All
                            </button>
                        </div>
                        )}
                        
                    </div>
                )}
                {demo4 && textareaname == "demo4" && (
                    <div
                        style={{ position: "absolute" }}
                        class={props.name}
                        className="card card-wrapper"
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginBottom: "10px",
                            }}
                        >
                            <img
                                onClick={() => {
                                    setDemo4(false);
                                }}
                                width={20}
                                height={20}
                                src={Close}
                            />
                        </div>
                        <form
                            onSubmit={(e) => {
                                console.log("demo4");
                                handleSubmit(e);
                            }}
                        >
                            {loader ? (
                                <div
                                    class="d-flex justify-content-center"
                                    style={{ marginTop: 5 }}
                                >
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <div style={{position:'relative'}}>
                                    <input
                                    style={{ marginBottom: 10 }}
                                    type="text"
                                    value={text}
                                    onChange={handleChange}
                                    placeholder="Enter Comment"
                                    className="comment-input"
                                />
                                 {text&&(<div style={{  cursor: 'pointer', position: "absolute",right: "6px", bottom: "18px",}}><img height="20vh" type="submit" src={SendMessage} onClick={(e) => {
                                handleSubmit(e);
                            }} /></div>)}
                                </div>
                            )}
                            {data.demo4 &&
                                data.demo4.map((e, index) => (
                                    <div>
                                        <span
                                            className="d-inline mt-0 pb-0"
                                            style={{
                                                fontSize: 16,
                                                color: "#000",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {e.user.name}{" "}
                                            <span
                                                style={{
                                                    fontSize: 12,
                                                    color: "gray",
                                                }}
                                            >
                                                {e.time}
                                            </span>
                                        </span>
                                        {
                                            created_by===userData.name &&(
                                                 <span
                                                style={{
                                                    position: "absolute",
                                                    right: "10px",
                                                }}
                                            >
                                                <img
                                                    onClick={() => {
                                                        deleteComment(e.id);
                                                        props.getComments();
                                                    }}
                                                    width={20}
                                                    height={20}
                                                    src={deleteLogo}
                                                />
                                            </span>
                                            )
                                           }
                                        <p>{e.comment}</p>
                                        {index != data.demo4.length - 1 && (
                                            <hr className="m-0 mb-2"></hr>
                                        )}
                                    </div>
                                ))}
                        </form>
                        {isClearAll&&(
  <div>
  <button
      onClick={() => {
          clearAllComments(draftId, props.name);
          props.getComments();
          setDemo4(false);
      }}
      style={{
          width: "100%",
          background: "white",
          color: "red",
          border: "1px solid red",
      }}
  >
      Clear All
  </button>
</div>
                        )}
                      
                    </div>
                )}
                {outro && textareaname == "outro" && (
                    <div
                        style={{ position: "absolute" }}
                        class={props.name}
                        className="card card-wrapper"
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginBottom: "10px",
                            }}
                        >
                            <img
                                onClick={() => {
                                    setOutro(false);
                                }}
                                width={20}
                                height={20}
                                src={Close}
                            />
                        </div>
                        <form
                            onSubmit={(e) => {
                                handleSubmit(e);
                            }}
                        >
                            {loader ? (
                                <div
                                    class="d-flex justify-content-center"
                                    style={{ marginTop: 5 }}
                                >
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <div style={{position:'relative'}}>
                                <input
                                style={{ marginBottom: 10 }}
                                type="text"
                                value={text}
                                onChange={handleChange}
                                placeholder="Enter Comment"
                                className="comment-input"
                            />
                             {text&&(<div style={{  cursor: 'pointer', position: "absolute",right: "6px", bottom: "18px",}}><img height="20vh" type="submit" src={SendMessage} onClick={(e) => {
                            handleSubmit(e);
                        }} /></div>)}
                            </div>
                            )}
                            {data.outro &&
                                data.outro.map((e, index) => (
                                    <div>
                                        <span
                                            className="d-inline mt-0 pb-0"
                                            style={{
                                                fontSize: 16,
                                                color: "#000",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {e.user.name}{" "}
                                            <span
                                                style={{
                                                    fontSize: 12,
                                                    color: "gray",
                                                }}
                                            >
                                                {e.time}
                                            </span>
                                        </span>
                                        {
                                            created_by===userData.name &&(
                                                 <span
                                                style={{
                                                    position: "absolute",
                                                    right: "10px",
                                                }}
                                            >
                                                <img
                                                    onClick={() => {
                                                        deleteComment(e.id);
                                                        props.getComments();
                                                    }}
                                                    width={20}
                                                    height={20}
                                                    src={deleteLogo}
                                                />
                                            </span>
                                            )
                                           }
                                        <p>{e.comment}</p>
                                        {index != data.outro.length - 1 && (
                                            <hr className="m-0 mb-2"></hr>
                                        )}
                                    </div>
                                ))}
                        </form>
                        {isClearAll&&(
  <div>
  <button
      onClick={() => {
          clearAllComments(draftId, props.name);
          props.getComments();
          setOutro(false);
      }}
      style={{
          width: "100%",
          background: "white",
          color: "red",
          border: "1px solid red",
      }}
  >
      Clear All
  </button>
</div>
                        )}
                      
                    </div>
                )}
            </div>
        </div>
    );
}

export default CommentBox;
