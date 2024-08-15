import React from "react";
import { Container, AppBar, Typography, Grid, Grow } from "@material-ui/core";
import memories from "./images/memories.png";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Hello Vikash Nayan
        </Typography>
        <img src={memories} alt="memories" height="160" />
      </AppBar>
    </Container>
  );
};

export default App;
