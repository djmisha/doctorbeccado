import React from 'react';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Location from './Location';
import Social from './Social';
import Phone from './Phone';
import PatientLogin from './PatientLogin';

export default function Nav({ onClose = () => {} }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClose();
  }
  return (
    <nav id="menu">
      <div className="inner">
        <ul>
          <li>
            <button onClick={e => handleClick(e)} onKeyDown={e => handleClick(e)}>
              <Link to="/">Home</Link>
            </button>
          </li>
          <li>
            <button onClick={e => handleClick(e)} onKeyDown={e => handleClick(e)}>
              <AnchorLink to="#About" title="About">
                <span>About</span>
              </AnchorLink>
            </button>
          </li>
          <li>
            <button onClick={e => handleClick(e)} onKeyDown={e => handleClick(e)}>
              <AnchorLink to="#FamilyMedicine" title="FamilyMedicine">
                <span>Family Medicine</span>
              </AnchorLink>
            </button>
          </li>
          <li>
            <button onClick={e => handleClick(e)} onKeyDown={e => handleClick(e)}>
              <AnchorLink to="#SportsMedicine" title="SportsMedicine">
                <span>Sports Medicine</span>
              </AnchorLink>
            </button>
          </li>
          <li>
            <button onClick={e => handleClick(e)} onKeyDown={e => handleClick(e)}>
              <AnchorLink to="#PhysicianAssistant" title="PhysicianAssistant">
                <span>Physician Assistant</span>
              </AnchorLink>
            </button>
          </li>
          <li>
            <button onClick={e => handleClick(e)} onKeyDown={e => handleClick(e)}>
              <AnchorLink to="#AthleticTraining" title="AthleticTraining">
                <span>Athletic Training</span>
              </AnchorLink>
            </button>
          </li>
          <li>
            <button onClick={e => handleClick(e)} onKeyDown={e => handleClick(e)}>
              <AnchorLink to="#NursePractitioner" title="NursePractitioner">
                <span>Nurse Practitioner</span>
              </AnchorLink>
            </button>
          </li>
          <li>
            <button onClick={e => handleClick(e)} onKeyDown={e => handleClick(e)}>
              <AnchorLink to="#RequestAppointment" title="Request Appointment">
                <span>Request Appointment</span>
              </AnchorLink>
            </button>
          </li>
        </ul>
        <Phone />
        <PatientLogin />
        <div className="nav-locations">
          <Location />
        </div>
        <br></br>
        <Social />
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
