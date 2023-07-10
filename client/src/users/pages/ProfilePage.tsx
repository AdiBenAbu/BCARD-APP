import { useEffect, useState } from "react";
import useHandleUsers from "../hooks/useHandleUsers";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { useNavigate, useParams } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import PageHeader from "../../components/PageHeader";
import UserInterface from "../models/interfaces/UserInterface";
import { Avatar, Grid, Typography } from "@mui/material";
import { useTheme } from "../../providers/ThemeProvider";

const ProfilePage = () => {
  const { isDark } = useTheme();
  const color = isDark ? "black" : "black";
  const { userId } = useParams();
  const { handlGetUser } = useHandleUsers();
  const navigate = useNavigate();
  const [data, setData] = useState<UserInterface | null>(null);

  useEffect(() => {
    if (userId)
      handlGetUser(userId).then((userFromServer) => {
        if (userId !== userFromServer?._id) return navigate(ROUTES.ROOT);
        setData(userFromServer);
      });
  }, []);

  return (
    <Container
      sx={{
        paddingBottom: 2,
      }}
    >
      <PageHeader
        title="Profile Page"
        subtitle="On this page you can find your user details"
      />

      <Grid
        container
        columns={{ xs: 2, sm: 4, md: 12, lg: 12 }}
        columnSpacing={2}
        rowSpacing={1}
        justifyContent="center"
        alignItems="center"
        sx={{ paddingTop: 5 }}
      >
        <Grid item xs={0} sm={0} md={4} lg={4}>
          <Avatar
            sx={{
              minWidth: 275,
              minHeight: 275,
              border: "2px solid",
            }}
            alt={data?.image.alt ? data.image.alt : ""}
            src={
              data?.image.url ? "/assets/images/avatar.png" : data?.image.url
            }
          />
        </Grid>

        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Table
            sx={{
              border: 2,
              bgcolor: "#e9e9e9",
              color: color,
            }}
          >
            <TableRow>
              <Grid container>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TableCell sx={{ fontWeight: "bold" }}>Id:</TableCell>
                  <TableCell>
                    <Typography component="span" noWrap>
                      {data?._id}
                    </Typography>
                  </TableCell>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    User status:
                  </TableCell>
                  <TableCell>
                    {data?.isBusiness ? "Business" : "Regular"}
                  </TableCell>
                </Grid>
              </Grid>
            </TableRow>
            <TableRow>
              <Grid container>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TableCell align="left" sx={{ fontWeight: "bold" }}>
                    First name:
                  </TableCell>
                  <TableCell align="left">{data?.name.first}</TableCell>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TableCell align="left" sx={{ fontWeight: "bold" }}>
                    Middle name:
                  </TableCell>
                  <TableCell align="left">{data?.name.middle}</TableCell>
                </Grid>
              </Grid>
            </TableRow>
            <TableRow>
              <Grid container>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TableCell align="left" sx={{ fontWeight: "bold" }}>
                    Last name:
                  </TableCell>
                  <TableCell align="left">{data?.name.last}</TableCell>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TableCell align="left" sx={{ fontWeight: "bold" }}>
                    Phone:
                  </TableCell>
                  <TableCell align="left">{data?.phone}</TableCell>
                </Grid>
              </Grid>
            </TableRow>
            <TableRow>
              <Grid container>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TableCell align="left" sx={{ fontWeight: "bold" }}>
                    Email:
                  </TableCell>
                  <TableCell align="left">{data?.email}</TableCell>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TableCell align="left" sx={{ fontWeight: "bold" }}>
                    Password:
                  </TableCell>
                  <TableCell align="left">{data?.password}</TableCell>
                </Grid>
              </Grid>
            </TableRow>
            <TableRow>
              <Grid container>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TableCell align="left" sx={{ fontWeight: "bold" }}>
                    State:
                  </TableCell>
                  <TableCell align="left">{data?.address.state}</TableCell>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TableCell align="left" sx={{ fontWeight: "bold" }}>
                    Country:
                  </TableCell>
                  <TableCell align="left">{data?.address.country}</TableCell>
                </Grid>
              </Grid>
            </TableRow>
            <TableRow>
              <Grid container>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TableCell align="left" sx={{ fontWeight: "bold" }}>
                    City:
                  </TableCell>
                  <TableCell align="left">{data?.address.city}</TableCell>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TableCell align="left" sx={{ fontWeight: "bold" }}>
                    Street:
                  </TableCell>
                  <TableCell align="left">{data?.address.street}</TableCell>
                </Grid>
              </Grid>
            </TableRow>
            <TableRow>
              <Grid container>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TableCell sx={{ fontWeight: "bold" }} align="left">
                    House number:
                  </TableCell>
                  <TableCell align="left">
                    {data?.address.houseNumber}
                  </TableCell>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TableCell sx={{ fontWeight: "bold" }} align="left">
                    Zip:
                  </TableCell>
                  <TableCell align="left">{data?.address.zip}</TableCell>
                </Grid>
              </Grid>
            </TableRow>
          </Table>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfilePage;
