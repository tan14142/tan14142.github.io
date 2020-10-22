import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import DropDown from '../Components/DropDown';
import NavList from './NavList';
import LinkLinkedin from '../Components/LinkLinkedin';
import LinkGithub from '../Components/LinkGithub';
import LinkFacebook from '../Components/LinkFacebook';
import AutoComplete from '../Components/AutoComplete';
import './DesktopNav/Style.scss';

export default () => {

  const
  projectsRef = useRef<HTMLUListElement>(null),
  snippetsRef = useRef<HTMLUListElement>(null),
  aboutRef = useRef<HTMLUListElement>(null);

  return (
    <nav className="container hide-on-med-and-down" id="DesktopNav">
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <AutoComplete id="DesktopSearch" />
        </li>
        <li>
          <DropDown
          text="Projects"
          ulRef={projectsRef} />
          <NavList
          id="Projects"
          ref={projectsRef} />
        </li>
        <li>
          <DropDown
          text="Snippets"
          ulRef={snippetsRef} />
          <NavList
          id="Snippets"
          ref={snippetsRef} />
        </li>
        <li>
          <DropDown
          text="About"
          ulRef={aboutRef} />
          <NavList
          id="About"
          ref={aboutRef} />
        </li>
        <li className="right">
          <LinkFacebook />
        </li>
        <li className="right">
          <LinkGithub />
        </li>
        <li className="right">
          <LinkLinkedin />
        </li>
      </ul>
    </nav>
  );
};