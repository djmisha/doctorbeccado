import React from 'react';
export default function ContactForm() {
  return (
    <section id="RequestAppointment">
      <h3>Request an Appointment</h3>
      <p>Please fill out this contact form to request an appointment.</p>
      <form
        method="post"
        action="/thank-you"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <div className="fields">
          <div className="field half">
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div className="field half">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="field half">
            <input type="phone" name="phone" id="phone" placeholder="Phone" />
          </div>
          <div className="field half">
            <input
              type="text"
              name="preffereddate"
              id="preffereddate"
              placeholder="Preffered Appointment Date"
            />
          </div>
          <div className="field">
            <textarea name="message" id="message" placeholder="Message" />
          </div>
        </div>
        <ul className="actions">
          <li>
            <input
              type="submit"
              value="Submit"
              className="secondary button icon fa-paper-plane"
            />
          </li>
        </ul>
      </form>
    </section>
  );
}
