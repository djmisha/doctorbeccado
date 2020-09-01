import React from 'react';
import ContactForm from './ContactForm';
import Location from './Location';
import Social from './Social';
import Copyright from './Copyright';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="inner">
        <ContactForm />
        <div className="footer-location">
          <h4>Office Locations</h4>
          <br></br>
          <Location />
          <br></br>
          <br></br>
          <h4>Connect with me!</h4>
          <Social />
        </div>
      </div>
      <Copyright />
      {/* </div> */}
    </footer>
  );
}
