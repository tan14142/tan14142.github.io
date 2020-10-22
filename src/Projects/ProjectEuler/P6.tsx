import React from 'react';
import CodePanel from '../../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="accent-bottom panel">
        <h2>Sum square difference</h2>
        <h4>Problem 6</h4>
        <p>The sum of the squares of the first ten natural numbers is,</p>
        <div className="center">1² + 2² + ... + 10² = 385</div>
        <p>The square of the sum of the first ten natural numbers is,</p>
        <div className="center">(1 + 2 + ... + 10)² = 552 = 3025</div>
        <p>
          Hence the difference between the sum of the squares of the first ten
          natural numbers and the square of the sum is
        </p>
        <div className="center">3025 − 385 = 2640</div>
        <p>
          Find the difference between the sum of the squares of the first one
          hundred natural numbers and the square of the sum.
        </p>
      </section>
      {/* prettier-ignore */}
      <CodePanel title="JavaScript">{`
        m => {
          let s1 = 0;
          let s2 = 0;

          for (let i = 1; i <= m; i++) {
            s1 += i * i;
            s2 += i;
          }
          return s2 * s2 - s1;
        }
    `}</CodePanel>
    </>
  );
};