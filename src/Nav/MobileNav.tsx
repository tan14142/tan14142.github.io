import React, { useEffect, useRef, useState } from "react";
import AutoComplete from '../Components/AutoComplete';
import Hamburger from '../Components/Hamburger';
import SideNav from './SideNav';
import useResizeObserver from '../Hooks/useResizeObserver';

export default () => {

  const
  classes = 'btn-floating hide-on-large-only sidenav-trigger',
  [hamburger, setHamburger] = useState<any>({ className: classes }),
  [bodyRef, setBodyRef] = useState<HTMLElement | null>(null),
  navRef = useRef<HTMLElement | null>(null),
  sidenavRef = useRef<M.Sidenav | null>(null),
  { width: bodyWidth } = useResizeObserver(bodyRef),
  setter = useRef(setHamburger);

  useEffect(() => {
    sidenavRef.current = M.Sidenav.init(navRef.current as Element, {
      onOpenStart: () => setter.current(
        (state: any) => ({ ...state, active: true })
      ),
      onCloseStart: () => setter.current(
        (state: any) => ({ ...state, active: false })
      )
    });
    return () => sidenavRef.current!.destroy();
  }, []);

  useEffect(() => {
    setBodyRef(document.body);
  }, []);

  useEffect(() => {
    if (bodyWidth > 992) {
      sidenavRef.current?.close();
    }
  }, [bodyWidth]);

  return (
    <>
      <SideNav ref={navRef}>
        <AutoComplete
        id="MobileSearch"
        sidenav={sidenavRef} />
      </SideNav>
      <div className="fixed-action-btn">
        <Hamburger
        {...hamburger}
        data-target="sidenav" />
      </div>
    </>
  );
};