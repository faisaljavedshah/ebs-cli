import {
  ChakraProvider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
} from "@chakra-ui/react"; // alert(res.message)
import React, { useState } from "react";
import threeDotsertical from "../../assets/three-dots-vertical.svg";
import "../DraftTable/modals/style.css";
import { MoveToFeefBack, MoveToFeefFinalReview } from "../../Services/Service";
import { useHistory } from "react-router-dom";
import DeleteEditingDraftModal from "./DeleteEditingDraftModal";
const EditingActions = ({ rowId }) => {
  const history = useHistory();

  const onClickMoveToFeedback = () => {
    console.log(rowId)
    MoveToFeefBack(rowId).then((res) => {
      if (res.status) {
        history.push("/user/feedBack");
      } else {
        alert(res.message);
      }
    });
  };
  const onClickMoveToFinalReview = () => {
    MoveToFeefFinalReview(rowId).then((res) => {
      if (res.status) {
        history.push("/user/approved");
      } else {
        alert(res.message);
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
          <MenuButton aria-label="Options" variant="outline">
            <img style={{ width: 14 }} src={threeDotsertical} />
          </MenuButton>
        </Tooltip>
        <MenuList>
          <MenuItem
            color={"black"}
            maxH={"35px"}
            maxW="170px"
            onClick={onClickMoveToFeedback}
          >
            Move to Feedback
          </MenuItem>
          <MenuItem
            onClick={onClickMoveToFinalReview}
            color="black"
            maxH={"35px"}
            maxW="170px"
          >
            Move to Final Review
          </MenuItem>
          <MenuItem
            maxH={"35px"}
            maxW="170px"
          >
            <DeleteEditingDraftModal id={rowId}/>
          </MenuItem>
        </MenuList>
      </Menu>
    </ChakraProvider>
  );
};

export default EditingActions;
