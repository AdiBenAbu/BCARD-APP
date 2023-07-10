import React, { useState } from "react";
import UserInterface from "../models/interfaces/UserInterface";
import UserActionBar from "./UserActionBar";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import UserChangeStatus from "./UserChangeStatus";

type UserProps = {
  user: UserInterface;
  users?: UserInterface[];
  onDelete: (id: string) => void;
  onChangeStatus: (id: string) => void;
  index: number;
};

const User: React.FC<UserProps> = ({
  user,
  users,
  onDelete,
  onChangeStatus,
  index,
}) => {
  const [isbiz, setBiz] = useState(user.isBusiness ? true : false);
  const handleBizStatusChange = (userId: string) => {
    onChangeStatus(userId);
    setBiz((prev) => !prev);
  };
  return (
    <>
      <TableRow>
        <TableCell align="center">{index + 1}</TableCell>
        <TableCell align="center">{user._id}</TableCell>
        <TableCell align="center">
          {user.name.first + " " + user.name.middle + " " + user.name.last}
        </TableCell>
        <TableCell align="center">
          {isbiz ? "Business" : "Regular"}

          <UserChangeStatus
            userId={user._id!}
            onChangeStatus={handleBizStatusChange}
          />
        </TableCell>
        <TableCell align="center">
          <UserActionBar userId={user._id!} onDelete={onDelete} />
        </TableCell>
      </TableRow>
    </>
  );
};

export default User;
