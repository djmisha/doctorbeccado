import React from 'react';
import config from '../../config';

export default function Location() {
  return (
    <div className="footer-locations">
      <ul className="locations-list">
        {config.locations.map(location => {
          const { name, address, mapURL, hours } = location;
          return (
            <li key={name}>
              <span className="label">{name}</span>
              <div>
                <a href={mapURL} title="name" target="blank" rel="noreferrer">
                  <span>{address}</span>
                </a>
              </div>
              <p className="hours">Office Hours: {hours}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
