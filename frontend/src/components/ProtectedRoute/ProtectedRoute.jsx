import { Navigate } from 'react-router';
import { getToken } from '@/service/api';

export function ProtectedRoute({ children }) {
  if (!getToken()) return <Navigate to="/login" replace />;
  return children;
}
