import React from 'react';
import config from '../../config';

export default function Social() {
  return (
    <div className="footer-social">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a
                href={url}
                className={`icon ${icon}`}
                title="{name}"
                target="_blank"
                rel="noreferrer"
              >
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
