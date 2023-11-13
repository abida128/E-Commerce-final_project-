import { Suspense, useEffect } from "react";
import AOS from "aos";
import { AuthProvider } from "../context/AuthContext";
import Spinner from "../components/spinner";
import Footer from "../components/footer";

export const SuspenseLayout = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <AuthProvider>
      <Suspense fallback={<Spinner />}>{children}</Suspense>
    </AuthProvider>
  );
};
