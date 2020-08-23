import React from 'react';
import ContactForm from './ContactForm';
import Location from './Location';
import Social from './Social';
import Copyright from './Copyright';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="inner" id="request">
        <ContactForm />
        <section className="footer-location">
          <h4>Office Location</h4>
          <Location />
          <br></br>
          <br></br>
          <h4>Connect with me!</h4>
          <Social />
          <Copyright />
        </section>
      </div>
    </footer>
  );
}
