import React, { useContext, useState } from 'react';
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { v4 as uuidV4 } from 'uuid';
import useStyles from './styles';
import { ExpenseTrackerContext } from '../../../context/context';
import { toast } from 'react-toastify';

const initialState = {
  amount: '',
  category: 'Anonymous',
  type: 'Income',
  date: new Date(),
};

const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const { amount, category, type, date } = formData;
  const classes = useStyles();
  const { addTransaction } = useContext(ExpenseTrackerContext);

  const handleSubmit = () => {
    if (!amount) {
      toast.error('Amount is required!');
      return;
    }
    const transaction = { ...formData, amount: +amount, id: uuidV4() };
    addTransaction(transaction);
    setFormData(initialState);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align='center' variant='subtitle2' gutterBottom>
          ....
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value='Income'>Income</MenuItem>
            <MenuItem value='Expense'>Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            required
            value={category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <MenuItem value='Anonymous'>Anonymous</MenuItem>
            <MenuItem value='Business'>Business</MenuItem>
            <MenuItem value='Salary'>Salary</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          required
          type='number'
          fullWidth
          label='Amount'
          value={amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type='date'
          fullWidth
          label='Date'
          value={date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </Grid>
      <Button
        className={classes.button}
        fullWidth
        variant='outlined'
        color='primary'
        onClick={handleSubmit}
        type='submit'
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
