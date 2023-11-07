import { Suspense, useEffect } from "react";
import AOS from "aos";
import { AuthProvider } from "../context/AuthContext";
import Spinner from "../components/spinner";
import Footer from "../components/footer";
import Header from "../components/header";

export const SuspenseLayout = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <AuthProvider>
      <Header />
      <Suspense fallback={<Spinner />}>{children}</Suspense>
      <Footer />
    </AuthProvider>
  );
};
