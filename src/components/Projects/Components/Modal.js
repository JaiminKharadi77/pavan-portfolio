import React from "react";
import { Modal, Box, Typography, Grid, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReactPlayer from "react-player";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxHeight: "90vh",
  bgcolor: "black",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
  overflowY: "auto",
};

const ShortFormatModal = ({ open, onClose, dataReels, title }) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="short-format-modal">
      <Box sx={modalStyle}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="h5"
            id="short-format-modal"
            gutterBottom
            sx={{ color: "white" }}
          >
            {title}
          </Typography>
          <IconButton onClick={onClose} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Grid container spacing={2} mt={2}>
          {dataReels.map((reel, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <ReactPlayer
                  url={reel.videoUrl}
                  className="react-player"
                  style={{ position: "absolute", top: 0, left: 0 }}
                  width="100%"
                  height="100%"
                  controls
                />
              </div>
              <Typography variant="body2" align="center" mt={1}>
                {reel.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Modal>
  );
};

export default ShortFormatModal;
