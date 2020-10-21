import React from 'react';
import { Grid, Paper,Container,Typography,CssBaseline,  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Table from "./table";
import AppBarr from "./appBarr";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: "#1aa0e8",
      fontFamily: 'cursive',
      fontSize: "30px",
      color: "#e9ebf0",
    },

} ) );

export default function SimpleContainer() {
    const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
          <Container>
              <Grid container spacing={3}>
                  <Grid item xs={ 12 } >
                      <Paper className={ classes.paper }>Your Contact</Paper>
                      <AppBarr/>
                  </Grid>
                  <Grid item xs={12}>
                      <Table />
                  </Grid>
              </Grid>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}
