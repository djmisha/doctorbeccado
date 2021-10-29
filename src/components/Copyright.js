import React from 'react';
import config from '../../config';

export default function Copyright() {
  return (
    <ul className="copyright">
      <li>
        &copy; {config.siteTitle} - {config.siteDescription}. All rights
        reserved.
      </li>
      <li>
        <a href="https://asburymediagroup.com" target="_blank" rel="noreferrer">
          Web Design &amp; Development
        </a>{' '}
        by Asbury Media Group
      </li>
    </ul>
  );
}
