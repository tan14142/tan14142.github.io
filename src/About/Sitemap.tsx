import React from 'react';
import NavList from '../Nav/NavList';
import './Sitemap/Style.scss';

export default ({whitelist = ['Projects', 'Snippets', 'About']}) => {
  return (
    <>
      {whitelist.map((value, key) => {
        return (
          <section
          className="accent-bottom center-content panel panel-padded1 sitemap"
          key={key}>
            <h2>{whitelist.length > 1 ? value : 'Links'}</h2>
            <NavList
            id={value}
            ref={null} />
          </section>
        );
      })}
    </>
  );
};