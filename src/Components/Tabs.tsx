import React, { useEffect, useRef } from "react";
import{ Link } from "react-router-dom";
import M from 'materialize-css';
import './Tabs/Style.scss';

interface TabsProps {
  children: React.ReactNode;
  tabs: string[];
}

export default ({ children, tabs }: TabsProps) => {

  const elRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const tabs = M.Tabs.init(elRef.current as Element, {});
    return () => tabs.destroy();
  }, []);

  return (
    <>
      <ul className="tabs" ref={elRef}>
        {tabs.map((title, key) => 
          <li className="tab" key={key}>
            <Link to={"#" + title}>
              {title}
            </Link>
          </li>
        )}
      </ul>
      {React.Children.toArray(children).map((child, key) => 
        <div
        className="flex-column"
        id={tabs[key]}
        key={key}>
          {child}
        </div>
      )}
    </>
  );
};