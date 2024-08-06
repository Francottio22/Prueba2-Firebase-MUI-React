// components/TaskForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../store/tasks/tasksSlice';

export const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim().length > 0) {
      dispatch(addTask({ uid, task: { name: taskName } }));
      setTaskName('');
    }
  };

  return (
<>

</>

  );
};
