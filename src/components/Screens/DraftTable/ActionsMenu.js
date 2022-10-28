// import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import {
  ChakraProvider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";
import threeDotsertical from "../../assets/three-dots-vertical.svg";
import DeleteModal from "./modals/DeleteModal";
import EditModal from "./modals/EditModal";
import FeedbackModal from "./modals/FeedbackModal";
import ShareModal from "./modals/ShareModal";
import './modals/style.css'
const ActionsMenu = ({ rowId }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState();

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  // const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl();
    setOpen(false);
  };
  return (
    <ChakraProvider>
      <Menu>
        <Tooltip rounded={'lg'} py={'1.5'} label="More" bg="gray.700" color="white">
        <MenuButton
          // as={IconButton}
          aria-label="Options"
          // icon={<HamburgerIcon />}
          variant="outline"
        >
            <img
              // onClick={handleOpen}
              style={{ width: 14 }}
              src={threeDotsertical}
            />
        </MenuButton>
          </Tooltip>
        <MenuList>
          <MenuItem maxH={'30px'} maxW='150px'>
            <EditModal id={rowId} />
          </MenuItem>
          <MenuItem maxH={'30px'} maxW='150px'>
            <ShareModal id={rowId} />
          </MenuItem>
          <MenuItem maxH={'30px'} maxW='150px'>
            <DeleteModal id={rowId} />
          </MenuItem>
          <MenuItem maxH={'30px'} maxW='150px'>
            <FeedbackModal id={rowId} />
          </MenuItem>
        </MenuList>
      </Menu>
      {/* <Tooltip title="More" style={{ overflow: "hidden" }}>
        <IconButton
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <img
            onClick={handleOpen}
            style={{ width: 14 }}
            src={threeDotsertical}
          />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
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
          <EditModal id={rowId} />
        </MenuItem>
        <MenuItem>
          <ShareModal id={rowId} />
        </MenuItem>
        <MenuItem>
          <DeleteModal id={rowId} />
        </MenuItem>
        <MenuItem><FeedbackModal id={rowId}/></MenuItem>
      </Menu> */}
    </ChakraProvider>
  );
};

export default ActionsMenu;
