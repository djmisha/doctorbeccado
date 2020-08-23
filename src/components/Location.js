import React from 'react';
import config from '../../config';
import { Link } from 'gatsby';

export default function Location() {
  return (
    <div>
      <div>{config.locationName}</div>
      <div>
        <Link to="{config.locationLink}">{config.locationAddress}</Link>
      </div>
      <br></br>
      <div>
        <Link to="{config.locationPhoneLink}">{config.locationPhone}</Link>
      </div>
      <br></br>
    </div>
  );
}
