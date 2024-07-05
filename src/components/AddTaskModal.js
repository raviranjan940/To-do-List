import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

const AddTaskModal = ({ open, handleClose }) => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  
  const handleAddTask = () => {
    if (input.trim()) {
      dispatch(addTask(input));
      handleClose();
      setInput(''); 
    }
  };

  useEffect(() => {
    if (!open) {
      setInput(''); 
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New Task</DialogTitle>
      <DialogContent dividers>
        <TextField
          autoFocus
          margin="dense"
          label="Task"
          type="text"
          fullWidth
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained" sx={{ backgroundColor: '#2196f3', color: '#fff' }}>
          Cancel
        </Button>
        <Button onClick={handleAddTask} variant="contained" sx={{ backgroundColor: '#2196f3', color: '#fff' }}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTaskModal;
