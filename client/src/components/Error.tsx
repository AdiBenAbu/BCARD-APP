import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "../providers/ThemeProvider";

type Props = {
  errorMessage: string;
};

const Error: React.FC<Props> = ({ errorMessage }) => {
  const { isDark } = useTheme();
  const color = isDark ? "white" : "black";
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" color="initial" sx={{ color }}>
            Oops... something went wrong: {errorMessage}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} justifyContent="center">
          {isDark ? (
            <img
              width="50%"
              src="/assets/images/errorDarkMode.png"
              alt="dark broken robot"
            />
          ) : (
            <img
              width="100%"
              src="/assets/images/broken-robot-error.png"
              alt="broken robot"
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Error;
