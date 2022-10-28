// import React, { useEffect, useState } from 'react';
import Header from "../../SubComponents/MainHeader/MainHeader";
// import { MDBDataTable } from 'mdbreact';
import { ApprovedDraftList } from "../../../components/Services/Service";
// import $ from 'jquery'
import "../DraftTable/Style.css";

import React, { useEffect, useState, useRef } from "react";
import {
  DeleteDraftFinalReview,
  GetUserNameEmail,
  ShareDraft,
} from "../../../components/Services/Service";
import { MDBDataTable } from "mdbreact";
import { useHistory } from "react-router-dom";
import threeDotsertical from "../../assets/three-dots-vertical.svg";
import ToriLogo from "../../assets/tori_logo.svg";

import LoadingSpinner from "../../assets/loader.gif";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Modal from "react-modal";
// import './Style.css';
import ApprovedActions from "./ApprovedActions";
function Approved(props) {
  let history = useHistory();

  const [dataa, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [anchorEl, setAnchorEl] = useState();
//   const [rowId, setRowId] = useState();
  const [model4, setModel4] = useState(false);
  const [SelectUserName, setSelectUserName] = useState();
  const [UserDetails, setUserDetails] = useState();
  const [SelectUserEmail, setSelectUserEmail] = useState();
  const [loaderDeleteConf, setloaderDeleteConf] = useState(false);
  const [model2, setModel2] = useState(false);
  const [onDownload, setOnDownload] = useState(false);
  const [onDownloadMsg, setOnDownloadMsg] = useState("");
  const open = Boolean(anchorEl);
  const rowId = useRef();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl();
  };

  const ActionClick = (id) => {
    // setRowId(id);
    rowId.current = id
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
    setLoader(true);
    ApprovedDraftList().then((res) => {
      setData(res.data);
      setLoader(false);
    });
    GetUserNameEmail().then((res) => {
      console.log("dsds", res);
      setUserDetails(res.data);
      setLoader(false);
    });
  }, []);

  const onNameClick = (id) => {
    localStorage.setItem("getDraftFinalReviewbyid", id);
    history.push("/draft/finalReview");
  };

  const data = () => ({
    columns: [],
    rows: dataa,
  });
  const linksData = {
    columns: [
      {
        label: "Requestor",
        field: "request",
        sort: "asc",
        width: 10,
      },
      {
        label: "Video Name",
        field: "name",
      },
      {
        label: "Hub Lead",
        field: "hubLead",
      },
      {
        label: "Type",
        field: "type",
        sort: "asc",
        width: 180,
      },
      {
        label: "Created",
        field: "created_date",
        sort: "asc",
        width: 100,
      },
      {
        label: "Last Edited",
        field: "lastEditor",
        sort: "asc",
        width: 100,
      },
      // {
      //     label: "Editors/Commentors",
      //     field: "editors",
      //     sort: "asc",
      //     width: 100,
      // },
      {
        label: "Actions",
        field: "action",
      },
    ],
    rows: [
      ...data().rows.map((row, order) => ({
        request: (
          <span
            style={{
              cursor: "pointer",
              backgroundColor: "rgba(231, 174, 60, 0.16)",
              borderRadius: 10,
              padding: 4,
            }}
          >
            {row.request}
          </span>
        ),
        name: (
          <a style={{ cursor: "pointer" }} onClick={() => onNameClick(row.id)}>
            {row.video_name}
          </a>
        ),
        type: <span>{row.type}</span>,
        hubLead: <a>{row.hub_lead}</a>,
        created_date: <span>{row.created_date}</span>,
        lastEditor: <span>{row.updated_date}</span>,
        action: (
          <a
            style={{ color: "#0A6ED1", cursor: "pointer" }}
            onClick={() => ActionClick(row.id)}
          >
            <ApprovedActions rowId={row.id} />
          </a>
        ),
      })),
    ],
  };
  const onClickShare = () => {
    setModel4(true);
  };
  const closeModal4 = () => {
    setModel4(false);
  };
  const onSelectUserName = (e) => {
    setSelectUserName(e.target.value);
  };
  const onSelectUserEmail = (e) => {
    setSelectUserEmail(e.target.value);
  };
  const onClickDeleteDraft = () => {
    setModel2(true);
  };
  const closeModal2 = () => {
    setModel2(false);
  };
  const onYesClickShare = () => {
    setloaderDeleteConf(true);
    ShareDraft(SelectUserName, rowId).then((res) => {
      if (res.status) {
        alert(res.message);
        location.reload();
        setloaderDeleteConf(false);
      } else {
        setloaderDeleteConf(false);
        alert(res.message);
      }
    });
  };
  const onClickYesConfirm = () => {
    setloaderDeleteConf(true);
    DeleteDraftFinalReview(rowId).then((res) => {
      if (res.status) {
        setloaderDeleteConf(false);
        setModel2(false);
        location.reload();
      } else {
        setloaderDeleteConf(false);
        setModel2(false);
        alert(res.message);
      }
    });
  };

  return (
    <div>
      {/* <div className="pt-3" style={{}}>
                <h3 style={{ fontWeight: "bolder" }}>Final Review</h3>
            </div> */}
      <div
        className="pt-3 pb-3"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <h3 style={{ fontWeight: "bolder" }}>Final Review</h3>
        <div style={{ height: 36, marginTop: 8 }}>{/* Invite user */}</div>
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
              responsive
              paginationLabel={["<", ">"]}
              entriesOptions={[5, 20, 25]}
              pagesAmount={4}
              data={linksData}
              sortRows={["links"]}
              materialSearch
              className="your-custom-styles"
            />
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "hidden",
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
              transformOrigin={{
                horizontal: "right",
                vertical: "top",
              }}
              anchorOrigin={{
                horizontal: "right",
                vertical: "bottom",
              }}
            >
              <MenuItem
                onClick={() => {
                  // alert("Coming Soon")
                  setOnDownload(true);
                  setOnDownloadMsg("Coming Soon");
                }}
              >
                Download
              </MenuItem>
              <MenuItem onClick={onClickDeleteDraft}>Delete</MenuItem>
            </Menu>
          </div>

          <div>
            <Modal
              isOpen={onDownload}
              onRequestClose={() => {
                setOnDownload(false);
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
                <h5 style={{ marginLeft: "20px" }}>{`${onDownloadMsg}`}</h5>
              </div>

              <div className="pt-3" style={{ float: "right", display: "flex" }}>
                <button
                  onClick={() => {
                    setOnDownload(false);
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
              isOpen={model4}
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
                  Please Select User
                </h5>
              </div>

              <div>
                <label for="exampleInputEmail1">User Name</label>
                <select
                  onClick={onSelectUserName}
                  style={{ height: 40 }}
                  class="form-control"
                >
                  <option disabled selected>
                    Choose Name
                  </option>
                  {UserDetails &&
                    UserDetails.map((e) => (
                      <option value={e.id}>{e.name}</option>
                    ))}
                </select>
              </div>
              <div>
                <label for="exampleInputEmail1">User Email</label>
                <select
                  onClick={onSelectUserEmail}
                  placeholder="Choose Premission"
                  style={{ height: 40 }}
                  class="form-control"
                >
                  <option disabled selected>
                    Choose Email
                  </option>
                  {UserDetails &&
                    UserDetails.map((e) => <option>{e.email}</option>)}
                </select>
              </div>
              <div className="pt-3" style={{ float: "right", display: "flex" }}>
                <div style={{ marginRight: 10 }}>
                  <button
                    onClick={closeModal4}
                    className="btn btn-primary primaryButtonWhiteBg"
                  >
                    Cancel
                  </button>
                </div>
                <div>
                  {loaderDeleteConf ? (
                    <div class="spinner-border text-dark" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  ) : (
                    <button
                      onClick={onYesClickShare}
                      style={{ height: "34px" }}
                      className="btn btn-primary primaryButton"
                    >
                      Share
                    </button>
                  )}
                </div>
              </div>
            </Modal>
          </div>
          <div>
            <Modal
              isOpen={model2}
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
                  Delete Draft
                </h5>
              </div>

              <h6>Are you sure you want to delete this Draft?</h6>

              <div className="pt-3" style={{ float: "right", display: "flex" }}>
                <div style={{ marginRight: 10 }}>
                  <button
                    onClick={closeModal2}
                    className="btn btn-primary primaryButtonWhiteBg"
                  >
                    No
                  </button>
                </div>
                <div>
                  {loaderDeleteConf ? (
                    <div class="spinner-border text-dark" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  ) : (
                    <button
                      onClick={onClickYesConfirm}
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
      )}
    </div>
  );
}

export default Approved;
