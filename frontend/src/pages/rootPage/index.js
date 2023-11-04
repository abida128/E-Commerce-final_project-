import BlankLayout from "../../layouts/BlankLayout";
import { GuardWrapper } from "../../layouts/GuardWrapper";
import UserLayout from "../../layouts/UserLayout";

function LandingPage(props) {
  return <GuardWrapper {...props}>"landing page";</GuardWrapper>;
}

LandingPage.defaultProps = {
  getLayout: (page) => <UserLayout>{page}</UserLayout>,
  guestGuard: false,
};

export default LandingPage;
