import React from 'react';
import CodePanel from '../../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="accent-bottom panel">
        <h2>Factorial digit sum</h2>
        <h4>Problem 20</h4>
        <p>n! means n × (n − 1) × ... × 3 × 2 × 1</p>
        <p>For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,</p>
        <p>
          and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0
          = 27.
        </p>
        <p>Find the sum of the digits in the number 100!</p>
      </section>
      {/* prettier-ignore */}
      <CodePanel title="JavaScript">{`
        m => {
          let n = BigInt(1);
          for (let i = BigInt(m); i > 1; i--) {
            n *= i
          }
          return n
            .toString()
            .split('')
            .reduce((acc, v) => +acc + +v)
        }
    `}</CodePanel>
    </>
  );
};