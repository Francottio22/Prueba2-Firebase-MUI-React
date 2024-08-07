// components/TaskForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/tasks/tasksSlice';
import { TextField, Button, Box } from '@mui/material';

export const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim().length > 0 && taskDescription.trim().length > 0) {
      dispatch(addTask({ name: taskName, description: taskDescription, completed: false }));
      setTaskName('');
      setTaskDescription('');
    }
  };

  return (

    <>
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Task Title"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        fullWidth
      />
      <TextField
        label="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        fullWidth
      />
    

    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center',
  borderColor:"secondary", padding: 2
}}>
<Button type="submit" color="secondary" variant='outlined'   >
  Add Task
</Button>
</Box>

    </Box>


  
</>
  );
};
