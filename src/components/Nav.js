import React from 'react';
import { Link } from 'gatsby';
import Location from './Location';
import Social from './Social';

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
        <br></br>
        <Social />
        <br></br>
        <Location />
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
