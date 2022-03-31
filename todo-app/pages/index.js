import { Grid ,Box, Container, Stack, Typography } from "@mui/material";
import { margin } from "@mui/system";
import React from "react";
import TodoListCard from "../src/Components/TodoListCard";
const index = () => (
  <Container  >
    <Typography variant="h3" textAlign={"center"} sx={{ marginTop: 5, marginBottom: 5 }}>
      TODO LIST
    </Typography>
    <Grid container spacing={{ xs: 2, md: 3, lg:5}} columns={{ xs: 4, sm: 8, md: 12, lg:12, xl:12}}>
    <Grid item xs={12} sm={4} md={4} xl={12}>
    <TodoListCard isCreator="true"
      title="To Do"
      subheader="Things that need to be done"
    />
    </Grid>
    <Grid item xs={12} sm={4} md={4} xl={12}>
    <TodoListCard title="Doing"
      subheader="What are you doing"/>
    </Grid>
    <Grid item xs={12} sm={4} md={4} xl={12}>
    <TodoListCard  title="Done"
      subheader="Already Done"/>
    </Grid>
    <Grid item xs={12} sm={4} md={4} xl={12}>
    <TodoListCard title="Archive"
      subheader="Not Important but need to write down"/>
    </Grid>
</Grid>
  </Container>
);

export default index;
