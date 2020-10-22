import React from 'react';
import CodePanel from '../../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="accent-bottom panel">
        <h2>Smallest multiple</h2>
        <h4>Problem 5</h4>
        <p>
          2520 is the smallest number that can be divided by each of the numbers
          from 1 to 10 without any remainder.
        </p>
        <p>
          What is the smallest positive number that is evenly divisible by all of
          the numbers from 1 to 20?
        </p>
      </section>
      {/* prettier-ignore */}
      <CodePanel title="JavaScript">{`
        m => {

          let i = m;

          while (true) {
            for (let j = m - 1; j > 1; j--) {
              if (i % j > 0) {
                break;
              }
              else if (j === 2) {
                return i;
              }
            }
            i += m;
          }
        }
    `}</CodePanel>
    </>
  );
};