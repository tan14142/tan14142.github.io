import React from 'react';
import CodePanel from '../../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="accent-bottom panel">
        <h2>10001st prime</h2>
        <h4>Problem 7</h4>
        <p>
          By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can
          see that the 6th prime is 13.
        </p>
        <p>What is the 10 001st prime number?</p>
      </section>
      {/* prettier-ignore */}
      <CodePanel title="JavaScript">{`
        m => {
          let p = [3]

          for (let i = 3; p.length < m - 1; i += 2) {
            if (p.every(v => i % v)) {
              p.push(i);
            }
          }
          return p.pop();
        }
    `}</CodePanel>
    </>
  );
};