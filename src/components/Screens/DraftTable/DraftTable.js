import React, { useEffect, useRef, useState } from "react";
import {
  GetDraftData,
  EditDraft,
  GetUserNameEmail,
  ShareDraft,
  GetHubLeadList,
  ShareDraftHubLead,
  DeleteDraft,
  GetUserData,
} from "../../../components/Services/Service";
import { MDBDataTable } from "mdbreact";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import LoadingSpinner from "../../assets/loader.gif";
import ToriLogo from "../../assets/tori_logo.svg";
import Select from "react-select";
import "./Style.css";
import ActionsMenu from "./ActionsMenu";

function DraftTable(props) {
  let history = useHistory();

  const [dataa, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [model, setModel] = useState(false);
  const [model2, setModel2] = useState(false);
  const [model0, setModel0] = useState(false);
  const [model4, setModel4] = useState(false);
  const [UserDetails, setUserDetails] = useState();
  const [hubleadDetail, sethubleadDetail] = useState();
  const [loaderChangeRname, setloaderChangeRname] = useState(false);
  const [loaderDeleteConf, setloaderDeleteConf] = useState(false);
  const [anchorEl, setAnchorEl] = useState();
  const [rName, setRname] = useState();
  const [SelectUserName, setSelectUserName] = useState();
  const [HubLeadEmail, setSelecthubLeadEmail] = useState();

  const [onDelete, setOnDelete] = useState(false);
  const [onDeleteMsg, setOnDeleteMsg] = useState("");
  const [shareDH, setShareDH] = useState(false);
  const [shareDHMsg, setShareDHMsg] = useState("");
  const [changeName, setChangeName] = useState(false);
  const [changeNameMsg, setChangeNameMsg] = useState("");
  const [onShare, setOnShare] = useState(false);
  const [onShareMsg, setOnShareMsg] = useState("");

  const [onShareN, setOnShareN] = useState(false);
  const [onShareMsgN, setOnShareMsgN] = useState("");
  const rowId = useRef();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl();
  };
  const open = Boolean(anchorEl);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      overflow: "inherit",
      transform: "translate(-50%, -50%)",
      padding: "26px",
      width: "30%",
      borderRadius: "15px",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
  };

  useEffect(() => {
    setLoader(true);
    GetDraftData().then((res) => {
      setData(res.data);
      setLoader(false);
    });
    GetUserNameEmail().then((res) => {
      setUserDetails(res.data);
      setLoader(false);
    });
    GetHubLeadList().then((res) => {
      sethubleadDetail(res.data);
      setLoader(false);
    });
  }, []);
  const updateSidebar = () => {
    GetUserData().then((res) => {
      if (res.success) {
        localStorage.setItem("userData", JSON.stringify(res.data));
      }
    });
  };
  const data = () => ({
    columns: [],
    rows: dataa,
  });
  const ActionClick = (id) => {
    rowId.current = id;
  };
  const onMoveToEditingClik = () => {
    setModel0(true);
  };

  const onClickDeleteDraft = () => {
    setModel2(true);
  };
  const onSelectUserEmail = (e) => {
    console.log(e.target.value);
    setSelectUserName(e.target.value);
  };
  const onSelectHubLeadEmail = (e) => {
    setSelecthubLeadEmail(e.target.value);
  };
  const SelectedId = (e) => {};

  const onClickYesConfirm = () => {
    setloaderDeleteConf(true);
    DeleteDraft(rowId).then((res) => {
      if (res.status) {
        updateSidebar();
        setloaderDeleteConf(false);
        setModel2(false);
        location.reload();
      } else {
        setloaderDeleteConf(false);
        setModel2(false);
        setOnDelete(true);
        setOnDeleteMsg(res.message);
        // alert(res.message);
        // alert(res.message);
      }
    });
  };
  const onClickShareHubLeadConfirm = () => {
    setloaderDeleteConf(true);
    ShareDraftHubLead(HubLeadEmail, rowId).then((res) => {
      if (res.status) {
        updateSidebar();
        setloaderDeleteConf(false);
        setModel0(false);
        history.push("/user/feedBack");
      } else {
        setloaderDeleteConf(false);
        setModel0(false);
        setShareDH(true);
        setShareDHMsg(res.message);
        // alert(res.message);
      }
    });
  };
  const onClickChangeRname = () => {
    setloaderChangeRname(true);
    EditDraft(rowId, rName).then((res) => {
      if (res.status) {
        setloaderChangeRname(false);
        location.reload();
      } else {
        setModel(false);
        setloaderChangeRname(false);
        setChangeName(true);
        setChangeNameMsg(res.message);
        // alert(res.message);
      }
    });
  };
  const onChangeRName = (e) => {
    setRname(e.target.value);
  };
  const onClickEdit = () => {
    setModel(true);
  };
  const onClickShare = () => {
    setModel4(true);
  };
  const closeModal = () => {
    setModel(false);
  };
  const closeModal2 = () => {
    setModel2(false);
  };
  const closeModal0 = () => {
    setModel0(false);
  };
  const closeModal4 = () => {
    setModel4(false);
  };
  const NameClick = (id) => {
    localStorage.setItem("draftId", id);
    history.push("/draft/new");
  };
  const onYesClickShare = () => {
    setloaderDeleteConf(true);
    ShareDraft(SelectUserName, rowId).then((res) => {
      if (res.status) {
        // alert(res.message);
        updateSidebar();
        setOnShare(true);
        setOnShareMsg(res.message);
        location.reload();
        setloaderDeleteConf(false);
      } else {
        setloaderDeleteConf(false);
        setOnShareN(true);
        setModel4(false);
        setOnShareMsgN(res.message);
        // alert(res.message);
      }
    });
  };
  const showOnlyMyDraft = (e) => {
    let myDraftVal = e.target.checked;
    GetDraftData(myDraftVal, false).then((res) => {
      setData(res.data);
      setLoader(false);
    });
  };
  const shareWithMe = (e) => {
    let shareVal = e.target.checked;
    GetDraftData(false, shareVal).then((res) => {
      setData(res.data);
      setLoader(false);
    });
  };

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
        label: "Industry",
        field: "industry",
      },
      {
        label: "Line of Business",
        field: "lineOfBusness",
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
              borderRadius: 10,
              padding: 4,
            }}
          >
            {row.request}
          </span>
        ),
        name: (
          <a
            style={{ cursor: "pointer" }}
            onClick={() => {
              NameClick(row.id);
            }}
          >
            {row.video_name}
          </a>
        ),
        industry: <a>{row.industry}</a>,
        lineOfBusness: <a>{row.line_of_business}</a>,
        type: <span>{row.type}</span>,
        created_date: <span>{row.created_date}</span>,
        action: (
          <a
            style={{ color: "#0A6ED1", cursor: "pointer" }}
            onClick={() => ActionClick(row.id)}
          >
            <ActionsMenu rowId={row.id} />
          </a>
        ),
      })),
    ],
  };

  const onSelectShareUser = (e) => {
    setSelectUserName(e.value);
  };
  const onSelectShareHubLead = (e) => {
    setSelecthubLeadEmail(e.value);
  };
  return (
    <div>
      {/* <div className="pt-3" style={{}}>
        <h3 style={{ fontWeight: "bolder" }}>Drafts</h3>
      </div> */}
      <div
                className="pt-3 pb-3"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "end" }}
            >
                <h3 style={{ fontWeight: "bolder",fontSize:'17.5px' }}>Drafts</h3>
                <div
                    style={{ height: 36, marginTop: 8 }}
                >
                    {/* Invite user */}
                </div>
            </div>
      {loader ? (
        <div className="loader">
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
                  Show only my Drafts
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
          {/* table */}
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
          </div>

          <div>
            <Modal
              isOpen={onShare}
              onRequestClose={() => {
                setOnShare(false);
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
                <h5 style={{ marginLeft: "20px" }}>{`${onShareMsg}`}</h5>
              </div>

              <div className="pt-3" style={{ float: "right", display: "flex" }}>
                <button
                  onClick={() => {
                    setOnShare(false);
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
              isOpen={onShareN}
              onRequestClose={() => {
                setOnShareN(false);
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
                <h5 style={{ marginLeft: "20px" }}>{`${onShareMsgN}`}</h5>
              </div>

              <div className="pt-3" style={{ float: "right", display: "flex" }}>
                <button
                  onClick={() => {
                    setOnShareN(false);
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
                <h5 style={{ marginLeft: "20px" }}>{`${changeNameMsg}`}</h5>
              </div>

              <div className="pt-3" style={{ float: "right", display: "flex" }}>
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
              isOpen={shareDH}
              onRequestClose={() => {
                setShareDH(false);
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
                <h5 style={{ marginLeft: "20px" }}>{`${shareDHMsg}`}</h5>
              </div>

              <div className="pt-3" style={{ float: "right", display: "flex" }}>
                <button
                  onClick={() => {
                    setShareDH(false);
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
              isOpen={onDelete}
              onRequestClose={() => {
                setOnDelete(false);
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
                <h5 style={{ marginLeft: "20px" }}>{`${onDeleteMsg}.`}</h5>
              </div>

              <div className="pt-3" style={{ float: "right", display: "flex" }}>
                <button
                  onClick={() => {
                    setOnDelete(false);
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
              isOpen={model}
              onRequestClose={closeModal}
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
                  Change Video Name
                </h5>
              </div>
              <div style={{ padding: 20 }}>
                <div>
                  <label for="exampleInputEmail1">Video Name</label>
                  <input
                    type="text"
                    onChange={onChangeRName}
                    placeholder="Enter Name"
                    class="form-control"
                  />
                </div>
              </div>

              <div className="pt-3" style={{ float: "right", display: "flex" }}>
                <div style={{ marginRight: 10 }}>
                  <button
                    onClick={closeModal}
                    className="btn btn-primary primaryButtonWhiteBg"
                  >
                    Cancel
                  </button>
                </div>
                <div>
                  {loaderChangeRname ? (
                    <div class="spinner-border text-dark" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  ) : (
                    <button
                      onClick={onClickChangeRname}
                      style={{ height: "34px" }}
                      className="btn btn-primary primaryButton"
                    >
                      Change
                    </button>
                  )}
                </div>
              </div>
            </Modal>
          </div>
          <div>
            <Modal
              isOpen={model2}
              onRequestClose={() => {
                setModel2(false);
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
          <div>
            <Modal
              isOpen={model0}
              onRequestClose={closeModal0}
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
                  Select Hub Lead
                </h5>
              </div>

              <div>
                <label for="exampleInputEmail1">Hub Lead Email</label>
                <Select
                  onChange={onSelectShareHubLead}
                  options={hubleadDetail}
                  placeholder="Select or begin typing"
                />
                {/* <select
                                    onClick={onSelectHubLeadEmail}
                                    style={{ height: 40 }}
                                    class="form-control"
                                >
                                    <option value={HubLeadEmail} selected disabled>
                                        Choose Email
                                    </option>
                                    {hubleadDetail &&
                                        hubleadDetail.map((e) => (
                                            <option value={e.id}>
                                                {e.email}
                                            </option>
                                        ))}
                                </select> */}
              </div>

              <div className="pt-3" style={{ float: "right", display: "flex" }}>
                <div style={{ marginRight: 10 }}>
                  <button
                    onClick={closeModal0}
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
                      onClick={onClickShareHubLeadConfirm}
                      style={{
                        height: "34px",
                        backgroundColor: "red",
                      }}
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
                <label for="exampleInputEmail1">User Email</label>
                <Select
                  onChange={onSelectShareUser}
                  options={UserDetails}
                  placeholder="Select or begin typing"
                />
                {/* <select
                                    onClick={onSelectUserEmail}
                                    style={{ height: 40 }}
                                    class="form-control"
                                >
                                    <option value={SelectUserName} disabled selected>
                                        Choose Email
                                    </option>
                                    {UserDetails &&
                                        UserDetails.map((e) => (
                                            <option value={e.id}>
                                                {e.email}
                                            </option>
                                        ))}
                                </select> */}
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
        </div>
      )}
    </div>
  );
}

export default DraftTable;
