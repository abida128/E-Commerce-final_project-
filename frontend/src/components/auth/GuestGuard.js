// ** React Imports
import { useEffect } from "react";

// ** React Router Dom Import
import { useNavigate, useLocation } from "react-router-dom";

// ** Hooks Import
import { useAuth } from "../../hooks/useAuth";

const GuestGuard = (props) => {
  const { children, fallback, skipAuthCheck } = props;
  const auth = useAuth();
  const router = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("userData") && !skipAuthCheck) {
      router("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  if (auth.loading) return fallback;

  return <>{children}</>;
};

export default GuestGuard;
