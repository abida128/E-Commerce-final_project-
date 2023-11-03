// ** React Imports
import { useEffect } from "react";

// ** Next Import
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";

// ** Hooks Import
import { useAuth } from "../../hooks/useAuth";

const AuthGuard = (props) => {
  const { children, fallback } = props;
  const auth = useAuth();
  const router = useNavigate();
  const location = useLocation();

  useEffect(
    () => {
      if (auth.user === null && !localStorage.getItem("userData")) {
        if (location.pathname !== "/") {
          router({
            pathname: "/login",
            search: createSearchParams({
              returnUrl: location.pathname,
            }).toString(),
          });
        } else {
          router("/login");
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location]
  );

  if (auth.loading || auth.user === null) {
    return fallback;
  }

  return <>{children}</>;
};

export default AuthGuard;
