import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Filhal hum localStorage check kar rahe hain (Backend logic)
  const isAuthenticated = localStorage.getItem("userToken"); 

  if (!isAuthenticated) {
    // Agar login nahi hai toh wapas login page par bhej do
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;