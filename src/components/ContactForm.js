import React from 'react';
export default function ContactForm() {
  return (
    <section>
      <h3>Request an Appointment</h3>
      <p>Fill out this contact form and you'll will recieve a call back.</p>
      <form
        method="post"
        // action="/success"
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
            <input type="submit" value="Submit" className="primary" />
          </li>
        </ul>
      </form>
    </section>
  );
}
