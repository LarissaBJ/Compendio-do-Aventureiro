import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { isAuth } = useAuth();

  if (!isAuth()) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;




