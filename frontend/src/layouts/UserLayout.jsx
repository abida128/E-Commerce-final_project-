import Header from "../components/header";

export default function UserLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
