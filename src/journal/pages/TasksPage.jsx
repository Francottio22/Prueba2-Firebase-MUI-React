
import { MainLayout } from '../layout/MainLayout';
import { TaskForm } from '../components/TaskForm';
import { TaskList } from '../components/TaskList';

export const TasksPage = () => {
  return (
    <MainLayout>
      <TaskForm />
      
      <TaskList />
    </MainLayout>
  );
};
