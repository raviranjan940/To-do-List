import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../redux/taskSlice';
import { Checkbox, IconButton, TextField, Box, Typography } from '@mui/material';
import { Delete, Edit, Save } from '@mui/icons-material';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editTask({ id: task.id, text: editText }));
    setIsEditing(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: 2,
        p: 2,
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: task.completed ? '#e0e0e0' : '#fff'
      }}
    >
      <Checkbox checked={task.completed} onChange={handleToggle} />
      {isEditing ? (
        <TextField
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          sx={{ flexGrow: 1, mr: 2 }}
        />
      ) : (
        <Typography
          sx={{
            flexGrow: 1,
            textDecoration: task.completed ? 'line-through' : 'none'
          }}
        >
          {task.text}
        </Typography>
      )}
      {isEditing ? (
        <IconButton onClick={handleSave}>
          <Save />
        </IconButton>
      ) : (
        <>
          <IconButton onClick={handleEdit}>
            <Edit />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <Delete />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default Task;
