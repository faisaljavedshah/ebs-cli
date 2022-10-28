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
  GetUserData,
  GetUserNameEmail,
  ShareDraft,
} from "../../../Services/Service";
import Select from "react-select";
import ToriLogo from "../../../assets/tori_logo.svg";
import './style.css'
const ShareModal = ({ id }) => {
  const [SelectUserName, setSelectUserName] = useState();
  const [UserDetails, setUserDetails] = useState();
  const [loaderDeleteConf, setloaderDeleteConf] = useState(false);
  const [onShareMsg, setOnShareMsg] = useState("");
  const [onShareMsgN, setOnShareMsgN] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useDisclosure();
  const {
    isOpen: isOpenNew,
    onOpen: onOpenNew,
    onClose: onCloseNew,
  } = useDisclosure();

  const onSelectShareUser = (e) => {
    setSelectUserName(e.value);
  };

  useEffect(() => {
    GetUserNameEmail().then((res) => {
      setUserDetails(res.data);
    });
  }, []);

  const updateSidebar = () => {
    GetUserData().then((res) => {
      if (res.success) {
        localStorage.setItem("userData", JSON.stringify(res.data));
      }
    });
  };

  const onYesClickShare = () => {
    setloaderDeleteConf(true);
    ShareDraft(SelectUserName, id).then((res) => {
      if (res.status) {
        updateSidebar();
        onOpenConfirm();
        setOnShareMsg(res.message);
        location.reload();
        setloaderDeleteConf(false);
      } else {
        setloaderDeleteConf(false);
        onOpenNew();
        onClose();
        setOnShareMsgN(res.message);
      }
    });
  };
  return (
    <>
      <ChakraProvider>
        <Text color='black' w={'100%'} _hover={{ cursor: "pointer" }} onClick={onOpen}>
          Share
        </Text>
        {/* share modal */}
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
                      onClick={onYesClickShare}
                      style={{ height: "34px" }}
                      className="btn btn-primary primaryButton "
                    >
                      Share
                    </button>
                  )}
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
        {/* share message modal */}
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
                <h5 style={{ marginLeft: "20px" }}>{`${onShareMsg}`}</h5>
              </div>

              <div className="pt-3" style={{ float: "right", display: "flex" }}>
                <button
                  onClick={onCloseConfirm}
                  style={{
                    height: "34px",
                    fontWeight: "bold",
                    // backgroundColor: "red",
                  }}
                  className="btn btn-primary primaryButton closeFocus"
                >
                  Close
                </button>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
        {/* new share message modal */}
        <Modal size={"xl"} isCentered isOpen={isOpenNew} onClose={onCloseNew}>
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
                <h5 style={{ marginLeft: "20px" }}>{`${onShareMsgN}`}</h5>
              </div>

              <div className="pt-3" style={{ float: "right", display: "flex" }}>
                <button
                  onClick={onCloseNew}
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

export default ShareModal;
