import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Grid,
} from '@material-ui/core';
import React from 'react';
import Form from './Form/Form';
import List from './List/List';
import useStyles from './styles';

const Main = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title='Expense Tracker' subheader='Powered by Speechly' />
      <CardContent>
        <Typography align='center' variant='h5'>
          Total Balance 100Rs
        </Typography>
        <Typography
          align='center'
          style={{ marginTop: '20px', lineHeight: '1.2em' }}
          variant='subtitle1'
        >
          {/* Info card */}
          Try saying add income for 1000 salary
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={20}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
