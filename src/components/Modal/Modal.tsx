import { FC } from "react";
import { Box, Modal, Typography } from "@mui/material";
import {
  IconStyle,
  ModalTextStyle,
  ModalTitleReleseWrapper,
  ModalTitleStyle,
  modalImgDescriptionBox,
  modalStyle,
  modalTitleStyle,
} from "./Modal.styled";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

type CustomModalProps = {
  open: boolean;
  handleClose: () => void;
  poster?: string;
  title?: string;
  release?: string;
  overview?: string;
  name?: string;
};

export const CustomModal: FC<CustomModalProps> = ({
  open,
  handleClose,
  poster,
  title,
  release,
  overview,
  name,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Box sx={modalImgDescriptionBox}>
          <img
            src={
              poster
                ? `https://image.tmdb.org/t/p/w200${poster}`
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aL_HlffoXMrgiodMTTldQmRpCJIJ9T6jOLN9hmm_kQ&s"
            }
            alt={title || name}
          />
          <Box sx={ModalTitleReleseWrapper}>
            <Typography
              id="modal-modal-title"
              sx={modalTitleStyle}
              variant="h6"
              component="h2"
            >
              {title}
            </Typography>
            <Typography
              id="modal-modal-title"
              sx={modalTitleStyle}
              variant="h6"
              component="h2"
            >
              {name}
            </Typography>
            <Typography
              id="modal-modal-title"
              sx={ModalTextStyle}
              variant="h6"
              component="h2"
            >
              {release && (
                <>
                  <ModalTitleStyle>Release date: </ModalTitleStyle>
                  {release}
                </>
              )}
            </Typography>
          </Box>
        </Box>
        <Typography
          id="modal-modal-title"
          sx={ModalTextStyle}
          variant="h6"
          component="h2"
        >
          <ModalTitleStyle>Overview: </ModalTitleStyle> {overview}
        </Typography>
        {/* <KeyboardDoubleArrowDownIcon sx={IconStyle} /> */}
      </Box>
    </Modal>
  );
};
