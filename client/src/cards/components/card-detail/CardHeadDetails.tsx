import React from "react";
import CardMedia from "@mui/material/CardMedia";
import ImageInterface from "../../models/interfaces/ImageInterface";

type CardHeadProps = {
  image: ImageInterface;
};

const CardHeadDetails = ({ image }: CardHeadProps) => {
  const { url, alt } = image;
  return <CardMedia component="img" image={url} height="400" alt={alt} />;
};

export default CardHeadDetails;
