import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Routes from '../Router/Routes.json';
import NavItem from './NavItem';
import Clouds from '../App/Clouds';
import Waves from '../App/Waves';
import LinkLinkedin from '../Components/LinkLinkedin';
import LinkGithub from '../Components/LinkGithub';
import LinkFacebook from '../Components/LinkFacebook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SideNav/Style.scss';

export default React.forwardRef<HTMLElement, React.ReactNode>(({ children }, ref) => {
  
  const listGen = () => {
    const l = Routes.length;

    let i = 0,
      acc = [];

    for (; i < l; i++) {
      const { list, name } = Routes[i];

      if (list) {
        let children = [];

        for (; i < l; i++) {
          if (
            Routes[i + 1] &&
            Routes[i + 1].path.includes('/' + name + '/')
          ) {
            children.push(<NavItem key={i} {...Routes[i + 1]} />);
          } else {
            break;
          }
        }
        acc.push(
          <NavList key={i} name={name}>
            {children}
          </NavList>
        );
      } else {
        acc.push(<NavItem key={i} {...Routes[i]} />);
      }
    }
    return acc;
  };

  useEffect(() => {
    const instance = M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
    return () => {instance.map(entry => entry.destroy())};
  }, []);

  return (
    <nav
    className="flex-column hide-on-large-only reset sidenav"
    id="sidenav"
    ref={ref}>
      <Clouds />
      <ul>
        <li>
          <Link
          className="sidenav-close waves-effect"
          style={{
            color: '#ee6e73',
            fontSize: '2rem',
            fontWeight: 'bold'
          }}
          to="/">
            Home
          </Link>
        </li>
        <li>
          { children }
        </li>
        {listGen()}
        <li className="social-links">
          <LinkLinkedin />
          <LinkGithub />
          <LinkFacebook />
        </li>
      </ul>
      <Waves />
    </nav>
  );
});

const NavList = ({ children, name }: any) => {
  return (
    <li>
      <ul className="collapsible collapsible-accordion">
        <li>
          <button className="collapsible-header">
            {name}
            <FontAwesomeIcon icon="chevron-down" />
          </button>
          <ul className="collapsible-body">{children}</ul>
        </li>
      </ul>
    </li>
  );
};

//Blog / Dashboard expand down
//icon description folder code email person
//move keep notes to Guides.