import React from "react";
import Typography from "@mui/material/Typography";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import UserInterface from "../models/interfaces/UserInterface";
import Users from "./Users";

type UsersFeedbackProps = {
  isLoading: boolean;
  error: string | null;
  users: UserInterface[] | null;
  onDelete: (id: string) => void;
  handleBizStatusChange: (id: string) => void;
};

const UserFeedback: React.FC<UsersFeedbackProps> = ({
  isLoading,
  error,
  users,
  onDelete,
  handleBizStatusChange,
}) => {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (users && !users.length)
    return (
      <Typography variant="body1" color="initial">
        Oops, there are no users in the database that match the parameters you
        entered!
      </Typography>
    );
  if (users && users.length)
    return (
      <Users
        handleBizStatusChange={handleBizStatusChange}
        onDelete={onDelete}
        users={users}
      />
    );
  return null;
};

export default UserFeedback;
