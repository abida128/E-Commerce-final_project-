import BlankLayout from "../../layouts/BlankLayout";
import { GuardWrapper } from "../../layouts/GuardWrapper";

function LandingPage(props) {
  return <GuardWrapper {...props}>"landing page";</GuardWrapper>;
}

LandingPage.defaultProps = {
  getLayout: (page) => <BlankLayout>{page}</BlankLayout>,
  guestGuard: false,
};

export default LandingPage;
