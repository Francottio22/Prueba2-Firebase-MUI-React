import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, addTask, deleteTask, toggleTaskComplete } from '../../store/tasks/tasksSlice';
import { Button, List, ListItem, ListItemText, ListItemSecondaryAction, TextField } from '@mui/material';


export const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, isLoading } = useSelector((state) => state.tasks);
  const [input, setInput] = useState('');

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (input.trim().length === 0) return;
    dispatch(addTask({ text: input, completed: false }));
    setInput('');
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleComplete = (task) => {
    dispatch(toggleTaskComplete(task));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    
    <>
      <form onSubmit={handleAddTask}>
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          label="Add a Task"
          fullWidth

        />

        <Button type="submit" variant="contained" color="primary" style={{marginTop: '16px'}}>
          Add Task
        </Button>
      </form>

      <List>
        {tasks.map((task) => (
          <ListItem key={task.id} dense button onClick={() => handleToggleComplete(task)}>
            <ListItemText primary={task.text} secondary={`Completed: ${task.completed}`} />
            <ListItemSecondaryAction>
              <Button variant="contained" color="primary" onClick={() => handleDelete(task.id)}>
                Delete
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      </>
  );
};
