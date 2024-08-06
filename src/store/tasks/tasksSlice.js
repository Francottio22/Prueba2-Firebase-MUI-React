
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';

// Fetch tasks from Firestore
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const tasksCollection = collection(FirebaseDB, 'todos');
  const tasksSnapshot = await getDocs(tasksCollection);
  const tasksList = tasksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return tasksList;
});

// Add a new task to Firestore
export const addTask = createAsyncThunk('tasks/addTask', async (task) => {
  const tasksCollection = collection(FirebaseDB, 'todos');
  const newTask = await addDoc(tasksCollection, task);
  return { id: newTask.id, ...task };
});

// Delete a task from Firestore
export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId) => {
  const taskDoc = doc(FirebaseDB, `todos/${taskId}`);
  await deleteDoc(taskDoc);
  return taskId;
});

// Update task completion status in Firestore
export const toggleTaskComplete = createAsyncThunk('tasks/toggleTaskComplete', async (task) => {
  const taskDoc = doc(FirebaseDB, `todos/${task.id}`);
  await updateDoc(taskDoc, { completed: !task.completed });
  return task;
});

// Slice for managing tasks
export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.isLoading = false;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
      })
      .addCase(toggleTaskComplete.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(task => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index].completed = action.payload.completed;
        }
      });
  },
});

export default tasksSlice.reducer;
