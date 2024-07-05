import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Box } from '@mui/material';
import { addTask } from '../redux/taskSlice';

const TaskInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTask(input));
      setInput('');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}
    >
      <TextField
        label="New Task"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{ mr: 2, width: '300px' }}
      />
      <Button variant="contained" color="primary" type="submit">
        Add Task
      </Button>
    </Box>
  );
};

export default TaskInput;
