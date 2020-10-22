import React, { useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import './Transition/Style.scss';

interface TransitionProps {
  children: React.ReactNode;
}

export default ({ children }: TransitionProps) => {
  
  const
  location = useLocation(),
  mainRef = useRef(null);
  
  return (
    <SwitchTransition>
      <CSSTransition
      classNames="fadeIn"
      key={location.pathname}
      nodeRef={mainRef}
      timeout={0}>
        <main
        className="container flex-column"
        ref={mainRef}>
          {children}
        </main>
      </CSSTransition>
    </SwitchTransition>
  );
};