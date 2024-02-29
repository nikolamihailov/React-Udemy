import { useEffect } from "react";
import { useAuth } from "../contexts/FakeAuthentication";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigateTo("/");
  });
  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
