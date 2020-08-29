import React from 'react';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Location from './Location';
import Social from './Social';

export default function Nav({ onClose = () => {} }) {
  return (
    <nav id="menu">
      <div className="inner">
        <ul>
          <li>
            <button
              onClick={e => {
                e.preventDefault();
                onClose();
              }}
              onKeyDown={e => {
                e.preventDefault();
                onClose();
              }}
            >
              <Link to="/">Home</Link>
            </button>
          </li>
          <li>
            <button
              onClick={e => {
                e.preventDefault();
                onClose();
              }}
              onKeyDown={e => {
                e.preventDefault();
                onClose();
              }}
            >
              <AnchorLink to="#About" title="About">
                <span>About</span>
              </AnchorLink>
            </button>
          </li>
          <li>
            <button
              onClick={e => {
                e.preventDefault();
                onClose();
              }}
              onKeyDown={e => {
                e.preventDefault();
                onClose();
              }}
            >
              <AnchorLink to="#FamilyMedicine" title="FamilyMedicine">
                <span>Family Medicine</span>
              </AnchorLink>
            </button>
          </li>
          <li>
            <button
              onClick={e => {
                e.preventDefault();
                onClose();
              }}
              onKeyDown={e => {
                e.preventDefault();
                onClose();
              }}
            >
              <AnchorLink to="#SportsMedicine" title="SportsMedicine">
                <span>Sports Medicine</span>
              </AnchorLink>
            </button>
          </li>
          <li>
            <button
              onClick={e => {
                e.preventDefault();
                onClose();
              }}
              onKeyDown={e => {
                e.preventDefault();
                onClose();
              }}
            >
              <AnchorLink to="#RequestAppointment" title="Request Appointment">
                <span>Request Appointment</span>
              </AnchorLink>
            </button>
          </li>
        </ul>
        <br></br>
        <Social />
        <br></br>
        <section className="nav-locations">
          <Location />
        </section>
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
