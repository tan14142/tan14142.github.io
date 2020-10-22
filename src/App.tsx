import React, { useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import DesktopNav from './Nav/DesktopNav';
import MobileNav from './Nav/MobileNav';
import Header from './App/Header';
import Transition from './App/Transition';
import Router from './Router';
import Clouds from './App/Clouds';
import Waves from './App/Waves';
import './Vendor/FontAwesome';
import './App/Style.scss';

export default () => {

  const articleRef = useRef(null);

  return (
    <>
      <Clouds />
      <BrowserRouter>
        <DesktopNav />
        <MobileNav />
        <article
        className="flex-column"
        ref={articleRef}>
          <Header />
          <Transition>
            <Router />
          </Transition>
        </article>
      </BrowserRouter>
      <Waves />
    </>
  );
};