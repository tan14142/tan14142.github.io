import React from 'react';
import './Hamburger/Style.scss';

interface HamburgerProps {
  active?: boolean;
  className: string;
  props?: any;
}

export default ({ active, className, ...props}: HamburgerProps) => {

  let classes = className + ' hamburger--spin';
  
  if (active !== undefined) {
    classes += ' is-active';
    classes += active ? '' : '-r';
  }

  return (
    <button
    className={classes}
    {...props}>
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
};