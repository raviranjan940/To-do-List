import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import { Box } from '@mui/material';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <Box>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </Box>
  );
};

export default TaskList;

