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
import ToriLogo from "../../assets/tori_logo.svg";
const DownloadModal = ({ id }) => {
  const [onDownloadMsg, setOnDownloadMsg] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Text
        w={"100%"}
        _hover={{ cursor: "pointer" }}
        color="black"
        onClick={()=> {
            onOpen()
            setOnDownloadMsg('Coming Soon')
        }}
      >
        Download
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
                onClick={onClose}
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
  );
};

export default DownloadModal;
