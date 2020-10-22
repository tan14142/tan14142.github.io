import React from 'react';
import { Link } from 'react-router-dom';
import includeDash from '../Router/includeDash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({
  name, path,
  icon = 'code'
}: any) => {

  return (
    <li>
      <Link
      className="sidenav-close waves-effect"
      to={ includeDash(name, path) }>
        <FontAwesomeIcon icon={icon} />
        {name}
      </Link>
    </li>
  );
};