import React from 'react';
import { Link } from 'gatsby';
import Location from './Location';
import Social from './Social';
import Phone from './Phone';
import PatientLogin from './PatientLogin';

export default function Nav({ onClose = () => {} }) {
  const handleClick = (e, target) => {
    e.preventDefault();
    onClose();
    // Use setTimeout to allow menu to start closing before scroll
    setTimeout(() => {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <nav id="menu">
      <div className="inner">
        <ul>
          <li>
            <button onClick={onClose} onKeyDown={onClose} aria-label="Home">
              <Link to="/">Home</Link>
            </button>
          </li>
          <li>
            <button
              onClick={(e) => handleClick(e, '#About')}
              onKeyDown={(e) => handleClick(e, '#About')}
              aria-label="About"
            >
              <a href="#About">
                <span>About</span>
              </a>
            </button>
          </li>
          <li>
            <button
              onClick={(e) => handleClick(e, '#FamilyMedicine')}
              onKeyDown={(e) => handleClick(e, '#FamilyMedicine')}
              aria-label="Family Medicine"
            >
              <a href="#FamilyMedicine">
                <span>Family Medicine</span>
              </a>
            </button>
          </li>
          <li>
            <button
              onClick={(e) => handleClick(e, '#SportsMedicine')}
              onKeyDown={(e) => handleClick(e, '#SportsMedicine')}
              aria-label="Sports Medicine"
            >
              <a href="#SportsMedicine">
                <span>Sports Medicine</span>
              </a>
            </button>
          </li>
          <li>
            <button
              onClick={(e) => handleClick(e, '#PhysicianAssistant')}
              onKeyDown={(e) => handleClick(e, '#PhysicianAssistant')}
              aria-label="Physician Assistant"
            >
              <a href="#PhysicianAssistant">
                <span>Physician Assistant</span>
              </a>
            </button>
          </li>
          <li>
            <button
              onClick={(e) => handleClick(e, '#AthleticTraining')}
              onKeyDown={(e) => handleClick(e, '#AthleticTraining')}
              aria-label="Athletic Training"
            >
              <a href="#AthleticTraining">
                <span>Athletic Training</span>
              </a>
            </button>
          </li>
          <li>
            <button
              onClick={(e) => handleClick(e, '#NursePractitioner')}
              onKeyDown={(e) => handleClick(e, '#NursePractitioner')}
              aria-label="Nurse Practitioner"
            >
              <a href="#NursePractitioner">
                <span>Nurse Practitioner</span>
              </a>
            </button>
          </li>
          <li>
            <button
              onClick={(e) => handleClick(e, '#RequestAppointment')}
              onKeyDown={(e) => handleClick(e, '#RequestAppointment')}
              aria-label="Request Appointment"
            >
              <a href="#RequestAppointment">
                <span>Request Appointment</span>
              </a>
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
        onClick={(e) => {
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
