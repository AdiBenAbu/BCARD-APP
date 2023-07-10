import React from "react";
import MuiCard from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import CardInterface from "../../models/interfaces/CardInterface";
import CardActionBar from "../card/CardActionBar";
import CardHeadDetails from "./CardHeadDetails";
import CardDetailBody from "./CardDetailBody";

type CardProps = {
  card: CardInterface;
  onDelete: (id: string) => void;
  onLike: () => void;
};

const CardDetails: React.FC<CardProps> = ({ card, onDelete, onLike }) => {
  const navigate = useNavigate();

  return (
    <MuiCard sx={{ minWidth: 100 }} elevation={4}>
      <CardActionArea
        onClick={() => navigate(`${ROUTES.CARD_DETAILS}/${card._id}`)}
      >
        <CardHeadDetails image={card.image} />
        <CardDetailBody card={card} />
      </CardActionArea>

      <CardActionBar
        cardId={card._id}
        cardUserId={card.user_id}
        onDelete={onDelete}
        onLike={onLike}
        cardLikes={card.likes}
      />
    </MuiCard>
  );
};

export default CardDetails;
