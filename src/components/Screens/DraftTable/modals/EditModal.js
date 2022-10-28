import React, { useEffect, useState } from "react";
import { EditDraft } from "../../../Services/Service";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  ChakraProvider,
  Text,
} from "@chakra-ui/react";
import ToriLogo from "../../../assets/tori_logo.svg";
import './style.css'
const EditModal = ({ id }) => {
  const [loaderChangeRname, setloaderChangeRname] = useState(false);
  const [rName, setRname] = useState();
  const [changeNameMsg, setChangeNameMsg] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useDisclosure();

  const onClickChangeRname = () => {
    setloaderChangeRname(true);
    EditDraft(id, rName).then((res) => {
      if (res.status) {
        setloaderChangeRname(false);
        location.reload();
      } else {
        onClose();
        setloaderChangeRname(false);
        onOpenConfirm();
        setChangeNameMsg(res.message);
        // alert(res.message);
      }
    });
  };

  return (
    <ChakraProvider>
      <Text w={'100%'}  _hover={{ cursor: "pointer" }} color='black' onClick={onOpen}>
        Edit
      </Text>
      {/* edit modal */}
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
                width: "100%",
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
                  onChange={(e) => setRname(e.target.value)}
                  placeholder="Enter Name"
                  class="form-control"
                />
              </div>
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
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* message */}

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
          <ModalBody padding={"20px"}>
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
  );
};

export default EditModal;
