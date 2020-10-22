import React from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '../Nav/Breadcrumbs';
import useTitle from '../Hooks/useTitle';
import './Header/Style.scss';

export default () => {

  const
  { pathname } = useLocation(),
  title = useTitle();

  return (
    <header className="center container">
      <h1>{pathname === '/'
        ? 'Tuan Anh Nguyen'
        : title}
      </h1>
      <Breadcrumbs />
    </header>
  );
};