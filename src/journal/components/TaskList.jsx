// components/TaskList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, deleteTask, toggleTaskComplete } from '../../store/tasks/tasksSlice';
import { Button, List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox , ButtonGroup,Box, IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, isLoading } = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleComplete = (task) => {
    dispatch(toggleTaskComplete(task));
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true; // Traer todas las tareas
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <Box sx={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
      <ButtonGroup size="large" aria-label="Large button group" style={{ marginBottom: '16px' }}>
        <Button onClick={() => handleFilterChange('all')} color={filter === 'all' ? 'primary' : 'secondary'}>All</Button>
        <Button onClick={() => handleFilterChange('completed')} color={filter === 'completed' ? 'primary' : 'secondary'}>Completed</Button>
        <Button onClick={() => handleFilterChange('incomplete')} color={filter === 'incomplete' ? 'primary' : 'secondary'}>Incomplete</Button>
      </ButtonGroup>
      </Box>

      <List>
        {filteredTasks.map((task) => (
          <ListItem key={task.id} dense>
            <Checkbox
              checked={task.completed}
              onChange={() => handleToggleComplete(task)}
              color="success"
            />
            <ListItemText 
              primary={task.name} 
              secondary={`Description: ${task.description}`}
            />
            <ListItemSecondaryAction>
            <IconButton edge="end" color="error" onClick={() => handleDelete(task.id)}>
              <DeleteIcon />
            </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </>
  );
};