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
  import { useHistory } from "react-router-dom";
import DownloadModal from "./DownloadModal";
import ApprovedDraftDeleteModal from "./ApprovedDraftDeleteModal";
  const ApprovedActions = ({ rowId }) => {
  
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
              maxH={"35px"}
              maxW="170px"
            >
              <DownloadModal id ={rowId} />
            </MenuItem>
            <MenuItem
              maxH={"35px"}
              maxW="170px"
            >
              <ApprovedDraftDeleteModal id={rowId}/>
            </MenuItem>
    
          </MenuList>
        </Menu>
           </ChakraProvider>
    );
  };
  
  export default ApprovedActions;
  