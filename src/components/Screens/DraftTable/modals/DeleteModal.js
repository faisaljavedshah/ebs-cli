import React, {useState } from "react";
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
  GetUserData,
} from "../../../Services/Service";
import ToriLogo from "../../../assets/tori_logo.svg";
import './style.css'
const DeleteModal = ({ id }) => {
  const [loaderDeleteConf, setloaderDeleteConf] = useState(false);
  const [onDeleteMsg, setOnDeleteMsg] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useDisclosure();

  const updateSidebar = () => {
    GetUserData().then((res) => {
      if (res.success) {
        localStorage.setItem("userData", JSON.stringify(res.data));
      }
    });
  };
  const onClickYesConfirm = () => {
    setloaderDeleteConf(true);
    DeleteDraft(id).then((res) => {
      if (res.status) {
        updateSidebar();
        setloaderDeleteConf(false);
        onClose();
        location.reload();
      } else {
        setloaderDeleteConf(false);
        onClose();
        onOpenConfirm();
        setOnDeleteMsg(res.message);
      }
    });
  };

  return (
    <>
      <ChakraProvider>
        <Text color='black' w={'100%'} _hover={{ cursor: "pointer" }} onClick={onOpen}>
          Delete Draft
        </Text>
        {/* delete modal */}
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
                  Delete Draft
                </h5>
              </div>

              <h6>Are you sure you want to delete this Draft?</h6>

              <div className="pt-3" style={{ float: "right", display: "flex" }}>
                <div style={{ marginRight: 10 }}>
                  <button
                    onClick={onClose}
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
                      className="btn btn-primary primaryButton closeFocus"
                    >
                      Yes
                    </button>
                  )}
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
        {/* delete error message modal */}
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
                <h5 style={{ marginLeft: "20px" }}>{`${onDeleteMsg}.`}</h5>
              </div>

              <div className="pt-3" style={{ float: "right", display: "flex" }}>
                <button
                  onClick={onCloseConfirm}
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
            </ModalBody>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </>
  );
};

export default DeleteModal;
