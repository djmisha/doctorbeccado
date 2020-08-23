import React from 'react';
import ContactForm from './ContactForm';
import config from '../../config';
import { Link } from 'gatsby';
// import { Link } from 'gatsby';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="inner" id="schedule">
        <ContactForm />
        <section>
          <h3>Office Location</h3>
          <Link to="{config.locationLink}">{config.locationAddress}</Link>
          <Link to="{config.locationPhoneLink}">{config.locationPhone}</Link>
          <h3>Connect</h3>
          <ul className="icons">
            {config.socialLinks.map(social => {
              const { icon, name, url } = social;
              return (
                <li key={url}>
                  <a href={url} className={`icon ${icon}`}>
                    <span className="label">{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
        <ul className="copyright">
          <li>
            &copy; {config.siteTitle} - {config.siteDescription}. All rights
            reserved
          </li>
          <li>
            Web Design by <a href="http://html5up.net">Asbury Media Group</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
