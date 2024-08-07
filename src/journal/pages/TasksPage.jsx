
import { MainLayout } from '../layout/MainLayout';
import { TaskForm } from '../components/TaskForm';
import { TaskList } from '../components/TaskList';
import { Box } from "@mui/material";

export const TasksPage = () => {
  return (
    <MainLayout>
      <Box>

      <TaskForm />

      </Box>
      
      <Box sx={{padding:5, display: 'flex', flexDirection:'column',
       
       
      }}>

      <TaskList />

      </Box>
    </MainLayout>
  );
};
