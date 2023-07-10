import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "./../components/PageHeader";
import Grid from "@mui/material/Grid";
import FormLink from "../forms/components/FormLink";
import { useTheme } from "../providers/ThemeProvider";
import { Typography } from "@mui/material";
import ROUTES from "../routes/routesModel";

const AboutPage = () => {
  const { isDark } = useTheme();
  const color = isDark ? "1px solid white" : "1px solid black";

  return (
    <Container maxWidth="lg" sx={{ paddingBottom: 2 }}>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />

      <Grid container border={color}>
        <Grid item xs={12} md={8} alignSelf="center" sx={{ p: 3 }}>
          <Typography variant="h4" component="h2">
            ESCAPE ROOM APPLICATION
          </Typography>
          <br />
          <br />
          <Typography component="p" variant="body1">
            Looking for an experiential and unconventional attraction?
            <br />
            So you came to the right place! this is the largest and oldest
            escape room site.
            <br />
            There are rooms of the highest standard and you could find them
            easily.
            <br />
            Get ready for a challenging experience that combines original
            puzzles, action, adrenaline and lots of surprises for groups of
            adults and children, an unusual meeting of friends, an exciting
            couple's time and also fun for the whole family.
            <br />
            So what are you waiting for? Start looking for the room that suits
            you!
            <br />
            <br />
            business owner?
            <br />
            What are you waiting for? Advertise your business here and share it
            with everyone!
          </Typography>
          <br />
          <br />
          {
            <FormLink
              text="So what are you waiting for? to register"
              to={ROUTES.SIGNUP}
            />
          }
          <div>
            {" "}
            {
              <FormLink
                text="Already have an account? please"
                to={ROUTES.LOGIN}
              />
            }
          </div>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: { md: "flex", xs: "none" },
            justifyContent: "center",
          }}
        >
          <img src="/assets/images/card.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
