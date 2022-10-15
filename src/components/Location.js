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
                <i className="fa fa-map-marker" aria-hidden="true"></i> <span>{address}</span>
                </a>
              </div>
              <p className="hours"><i className="fa fa-clock-o" aria-hidden="true"></i> Office Hours: {hours}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
