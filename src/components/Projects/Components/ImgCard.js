import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)({
  position: "relative",
  overflow: "hidden",
  maxWidth: 300,
  cursor: "pointer",
  "&:hover .title-overlay": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const TitleOverlay = styled(CardContent)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  color: "white",
  textAlign: "center",
  opacity: 0,
  transform: "translateY(100%)",
  transition: "all 0.3s ease",
  [theme.breakpoints.down("sm")]: {
    opacity: 1,
    transform: "translateY(0)",
  },
}));

const ImgCard = ({ imageUrl, title, onClick }) => {
  return (
    <StyledCard onClick={onClick}>
      <CardMedia
        component="img"
        image={imageUrl}
        alt={title}
        sx={{ height: 200 }}
      />
      <TitleOverlay className="title-overlay">
        <Typography variant="h6" textAlign={"start"}>
          {title}
        </Typography>
      </TitleOverlay>
    </StyledCard>
  );
};

export default ImgCard;
