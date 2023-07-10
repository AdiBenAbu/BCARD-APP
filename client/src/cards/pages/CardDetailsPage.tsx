import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import PageHeader from "./../../components/PageHeader";
import { useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import CardDetails from "../components/card-detail/CardDetails";

const CardDetailsPage = () => {
  const { cardId } = useParams();
  const { value, handleGetCard } = useCards();
  const { card, error, isLoading } = value;

  useEffect(() => {
    if (cardId) handleGetCard(cardId);
  }, []);

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (!isLoading && !card) return <p>No card to display...</p>;

  if (!isLoading && card)
    return (
      <Container>
        <PageHeader
          title="Business Details"
          subtitle="Here you can see details of the business"
        />
        <div>
          <Container sx={{ pb: 4 }}>
            <CardDetails
              card={card}
              onDelete={(id) => console.log("you deleted card: " + id)}
              onLike={() => console.log("you liked card: ")}
            />
          </Container>
        </div>
      </Container>
    );
  return null;
};

export default CardDetailsPage;
