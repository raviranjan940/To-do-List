import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import AddTaskModal from './AddTaskModal';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            To-Do List
          </Typography>
          <Button 
            onClick={handleClickOpen} 
            sx={{ 
              padding: '10px 15px', 
              backgroundColor: '#2196f3', 
              color: '#fff', 
              '&:hover': { 
                backgroundColor: '#1976d2' 
              } 
            }}
          >
            Add New Task
          </Button>
        </Toolbar>
      </AppBar>
      <AddTaskModal open={open} handleClose={handleClose} />
    </>
  );
};

export default NavBar;
