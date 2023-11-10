import Header from "../components/header";
import { AuthProvider } from "../context/AuthContext";

export default function UserLayout({ children }) {
  return (
    <AuthProvider>
      <Header />
      <main>{children}</main>
    </AuthProvider>
  );
}
