import React from "react";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { Divider, Box } from "@mui/material";
import CardRow from "./CardRow";
import CardInterface from "../../models/interfaces/CardInterface";

type CardBodyProps = {
  card: CardInterface;
};

const CardBody = ({ card }: CardBodyProps) => {
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
      </Box>
    </CardContent>
  );
};

export default CardBody;
