import React, { useEffect, useState } from "react";
import threeDotsertical from "../../assets/three-dots-vertical.svg";
import ToriLogo from "../../assets/tori_logo.svg";

import {
    GetAllUsers,
    InviteUser,
    DeleteUser,
    ChangePermission,
    ChangeName,
    GetUserData,
} from "../../../components/Services/Service";
import { MDBDataTable } from "mdbreact";
import { useHistory } from "react-router-dom";
import "../DraftTable/Style.css";
import Modal from "react-modal";
import Multiselect from "multiselect-react-dropdown";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Select from "react-select";
import logo from "../../assets/logo.png";
import LoadingSpinner from "../../assets/loader.gif";
import { message } from "laravel-mix/src/Log";

// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';

function Admin(props) {
    let history = useHistory();
    const [dataa, setData] = useState([]);
    const [loader, setLoader] = useState(true);
    const [loaderInviteUser, isloadingInvite] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpen2, setIsOpen2] = useState(false);
    const [modalIsOpen3, setIsOpen3] = useState(false);
    const [modalIsOpen4, setIsOpen4] = useState(false);
    const [modal1, setModal1] = useState(false);
    const [modalMessage1, setModalMessage1] = useState("");
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [lastName, setLastName] = useState();
    const [role, setRole] = useState();
    const [permission, setPermission] = useState([]);
    const [selectedRowId, setselectedRowId] = useState();
    const [rePermission, setRePermission] = useState();
    const [reName, setReName] = useState();
    const [loaderChangePermission, setloaderChangePermission] = useState(false);
    const [loaderChangeName, setloaderChangeName] = useState(false);
    const [loaderConfirmDel, setloaderConfirmDel] = useState(false);

    const [confirmDel, setConfirmDel] = useState(false);
    const [confirmDelMsg, setConfirmDelMsg] = useState("");
    const [changePermission, setChangePermission] = useState(false);
    const [changePermissionMsg, setChangePermissionMsg] = useState("");
    const [changeName, setChangeName] = useState(false);
    const [changeNameMsg, setChangeNameMsg] = useState("");
    const [anchorEl, setAnchorEl] = useState();
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl();
    };
    const onChangeUser = (e) => {
        setUserName(e.target.value);
    };
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangeLastName = (e) => {
        setLastName(e.target.value);
    };
    const onChangeRole = (e) => {
        setRole(e.target.value);
    };
    const onReChangepermission = (e) => {
        setRePermission(e.target.value);
    };
    useEffect(() => {
        setLoader(true);
        GetAllUsers().then((res) => {
            if (res.success) {
                setData(res.data);
                setLoader(false);
            } else {
                setLoader(false);
            }
        });
    }, []);

    function closeModal() {
        setIsOpen(false);
    }
    function closeModal2() {
        setIsOpen2(false);
    }
    function closeModal3() {
        setIsOpen3(false);
    }
    function openModal() {
        setIsOpen(true);
    }
    const onSendInvite = () => {
        console.log("Selkectk-0-0", permission);
        isloadingInvite(true);
        InviteUser(userName, email, lastName, role, permission).then((res) => {
            if (res.success) {
                isloadingInvite(false);
                updateSidebar();
                location.reload();
                setIsOpen(false);
            } else {
                isloadingInvite(false);
                setModalMessage1(res.message);
                setModal1(true);
                setIsOpen(false);
                // alert(res.message)
            }
        });
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
            overflow: 'unset',
        },
    };

    const data = () => ({
        columns: [],
        rows: dataa,
    });
    const ActionClick = (id) => {
        setselectedRowId(id);
    };
    const NameClick = (id) => { };
    const onDeleteEntry = () => {
        setIsOpen4(true);
    };
    const updateSidebar = () => {
        GetUserData().then((res) => {
            if (res.success) {
                localStorage.setItem("userData", JSON.stringify(res.data));
            }
        });
    };
    const onConfirmDel = () => {
        setloaderConfirmDel(true);
        DeleteUser(selectedRowId).then((res) => {
            if (res.success) {
                setloaderConfirmDel(false);
                updateSidebar();
                location.reload();
                setIsOpen4(false);
            } else {
                setloaderConfirmDel(false);
                // alert(res.message);
                setConfirmDel(false);
                setConfirmDelMsg(res.message);
            }
        });
    };
    const onEditPress = () => {
        setIsOpen3(true);
    };
    const closeModal4 = () => {
        setIsOpen4(false);
    };
    const onClickChangePermission = () => {
        console.log("1", rePermission);
        console.log("2", selectedRowId);
        setloaderChangePermission(true);
        ChangePermission(selectedRowId, rePermission).then((res) => {
            if (res.success) {
                setloaderChangePermission(false);
                setIsOpen2(false);
                location.reload();
            } else {
                setloaderChangePermission(false);
                setIsOpen2(false);
                setChangePermission(true);
                setChangePermissionMsg(res.message);
                // alert(res.message);
            }
        });
    };
    const onClickChangeName = () => {
        setloaderChangeName(true);
        ChangeName(selectedRowId, reName).then((res) => {
            if (res.success) {
                setloaderChangeName(false);
                location.reload();
            } else {
                setloaderChangeName(false);
                setChangeName(true);
                setIsOpen3(false);
                setChangeNameMsg(res.message);
                // alert(res.message);
            }
        });
    };
    const onChangePermission = () => {
        setIsOpen2(true);
    };
    const onChangeReName = (e) => {
        setReName(e.target.value);
    };

    const linksData = {
        columns: [
            {
                label: "Name",
                field: "name",
                sort: "asc",
                width: 100,
            },
            {
                label: "Email",
                field: "email",
            },
            {
                label: "Role",
                field: "role",
                sort: "asc",
                width: 150,
            },
            {
                label: "Permission",
                field: "permission",
                sort: "asc",
                width: 80,
            },
            {
                label: "Status",
                field: "status",
            },
            {
                label: "",
                field: "dot",
            },
        ],
        rows: [
            ...data().rows.map((row, order) => ({
                name: (
                    <span style={{ cursor: "pointer" }}>
                        <span>{row.name}</span>
                    </span>
                ),
                email: (
                    <a
                        style={{ cursor: "pointer" }}
                        onClick={() => NameClick(row.id)}
                    >
                        <span>{row.email}</span>
                    </a>
                ),
                role: (
                    <span>
                        <span>{row.role}</span>
                    </span>
                ),
                permission: (
                    <span>
                        <span>{row.permission}</span>
                    </span>
                ),
                status: (
                    <a
                        className={
                            row.status == "Active"
                                ? "ActiveClass"
                                : "InActiveClass"
                        }
                        style={{ textDecoration: "none", color: "#000" }}
                    >
                        <span>{row.status}</span>
                    </a>
                ),
                dot: (
                    <a
                        style={{ cursor: "pointer" }}
                        onClick={() => ActionClick(row.id)}
                    >
                        <Tooltip title="More" style={{ overflow: "hidden" }}>
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                aria-controls={
                                    open ? "account-menu" : undefined
                                }
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                            >
                                <img
                                    style={{ width: 14 }}
                                    src={threeDotsertical}
                                />
                            </IconButton>
                        </Tooltip>
                    </a>
                ),
            })),
        ],
    };
    const options = [
        { value: 0, label: "Edit" },
        { value: 1, label: "Create Draft & Comment" },
        { value: 2, label: "Close Comment" },
    ];
    const optionsForRole = [
        { value: 0, label: "Editor" },
        { value: 1, label: "Hub Lead" },
        { value: 2, label: "SME" },
    ];
    // const defaultValue = [{ value: 1, label: "Comment Only & Create Draft" }]
    var multiArr = [];
    var multiArr2 = [];
    const onSelectMultiPermission = (e) => {
        var val = e;
        val.map((a) => {
            multiArr.push(a.label);
        });
        setPermission(multiArr);
    };
    const onSelectMultiRole = (e) => {
        var val = e;
        setRole(val.label);
    };
    const onSelectMultiPermission2 = (e) => {
        var val = e;
        val.map((a) => {
            multiArr2.push(a.label);
        });
        setRePermission(multiArr2);
    };

    return (
        <div>
            <div
                className="pt-3 pb-3"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "end" }}
            >
                <h3 style={{ fontWeight: "bolder" }}>Admin</h3>
                <button
                    onClick={openModal}
                    style={{ height: 36, marginTop: 8 }}
                    className="btn btn-primary primaryButton"
                >
                    Invite user
                </button>
            </div>
            {loader ? (
                <div className="loader_center">
                    <img width={70} height={70} src={LoadingSpinner} />
                </div>
            ) : (
                <div className="box_s">
                    <div>
                        <MDBDataTable
                            noBottomColumns={true}
                            fixedHeader
                            bordered={false}
                            paginationLabel={["<", ">"]}
                            entriesOptions={[5, 20, 25]}
                            pagesAmount={4}
                            data={linksData}
                            sortRows={["links"]}
                            materialSearch
                            className="your-custom-styles"
                        />
                    </div>
                </div>
            )}

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <MenuItem onClick={onChangePermission}>
                    Change Permission
                </MenuItem>
                <MenuItem onClick={onEditPress}>Edit Name</MenuItem>
                <MenuItem onClick={onDeleteEntry}>Delete</MenuItem>
            </Menu>

            <div>
                <Modal
                    isOpen={modal1}
                    onRequestClose={() => {
                        setModal1(false);
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
                        >{`${modalMessage1}`}</h5>
                    </div>

                    <div
                        className="pt-3"
                        style={{ float: "right", display: "flex" }}
                    >
                        <button
                            onClick={() => {
                                setModal1(false);
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
                    isOpen={changePermission}
                    onRequestClose={() => {
                        setChangePermission(false);
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
                        >{`${changePermissionMsg}`}</h5>
                    </div>

                    <div
                        className="pt-3"
                        style={{ float: "right", display: "flex" }}
                    >
                        <button
                            onClick={() => {
                                setChangePermission(false);
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
                    isOpen={changeName}
                    onRequestClose={() => {
                        setChangeName(false);
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
                        >{`${changeNameMsg}`}</h5>
                    </div>

                    <div
                        className="pt-3"
                        style={{ float: "right", display: "flex" }}
                    >
                        <button
                            onClick={() => {
                                setChangeName(false);
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
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div className="hide_scroll">
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
                                Invite User
                            </h5>
                        </div>
                        <div style={{ padding: 20 }}>
                            <div className="row p-0">
                                <div
                                    className="col-6 pl-0"
                                    style={{ paddingLeft: 0 }}
                                >
                                    <div>
                                        <label for="exampleInputEmail1">
                                            First Name
                                        </label>
                                        <input
                                            type="email"
                                            onChange={onChangeUser}
                                            style={{ height: 40 }}
                                            class="form-control form-control-lg"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter First Name"
                                        />
                                    </div>
                                </div>
                                <div className="col-6" style={{ paddingRight: 0 }}>
                                    <div>
                                        <label for="exampleInputEmail1">
                                            Last Name
                                        </label>
                                        <input
                                            type="email"
                                            onChange={onChangeLastName}
                                            style={{ height: 40 }}
                                            class="form-control form-control-lg"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter Last Name"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label for="exampleInputEmail1">Email</label>
                                <input
                                    type="text"
                                    onChange={onChangeEmail}
                                    style={{ height: 40 }}
                                    class="form-control form-control-lg"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter Email"
                                />
                            </div>
                            <div>
                                <label for="exampleInputEmail1">Role</label>
                                {/* <select
                                    onClick={onChangeRole}
                                    style={{ height: 40 }}
                                    class="form-control"
                                    placeholder="Select or begin typing"
                                >
                                    <option style={{ fontSize: '14px' }} disabled selected>
                                        Choose Role
                                    </option>
                                    <option style={{ fontSize: '14px' }}>Editor</option>
                                    <option style={{ fontSize: '14px' }}>Hub Lead</option>
                                    <option style={{ fontSize: '14px' }}>SME</option>
                                </select> */}
                                <Select
                                    onChange={onSelectMultiRole}
                                    options={optionsForRole}
                                    // value={permission?permission:defaultValue}
                                    // defaultValue={defaultValue}
                                    placeholder="Select or begin typing"
                                />
                            </div>
                            <div>
                                <label for="exampleInputEmail1">Permission</label>
                                <Select
                                    onChange={onSelectMultiPermission}
                                    options={options}
                                    // value={permission?permission:defaultValue}
                                    // defaultValue={defaultValue}
                                    isMulti
                                    placeholder="Select or begin typing"
                                />
                            </div>
                        </div>

                        <div
                            className="pt-3"
                            style={{ float: "right", display: "flex", alignItems: 'center' }}
                        >
                            <div style={{ marginRight: 10, }}>
                                <button
                                    onClick={closeModal}
                                    className="btn btn-primary primaryButtonWhiteBg"
                                >
                                    Cancel
                                </button>
                            </div>
                            <div>
                                {loaderInviteUser ? (
                                    <div
                                        class="spinner-border text-dark"
                                        role="status"
                                    >
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                ) : (
                                    <button
                                        style={{ height: "34px" }}
                                        onClick={onSendInvite}
                                        className="btn btn-primary primaryButton"
                                    >
                                        Send Invite
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
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
                            Change Permission
                        </h5>
                    </div>
                    <div style={{ padding: 20 }}>
                        <div>
                            <label for="exampleInputEmail1">Permission</label>
                            <Select
                                onChange={onSelectMultiPermission2}
                                options={options}
                                isMulti
                                placeholder="Select or begin typing"
                            />
                        </div>
                    </div>

                    <div
                        className="pt-3"
                        style={{ float: "right", display: "flex" }}
                    >
                        <div style={{ marginRight: 10 }}>
                            <button
                                onClick={closeModal2}
                                className="btn btn-primary primaryButtonWhiteBg"
                            >
                                Cancel
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={onClickChangePermission}
                                style={{ height: "34px" }}
                                className="btn btn-primary primaryButton"
                            >
                                {loaderChangePermission ? (
                                    <div
                                        class="spinner-border text-dark"
                                        role="status"
                                    >
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                ) : (
                                    <span> Change</span>
                                )}
                            </button>
                        </div>
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
                            Edit Name
                        </h5>
                    </div>
                    <div style={{ padding: 20 }}>
                        <div>
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                onChange={onChangeReName}
                                class="form-control"
                            />
                        </div>
                    </div>

                    <div
                        className="pt-3"
                        style={{ float: "right", display: "flex" }}
                    >
                        <div style={{ marginRight: 10 }}>
                            <button
                                onClick={closeModal3}
                                className="btn btn-primary primaryButtonWhiteBg"
                            >
                                Cancel
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={onClickChangeName}
                                style={{ height: "34px" }}
                                className="btn btn-primary primaryButton"
                            >
                                {loaderChangeName ? (
                                    <div
                                        class="spinner-border text-dark"
                                        role="status"
                                    >
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                ) : (
                                    <span>Change</span>
                                )}
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
            <div>
                <Modal
                    isOpen={modalIsOpen4}
                    onRequestClose={closeModal4}
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
                            Delete User
                        </h5>
                    </div>

                    <h6>Are you sure you want to delete this User?</h6>
                    <div
                        className="pt-3"
                        style={{ float: "right", display: "flex" }}
                    >
                        <div style={{ marginRight: 10 }}>
                            <button
                                onClick={closeModal4}
                                className="btn btn-primary primaryButtonWhiteBg"
                            >
                                No
                            </button>
                        </div>
                        <div>
                            {loaderConfirmDel ? (
                                <div
                                    class="spinner-border text-dark"
                                    role="status"
                                >
                                    <span class="sr-only">Loading...</span>
                                </div>
                            ) : (
                                <button
                                    onClick={onConfirmDel}
                                    style={{
                                        height: "34px",
                                        backgroundColor: "red",
                                    }}
                                    className="btn btn-primary primaryButton"
                                >
                                    Yes
                                </button>
                            )}
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Admin;
