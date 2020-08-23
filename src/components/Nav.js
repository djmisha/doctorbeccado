import React from 'react';
import { Link } from 'gatsby';
import config from '../../config';

export default function Nav({ onClose = () => {} }) {
  return (
    <nav id="menu">
      <div className="inner">
        {/* <p>Menu</p> */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#request">Request Appointment</a>
          </li>
        </ul>

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
      </div>
      <a
        className="close"
        onClick={e => {
          e.preventDefault();
          onClose();
        }}
        href="#menu"
      >
        Close
      </a>
    </nav>
  );
}
