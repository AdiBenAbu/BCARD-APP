import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { useUser } from "../providers/UserProvider";
import ChangeStatusDialog from "./ChangeStatusDialog";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

type UserChangeStatusProps = {
  userId: string;

  onChangeStatus: (id: string) => void;
};

const UserChangeStatus = ({
  userId,

  onChangeStatus,
}: UserChangeStatusProps) => {
  const { user } = useUser();

  const [isDialogOpen, setDialog] = useState(false);

  const handleDialogStatus = (term?: string) => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };

  const handleChangeStatus = () => {
    handleDialogStatus();
    onChangeStatus(userId);
  };
  return (
    <>
      <Box>
        {user && user.isAdmin && (
          <IconButton
            aria-label="change user status"
            onClick={() => handleDialogStatus("open")}
          >
            <ChangeCircleIcon />
          </IconButton>
        )}
      </Box>

      <ChangeStatusDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={handleDialogStatus}
        onChangeStatus={handleChangeStatus}
      />
    </>
  );
};

export default React.memo(UserChangeStatus);
