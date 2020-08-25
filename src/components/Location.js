import React from 'react';
import config from '../../config';

export default function Location() {
  return (
    <div className="footer-social">
      <ul className="icons">
        {config.locations.map(location => {
          const { name, address, mapURL, phone } = location;
          return (
            <li key={name}>
              <span className="label">{name}</span>
              <div>
                <a href={mapURL} title="name" target="blank">
                  <span className="label">{address}</span>
                </a>
              </div>
              <a href={phone} title="phone">
                <span className="label">{phone}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
