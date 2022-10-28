// import React, { useEffect, useState } from 'react';
import Header from "../../SubComponents/MainHeader/MainHeader";
// import { MDBDataTable } from 'mdbreact';
import {
  GetEditingDraftData,
  GetUserData,
} from "../../../components/Services/Service";
// import $ from 'jquery'
import "../DraftTable/Style.css";

import React, { useEffect, useState, useRef } from "react";
import {
  DeleteDraftCopyWrite,
  GetUserNameEmail,
  ShareDraft,
  MoveToFeefBack,
  MoveToFeefFinalReview,
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
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Modal from "react-modal";
import EditingActions from "./EditingActions";

// import './Style.css';

function EditTable(props) {
  let history = useHistory();

  const [dataa, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [anchorEl, setAnchorEl] = useState();
  // const [rowId, setRowId] = useState();
  const [model4, setModel4] = useState(false);
  const [SelectUserName, setSelectUserName] = useState();
  const [UserDetails, setUserDetails] = useState();
  const [SelectUserEmail, setSelectUserEmail] = useState();
  const [loaderDeleteConf, setloaderDeleteConf] = useState(false);

  const [model2, setModel2] = useState(false);
  const [shareDraft, setShareDraft] = useState(false);
  const [shareDraftMsg, setShareDraftMsg] = useState("");
  const [shareDraftN, setShareDraftN] = useState(false);
  const [shareDraftMsgN, setShareDraftMsgN] = useState("");
  const [onDel, setOnDel] = useState(false);
  const [onDelMsg, setOnDelMsg] = useState("");
  const rowId = useRef();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl();
  };

  // const ActionClick = (id) => {
  //   rowId.current = id;
  // };
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
    GetEditingDraftData().then((res) => {
      setData(res.data);
      setLoader(false);
    });
    GetUserNameEmail().then((res) => {
      console.log("dsds", res);
      setUserDetails(res.data);
      setLoader(false);
    });
  }, []);

  const data = () => ({
    columns: [],
    rows: dataa,
  });
  const NameClick = (id) => {
    localStorage.setItem("getDraftEditingbyid", id);
    history.push("/draft/approvel");
  };
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[3],
      fontSize: 11,
      borderRadius: 8,
      padding: 10,
    },
  }));
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
      {
        label: "Editors/Commentors",
        field: "editors",
        sort: "asc",
        width: 100,
      },
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
          <a style={{ cursor: "pointer" }} onClick={() => NameClick(row.id)}>
            {row.video_name}
          </a>
        ),
        type: <span>{row.type}</span>,
        hubLead: <a>{row.hub_lead}</a>,
        created_date: <span>{row.created_date}</span>,
        lastEditor: <span>{row.updated_date}</span>,
        editors: (
          <div style={{ display: "flex", textAlign: "center" }}>
            {row.editors &&
              row.editors.slice(0, 3).map((res) => (
                <div style={{ width: 42 }}>
                  {res.name && (
                    <LightTooltip
                      componentsProps={{
                        tooltip: {
                          sx: {
                            bgcolor: "common.white",
                            "& .MuiTooltip-arrow": {
                              color: "#fff",
                            },
                          },
                        },
                      }}
                      arrow
                      placement="bottom-start"
                      title={<Typography fontSize={14}>{res.name}</Typography>}
                    >
                      <div className="myDIV">
                        <div
                          className={res.initial == "" ? "bgDONE" : "BGNONE"}
                          style={{
                            height: 38,
                            width: 38,
                            marginRight: 5,
                            borderRadius: 50,
                            color: "#fff",
                            fontWeight: "bold",
                          }}
                        >
                          {res.initial.toUpperCase()}
                        </div>
                      </div>
                    </LightTooltip>
                  )}
                </div>
              ))}
          </div>
        ),
        action: (
          <a
            style={{ color: "#0A6ED1", cursor: "pointer" }}
            // onClick={() => ActionClick(row.id)}
          >
            <EditingActions rowId={row.id} />
          </a>
        ),
      })),
    ],
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
  // const onClickMoveToFeedback = () => {
  //   MoveToFeefBack(rowId).then((res) => {
  //     if (res.status) {
  //       history.push("/user/feedBack");
  //     } else {
  //       alert(res.message);
  //     }
  //   });
  // };
  // const onClickMoveToFinalReview = () => {
  //   MoveToFeefFinalReview(rowId).then((res) => {
  //     if (res.status) {
  //       history.push("/user/approved");
  //     } else {
  //       alert(res.message);
  //     }
  //   });
  // };
  const closeModal2 = () => {
    setModel2(false);
  };
  // const onYesClickShare = () => {
  //   setloaderDeleteConf(true);
  //   ShareDraft(SelectUserName, rowId).then((res) => {
  //     if (res.status) {
  //       // alert(res.message);
  //       setShareDraft(true);
  //       setShareDraftMsg(res.message);
  //       updateSidebar();
  //       location.reload();
  //       setloaderDeleteConf(false);
  //     } else {
  //       setloaderDeleteConf(false);
  //       // alert(res.message);
  //       setShareDraftN(true);
  //       setShareDraftMsgN(res.message);
  //     }
  //   });
  // };
  // const onClickYesConfirm = () => {
  //   setloaderDeleteConf(true);
  //   DeleteDraftCopyWrite(rowId).then((res) => {
  //     if (res.status) {
  //       updateSidebar();
  //       setloaderDeleteConf(false);
  //       setModel2(false);
  //       location.reload();
  //     } else {
  //       setloaderDeleteConf(false);
  //       setModel2(false);
  //       // alert(res.message);
  //       setOnDel(true);
  //       setOnDelMsg(res.message);
  //     }
  //   });
  // };
  const showOnlyMyDraft = (e) => {
    let myDraftVal = e.target.checked;
    GetEditingDraftData(myDraftVal, false).then((res) => {
      setData(res.data);
      setLoader(false);
    });
  };
  const shareWithMe = (e) => {
    let shareVal = e.target.checked;
    GetEditingDraftData(false, shareVal).then((res) => {
      setData(res.data);
      setLoader(false);
    });
  };
  const updateSidebar = () => {
    GetUserData().then((res) => {
      if (res.success) {
        localStorage.setItem("userData", JSON.stringify(res.data));
      }
    });
  };

  return (
    <div>
      {/* <div className="pt-3" style={{}}>
                <h3 style={{ fontWeight: "bolder" }}>CopyWriter</h3>
            </div> */}
      <div
        className="pt-3 pb-3"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <h3 style={{ fontWeight: "bolder" }}>CopyWriter</h3>
        <div style={{ height: 36, marginTop: 8 }}>{/* Invite user */}</div>
      </div>
      {loader ? (
        <div className="loader_center">
          <img width={70} height={70} src={LoadingSpinner} />
        </div>
      ) : (
        <div className="box_s">
          <div
            style={{
              zIndex: 9999,
              position: "absolute",
              paddingLeft: 16,
              paddingTop: 15,
            }}
          >
            <div style={{ display: "flex", width: "100%" }}>
              <div class="form-check">
                <input
                  onChange={showOnlyMyDraft}
                  class="form-check-input mt-2"
                  style={{ height: 16, width: 16 }}
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label
                  style={{ fontWeight: 400, fontSize: 13 }}
                  class="form-check-label"
                  for="defaultCheck1"
                >
                  Show only my Edits
                </label>
              </div>
              <div class="form-check" style={{ marginLeft: 80 }}>
                <input
                  onChange={shareWithMe}
                  class="form-check-input mt-2"
                  style={{ height: 16, width: 16 }}
                  type="checkbox"
                  value=""
                  id="defaultCheck2"
                />
                <label
                  style={{ fontWeight: 400, fontSize: 13 }}
                  class="form-check-label"
                  for="defaultCheck2"
                >
                  Shared with me
                </label>
              </div>
            </div>
          </div>
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
              <MenuItem>
                Move to FeedBack
              </MenuItem>
              <MenuItem>
                Move to Final Review
              </MenuItem>
              <MenuItem onClick={onClickDeleteDraft}>Delete Draft</MenuItem>
            </Menu>
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
                      // onClick={onClickYesConfirm}
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
          <div>
            <Modal
              isOpen={onDel}
              onRequestClose={() => {
                setOnDel(false);
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
                <h5 style={{ marginLeft: "20px" }}>{`${onDelMsg}`}</h5>
              </div>

              <div className="pt-3" style={{ float: "right", display: "flex" }}>
                <button
                  onClick={() => {
                    setOnDel(false);
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
              isOpen={shareDraft}
              onRequestClose={() => {
                setShareDraft(false);
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
                <h5 style={{ marginLeft: "20px" }}>{`${shareDraftMsg}`}</h5>
              </div>

              <div className="pt-3" style={{ float: "right", display: "flex" }}>
                <button
                  onClick={() => {
                    setShareDraft(false);
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
              isOpen={shareDraftN}
              onRequestClose={() => {
                setShareDraftN(false);
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
                <h5 style={{ marginLeft: "20px" }}>{`${shareDraftMsgN}`}</h5>
              </div>

              <div className="pt-3" style={{ float: "right", display: "flex" }}>
                <button
                  onClick={() => {
                    setShareDraftN(false);
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

export default EditTable;
