import React from 'react';
import CodePanel from '../../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="accent-bottom panel">
        <h2>Multiples of 3 and 5</h2>
        <h4>Problem 1</h4>
        <p>
          If we list all the natural numbers below 10 that are multiples of 3 or
          5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
        </p>
        <p>Find the sum of all the multiples of 3 or 5 below 1000.</p>
      </section>
      {/* prettier-ignore */}
      <CodePanel title="JavaScript">{`
        m => {
          let result = 0;

          for (let i = 1; i < m; i++) {
            result += (!(i % 3) || !(i % 5)) && i;
          }

          return result;
        }
    `}</CodePanel>
    </>
  );
};