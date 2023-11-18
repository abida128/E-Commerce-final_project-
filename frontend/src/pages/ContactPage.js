import React from "react";
import ContactForm from "../components/ContactForm";
import { GuardWrapper } from "../layouts/GuardWrapper";
import UserLayout from "../layouts/UserLayout";

function ContactPage(props) {
  return (
    <GuardWrapper {...props} classname="mt-10 ">
      <ContactForm />
    </GuardWrapper>
  );
}

export default ContactPage;

ContactPage.defaultProps = {
  getLayout: (page) => <UserLayout>{page}</UserLayout>,
  guestGuard: false,
  authGuard: false,
};
