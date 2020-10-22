import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default ({ text, ulRef, ...props }: any) => {

  const [ref, setRef] = useState<any>({});

  useEffect(() => {
    setRef(ulRef.current);
    ulRef.current.classList.add('dropdown-content');
  }, [ulRef]);

  useEffect(() => {
    if (Object.keys(ref).length) {
      const
      btn = document.querySelectorAll('#' + ref.id + 'Btn');
      btn[0].classList.add('dropdown-trigger');

      const
      instances = M.Dropdown.init(btn, {
        constrainWidth: false,
        coverTrigger: false,
        hover: true
      });
      
      return () => {
        instances.map(instance => instance.destroy());
      };
    }
  }, [ref]);

  return (
    <Link
    data-target={ref.id}
    id={ref.id + 'Btn'}
    to={'/' + String(ref.id).replace('Ul', '')}
    {...props}>
      {text}
    </Link>
  );
};