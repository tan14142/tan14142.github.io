import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import getRoutes from './AutoComplete/getRoutes';
import M from 'materialize-css';

interface AutoCompleteProps {
  id: string;
  sidenav?: React.RefObject<M.Sidenav>;
}

export default ({ id, sidenav }: AutoCompleteProps) => {

  const
  history = useHistory(),
  labelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    const els = document.querySelectorAll('#' + id);
    var instance = M.Autocomplete.init(els[0], {
      data: getRoutes(),
      onAutocomplete: loc => {
        const el = (els[0] as HTMLInputElement);
        el.blur();
        labelRef.current!.setAttribute('class', '');
        sidenav?.current?.close();
        el.value = '';
        
        history.push(loc);
      }
    });
    return () => instance.destroy();
  });

  return (
    <div className="input-field">
      <i className="material-icons prefix">search</i>
      <input
      className="autocomplete"
      id={id}
      type="text" />
      <label
      htmlFor={id}
      ref={labelRef}>
        Search
      </label>
    </div>
  );
};