import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { isAuth, role } = useSelector((s) => s.users);
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  if (
    window.location.pathname.startsWith("/admin") &&
    role.toLowerCase() != "admin"
  ) {
    return <Navigate to="/notfound" />;
  }
  return children;
};

export default PrivateRoute;
