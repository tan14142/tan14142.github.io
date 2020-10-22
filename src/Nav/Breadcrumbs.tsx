import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs/Style.scss';

export default () => {
  
  const
  { pathname } = useLocation(),
  path = pathname.split('/')[1];
  
  return (path === ''
    ? <h4
      className="black-text transparent"
      style={{
        fontWeight: 100
      }}>
        Developer | Analyst | Engineer
      </h4>
    : (
      <nav className="breadcrumbs reset">
        #!/
        <Link className="waves-effect" to="/">
          Home
        </Link>
        /
        {path
          ? (
            <>
              <Link
              className="waves-effect"
              to={'/' + path}>
                {path}
              </Link>
              /
            </>
        ) : ''}
      </nav>
    )
  );
};