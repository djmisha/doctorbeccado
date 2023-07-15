import React from 'react';
import config from '../../config';

export default function Copyright() {
  return (
    <ul className="copyright">
      <li>
        &copy; {config.siteTitle} - {config.siteDescription}. All rights
        reserved.
      </li>
    </ul>
  );
}
