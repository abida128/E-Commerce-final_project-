// ** Component Imports
import GuestGuard from "../components/auth/GuestGuard";
import AuthGuard from "../components/auth/AuthGuard";
import UserLayout from "../layouts/UserLayout";

// ** Spinner Import
import Spinner from "../components/spinner";

const Guard = ({ children, authGuard, guestGuard, skipAuthCheck }) => {
  if (guestGuard) {
    return (
      <GuestGuard skipAuthCheck={skipAuthCheck} fallback={<Spinner />}>
        {children}
      </GuestGuard>
    );
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>;
  } else {
    return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>;
  }
};

export const GuardWrapper = (props) => {
  const { children } = props;
  // Variables
  const getLayout =
    props.getLayout ?? ((page) => <UserLayout>{page}</UserLayout>);
  const authGuard = props.authGuard ?? true;
  const guestGuard = props.guestGuard ?? false;
  const skipAuthCheck = props.skipAuthCheck ?? false;

  return (
    <Guard
      authGuard={authGuard}
      guestGuard={guestGuard}
      skipAuthCheck={skipAuthCheck}
    >
      {getLayout(children)}
    </Guard>
  );
};
