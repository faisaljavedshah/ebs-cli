import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  ChakraProvider,
  Text,
} from "@chakra-ui/react";
import {
  DeleteDraft,
  GetHubLeadList,
  GetUserData,
  ShareDraftHubLead,
} from "../../../Services/Service";
import ToriLogo from "../../../assets/tori_logo.svg";
import Select from "react-select";
import { useHistory } from "react-router-dom";
import './style.css'
const FeedbackModal = ({ id }) => {
    const history = useHistory()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loaderDeleteConf, setloaderDeleteConf] = useState(false);
  const [HubLeadEmail, setSelecthubLeadEmail] = useState();
  const [hubleadDetail, sethubleadDetail] = useState();
  const [shareDHMsg, setShareDHMsg] = useState("");

  const {
    isOpen: isOpenConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useDisclosure();
  const onSelectShareHubLead = (e) => {
    setSelecthubLeadEmail(e.value);
  };
  const updateSidebar = () => {
    GetUserData().then((res) => {
      if (res.success) {
        localStorage.setItem("userData", JSON.stringify(res.data));
      }
    });
  };

  const onClickShareHubLeadConfirm = () => {
    setloaderDeleteConf(true);
    ShareDraftHubLead(HubLeadEmail, id).then((res) => {
      if (res.status) {
        updateSidebar();
        setloaderDeleteConf(false);
        onClose();
        history.push("/user/feedBack");
      } else {
        setloaderDeleteConf(false);
        onClose();
        onOpenConfirm();
        setShareDHMsg(res.message);
        // alert(res.message);
      }
    });
  };
  useEffect(() => {
    GetHubLeadList().then((res) => {
      sethubleadDetail(res.data);
    });
  }, []);
  return (
    <>
      <ChakraProvider>
        <Text color='black' w={'100%'} _hover={{ cursor: "pointer" }} onClick={onOpen}>
          Move to Feedback
        </Text>
        {/* feedback modal */}
        <Modal size={"xl"} isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            borderRadius={"3xl"}
            width={"600px"}
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          >
            <ModalBody padding={"26px"}>
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
              </div>

              <div className="pt-3" style={{ float: "right", display: "flex" }}>
                <div style={{ marginRight: 10 }}>
                  <button
                    onClick={onClose}
                    className="btn btn-primary primaryButtonWhiteBg editFocus"
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
            </ModalBody>
          </ModalContent>
        </Modal>
        {/* feedback error message modal */}
        <Modal
          size={"xl"}
          isCentered
          isOpen={isOpenConfirm}
          onClose={onCloseConfirm}
        >
          <ModalOverlay />
          <ModalContent
            borderRadius={"3xl"}
            width={"600px"}
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          >
            <ModalBody padding={"26px"}>
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
                  onClick={onCloseConfirm}
                  style={{
                    height: "34px",
                    fontWeight: "bold",
                    backgroundColor: "red",
                  }}
                  className="btn btn-primary primaryButton closeFocus"
                >
                  Close
                </button>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </>
  );
};

export default FeedbackModal;
