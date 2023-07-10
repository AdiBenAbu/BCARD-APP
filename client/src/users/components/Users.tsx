import React from "react";
import UserInterface from "../models/interfaces/UserInterface";
import User from "./User";
import { Grid, Table, TableCell, TableRow } from "@mui/material";

type UsersProps = {
  users: UserInterface[];
  onDelete: (id: string) => void;
  handleBizStatusChange: (id: string) => void;
  index?: number;
};

const Users: React.FC<UsersProps> = ({
  users,
  onDelete,
  handleBizStatusChange,
  index,
}) => {
  return (
    <>
      <Grid
        container
        rowSpacing={1}
        justifyContent="center"
        alignItems="center"
        sx={{ paddingTop: 5 }}
      >
        <Table
          sx={{
            maxWidth: 600,
            border: 1,
            marginBottom: 2,
          }}
        >
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TableRow sx={{ bgcolor: "lightskyblue" }}>
              <TableCell align="center">No.</TableCell>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Full Name</TableCell>
              <TableCell align="center">User Status</TableCell>
              <TableCell align="center">Delete Account</TableCell>
            </TableRow>

            {users.map((user, index) => (
              <User
                onDelete={onDelete}
                onChangeStatus={handleBizStatusChange}
                user={user}
                index={index}
              />
            ))}
          </Grid>
        </Table>
      </Grid>
    </>
  );
};

export default Users;
