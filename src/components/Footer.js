import React from 'react';
import ContactForm from './ContactForm';
import config from '../../config';
import { Link } from 'gatsby';
// import { Link } from 'gatsby';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="inner" id="request">
        <ContactForm />
        <section className="footer-location">
          <h4>Office Location</h4>
          <div>{config.locationName}</div>
          <div>
            <Link to="{config.locationLink}">{config.locationAddress}</Link>
          </div>
          <div>
            <Link to="{config.locationPhoneLink}">{config.locationPhone}</Link>
          </div>
          <br></br>
          <h4>Connect with me!</h4>
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
            <a href="https://asburymediagroup.com">Web Design</a> by Asbury
            Media Group
          </li>
        </ul>
      </div>
    </footer>
  );
}
