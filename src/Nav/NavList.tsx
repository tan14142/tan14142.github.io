import React from 'react';
import Routes from '../Router/Routes.json';
import NavItem from './NavItem';

interface NavList {
  id: string;
  props?: string;
}

export default React.forwardRef<HTMLUListElement, NavList>(({id, ...props}, ref) => {
  return (
    <ul
    id={id + "Ul"}
    ref={ref} {...props}>
      {filterRoutes(id).map(
        (props, key) => <NavItem key={key} {...props} />
      )}
    </ul>
  );
});

const filterRoutes = (id: string) => Routes.filter(
  entry => entry.path.includes('/' + id + '/')
);