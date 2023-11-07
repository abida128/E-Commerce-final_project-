import React from 'react';
import ContactForm from '../components/ContactForm';
import Header from "../components/header";
import Button from "../components/button";
import Footer from "../components/footer";




function ContactPage() {
  return (
    <>
<Header />
    < br/>
    < br/>

    <div>
      <ContactForm />
    </div>
    <Footer />

    </>
  );
}

export default ContactPage;
