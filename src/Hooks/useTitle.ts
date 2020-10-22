import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default () => {
  const
  { pathname } = useLocation(),
  [title, setTitle] = useState(getTitle(pathname));

  useEffect(() => {
    const title = getTitle(pathname);
    document.title = 'tan14142 | ' + title;
    setTitle(title);
  }, [pathname]);

  return title;
};

function getTitle(pathname: string) {
  const path = pathname.split('/');
  return (path[2] || path[1] || "Home").replace(/-/g, ' ');
};