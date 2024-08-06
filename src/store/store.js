
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import  tasksReducer  from './tasks/tasksSlice';



export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    tasks: tasksReducer,
    

  },
});