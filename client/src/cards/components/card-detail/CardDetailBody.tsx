import React from "react";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { Divider, Box, Typography } from "@mui/material";
import CardInterface from "../../models/interfaces/CardInterface";
import CardRow from "../card/CardRow";

type CardBodyProps = {
  card: CardInterface;
};

const CardDetailBody = ({ card }: CardBodyProps) => {
  const { street, houseNumber, city } = card.address;

  return (
    <CardContent>
      <CardHeader
        title={card.title}
        subheader={card.subtitle}
        sx={{ p: 0, mb: 1 }}
      />
      <Divider />
      <Box mt={1}>
        <CardRow title="phone" content={` ${card.phone}`} />
        <CardRow title="email" content={` ${card.email}`} />
        <CardRow
          title="address"
          content={` ${street} ${houseNumber}, ${city}, ${card.address.country}, ${card.address.zip}`}
        />
        <CardRow title="card number" content={` ${card.bizNumber}`} />
        <CardRow title="description" content={` ${card.description}`} />
        <br />
        <Typography variant="body2" color="text.secondary">
          <Typography fontWeight={700} component="span">
            web:{" "}
          </Typography>
          <a href={card.web}>{card.web}</a>
        </Typography>
      </Box>
    </CardContent>
  );
};

export default CardDetailBody;
