import {
  ChakraProvider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";        // alert(res.message)
import React, { useState } from "react";
import threeDotsertical from "../../assets/three-dots-vertical.svg";
import "../DraftTable/modals/style.css";
import DeleteDraftModal from "./modals/DeleteDraftModal";
import FeedbackShareModal from "./modals/FeedbackShareModal";
import ToriLogo from "../../assets/tori_logo.svg";
import { MovetoEditing } from "../../Services/Service";
import { useHistory } from "react-router-dom";
const FeedbackActions = ({ rowId }) => {
  const history = useHistory();
  const [moveEditMsg, setMoveEditMsg] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickMoveToEdit = () => {
    MovetoEditing(rowId).then((res) => {
      if (res.status) {
        // updateSidebar();
        history.push("/user/editing");
      } else {
        onOpen();
        setMoveEditMsg(res.message);
      }
    });
  };
  return (
    <ChakraProvider>
      <Menu>
        <Tooltip
          rounded={"lg"}
          py={"1.5"}
          label="More"
          bg="gray.700"
          color="white"
        >
          <MenuButton
            aria-label="Options"
            variant="outline"
          >
            <img
              style={{ width: 14 }}
              src={threeDotsertical}
            />
          </MenuButton>
        </Tooltip>
        <MenuList>
          <MenuItem maxH={"30px"} maxW="150px">
            <FeedbackShareModal id={rowId} />
          </MenuItem>
          <MenuItem maxH={"30px"} maxW="150px">
            <DeleteDraftModal id={rowId} />
          </MenuItem>
          <MenuItem
            color={"black"}
            onClick={onClickMoveToEdit}
            maxH={"30px"}
            maxW="150px"
          >
            Move to Copywriter
          </MenuItem>
        </MenuList>
      </Menu>
      {/* moveEditToCopywriter Error Message Modal */}
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
              <h5 style={{ marginLeft: "20px" }}>{`${moveEditMsg}`}</h5>
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

export default FeedbackActions;
