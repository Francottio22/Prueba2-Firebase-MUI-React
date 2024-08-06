import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

import { TasksRoutes } from '../journal/routes/TasksRoutes';
import { CheckingAuth } from '../ui/';
import { useCheckAuth } from '../hooks';


export const AppRouter = () => {

  const status = useCheckAuth();

  if ( status === 'checking' ) {
    return <CheckingAuth />
  }

  return (
    <Routes>

        {
          (status === 'authenticated')
           ? <Route path="/*" element={ <TasksRoutes /> } />
           
           : <Route path="/auth/*" element={ <AuthRoutes /> } />
        }

        <Route path='/*' element={ <Navigate to='/auth/login' />  } />

        {/* Login y Registro */}
        {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

        {/* JournalApp */}
        {/* <Route path="/*" element={ <JournalRoutes /> } /> */}

    </Routes>
  )
}
