import React from 'react';
import { Link } from 'react-router-dom';
import gsState from './gsState';

interface ItemProps {
  children?: React.ReactNode;
  className?: string;
  from?: number;
  offset?: number;
  to?: number;
}

export default ({children, className, from, offset, to, ...props}: ItemProps) => {

  const
  currentPage = gsState('currentPage'),
  lastPage = gsState('lastPage'),
  target = from || to || currentPage + offset!;

  let classes = (className ? className + ' ' : '') + 'waves-effect';

  if ((from && currentPage - 3 <= 0)
   || (to && currentPage + 3 > lastPage)
   || target < 1
   || target > lastPage) {
    classes = 'hide';
  }

  return (
    <li className={classes} {...props}>
      <Link to={gsState('path') + target}>
        {children || target}
      </Link>
    </li>
  );
};