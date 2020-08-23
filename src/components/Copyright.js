import React from 'react';
import config from '../../config';
import { Link } from 'gatsby';

export default function Copyright() {
  return (
    <ul className="copyright">
      <li>
        &copy; {config.siteTitle} - {config.siteDescription}. All rights
        reserved
      </li>
      <li>
        <a href="https://asburymediagroup.com">Web Design</a> by Asbury Media
        Group
      </li>
    </ul>
  );
}
