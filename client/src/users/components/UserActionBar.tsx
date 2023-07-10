import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import UserDeleteDialog from "./UserDeleteDialog";
import { useUser } from "../providers/UserProvider";

type UserActionBarProps = {
  userId: string;
  onDelete: (id: string) => void;
};

const UserActionBar = ({ userId, onDelete }: UserActionBarProps) => {
  const { user } = useUser();
  const [isDialogOpen, setDialog] = useState(false);

  const handleDialogUser = (term?: string) => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };

  const handleDeleteUser = () => {
    handleDialogUser();
    onDelete(userId);
  };

  return (
    <>
      <Box>
        {user && user.isAdmin && (
          <IconButton
            aria-label="delete user"
            onClick={() => handleDialogUser("open")}
          >
            <DeleteIcon />
          </IconButton>
        )}
      </Box>

      <UserDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={handleDialogUser}
        onDelete={handleDeleteUser}
      />
    </>
  );
};

export default React.memo(UserActionBar);
