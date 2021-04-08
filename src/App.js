import React from 'react';
import { Grid } from '@material-ui/core';
import Details from './components/Details/Details';
import useStyles from './styles';
import Main from './components/Main/Main';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const classes = useStyles();

  return (
    <>
      <ToastContainer />
      <Grid
        container
        spacing={0}
        alignItems='center'
        justify='center'
        style={{ height: '100vh' }}
        className={classes.grid}
      >
        <Grid item xs={12} sm={4}>
          <Details title='Income' />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title='Expense' />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
