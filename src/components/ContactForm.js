import React from 'react';
import { navigate } from 'gatsby-link';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div id="RequestAppointment">
        <h3>Request an Appointment</h3>
        <p>Please fill out this contact form to request an appointment.</p>
        <form
          name="doctorbeccado.com"
          method="post"
          action="/thank-you/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <div className="fields">
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{' '}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </p>

            <div className="field half">
            
             <label>
              <input
                type="text"
                name="fullname"
                id="name"
                placeholder="Full Name"
                onChange={this.handleChange}
              />
              </label>
            </div>
            <div className="field half">
            <label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
              </label>
            </div>
            <div className="field half">
             <label>
              <input
                type="phone"
                name="phone"
                id="phone"
                placeholder="Phone"
                onChange={this.handleChange}
              />
              </label>
            </div>
            <div className="field half">
              <label>
                <input
                  type="text"
                  name="preffereddate"
                  id="preffereddate"
                  placeholder="Preffered Appointment Date"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="field">
              <label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  onChange={this.handleChange}
                />
              </label>
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
      </div>
    );
  }
}
