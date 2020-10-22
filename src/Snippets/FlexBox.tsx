import React, { useCallback, useState } from 'react';
import Box from '../Components/Box';
import CodePanel from '../Components/CodePanel';
import { useDebounce } from 'use-debounce';
import Tabs from '../Components/Tabs';

export default () => {

  const
  [styles, setStyles] = useState<string[]>([]),
  [debounce] = useDebounce(styles, 1000),

  handleInput = (id: number) => {
    return (style: string) => {
      const update = [...styles];
      update[id] = style;
      setStyles(update);
    };
  };

  return (
    <Tabs tabs={['row', 'column']}>
      <>
        <style scoped>{debounce[1]}</style>
        <CodePanel onInput={useCallback(handleInput(1), [])} title="CSS">{`
          @media (min-width: 600px) {
            #container1 {
              align-items: baseline;
              /*
              align-items: flex-start;
              align-items: center;
              align-items: flex-end;
              align-items: stretched;
              */
              display: flex;
              flex-direction: row;
              /*
              flex-direction: column;
              flex-direction: column-reverse;
              flex-direction: row-reverse;
              */
              justify-content: space-around;
              /*
              justify-content: center;
              justify-content: flex-start;
              justify-content: flex-end;
              justify-content: space-evenly;
              justify-content: space-between;
              */
              flex-wrap: wrap;
              /*
              flex-wrap: wrap-reverse;
              */
            }
            #container2 {
              display: flex;
            }
          }
          #container1 > div {
            flex: 1 1 25%;
            /* grow shrink basis */
            /* grow for positive space
               shrink for negative space */
            margin: 4px;
          }
          #box1 {
            flex-shrink: 0 !important;
            order: 0;
          }
          #box2 {
            flex-grow: 0 !important;
            order: 3;
          }
          #box3 {
            flex-grow: 2 !important;
            order: 2;
          }
          #box4 {
            flex-shrink: 2 !important;
          }
          #box6 {
            flex-shrink: 0 !important;
          }
      `}</CodePanel>
        <div className="panel" id="container1">
          <Box id={1} styles={{ lineHeight: '50px' }} />
          <Box id={2} />
          <Box id={3} />
          <Box id={4} />
          <Box id={5} />
          <Box id={6} />
        </div>
      </>
      <>
      </>
    </Tabs>
  );
};