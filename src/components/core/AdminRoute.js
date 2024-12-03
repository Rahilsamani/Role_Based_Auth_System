import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children, allowedRoles = [] }) => {
  const { token, user } = useSelector((state) => state.auth);

  if (!token) return <Navigate to="/login" />;

  if (user && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard/track" />;
  }

  return children;
};

export default AdminRoute;
